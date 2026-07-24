"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { LoginFormFields } from "./login-form-fields";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        console.error("[Login Error]:", result.error);
        setError("Invalid email or password");
      } else {
        router.push("/admin");
      }
    } catch (err) {
      console.error("[Login Exception]:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="anime-card rounded-2xl p-8 shadow-xl shadow-primary/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="flex items-center gap-2 px-4 py-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm">
            <Lock className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <LoginFormFields
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <button
          type="submit"
          disabled={loading}
          className="anime-btn w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              Sign In
            </>
          )}
        </button>
      </form>
    </div>
  );
}
