"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
        setError("Invalid email address or password.");
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
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl bg-card/70 backdrop-blur-2xl border border-border/80 p-6 sm:p-8 shadow-2xl shadow-primary/10"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-rose-500/10 border border-rose-500/25 rounded-2xl text-rose-600 dark:text-rose-400 text-xs font-semibold shadow-xs">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 animate-pulse" />
                <span>{error}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
          className="relative w-full h-12 rounded-xl bg-linear-to-r from-indigo-600 via-primary to-cyan-500 hover:from-indigo-500 hover:via-primary hover:to-cyan-400 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group overflow-hidden disabled:opacity-70 disabled:pointer-events-none"
        >
          {/* Subtle button glare effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 text-primary-foreground/80 group-hover:scale-110 transition-transform" />
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4 text-primary-foreground/70 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
