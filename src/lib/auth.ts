import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "./db";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET || "harshit_dev_portfolio_secret_key_1318",
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect();
        const email = (credentials.email as string).toLowerCase().trim();
        const user = await User.findOne({ email }).select("+password");
        if (!user) return null;

        let isValid = false;
        if (user.password?.startsWith("$2a$") || user.password?.startsWith("$2b$") || user.password?.startsWith("$2y$")) {
          isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
        } else {
          isValid = (credentials.password as string) === user.password;
        }

        if (!isValid) return null;

        return {
          id: user._id?.toString() || "1",
          email: user.email,
          name: user.name || "Admin",
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
