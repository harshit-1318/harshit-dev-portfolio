"use client";

import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginFormFields } from "./login-form-fields";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

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
        triggerShake();
      } else {
        setSuccess(true);
        setTimeout(() => router.push("/admin"), 900);
      }
    } catch (err) {
      console.error("[Login Exception]:", err);
      setError("Something went wrong. Please try again.");
      triggerShake();
    } finally {
      if (!success) setLoading(false);
    }
  };

  return (
    <motion.div
      ref={formRef}
      animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      className="relative rounded-2xl bg-card/75 backdrop-blur-2xl border border-border/80 shadow-2xl shadow-black/10 overflow-hidden"
    >
      {/* Top edge glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      {/* Inner card highlight */}
      <div className="absolute inset-0 bg-linear-to-b from-white/[0.04] to-transparent pointer-events-none" />

      {/* Success overlay */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-card/95 backdrop-blur-md rounded-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
            >
              <CheckCircle2 className="w-7 h-7 text-emerald-500" />
            </motion.div>
            <p className="text-sm font-semibold text-foreground">Authenticated!</p>
            <p className="text-xs text-muted-foreground">Redirecting to dashboard…</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="relative p-6 sm:p-7 space-y-5">
        {/* Error alert */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-rose-500/10 border border-rose-500/25 rounded-xl text-rose-600 dark:text-rose-400 text-xs font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{error}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form fields */}
        <LoginFormFields
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          hasError={!!error}
        />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50" />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading || success}
          className="relative w-full h-12 rounded-xl bg-linear-to-r from-indigo-600 via-primary to-cyan-500 hover:from-indigo-500 hover:via-primary hover:to-cyan-400 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group overflow-hidden disabled:opacity-70 disabled:pointer-events-none"
        >
          {/* Glare sweep */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-900 ease-in-out pointer-events-none" />

          {loading ? (
            <>
              {/* Shimmer bar */}
              <div className="absolute inset-0 bg-linear-to-r from-indigo-600/80 via-white/10 to-cyan-500/80 animate-shimmer" />
              <Loader2 className="w-4 h-4 animate-spin relative z-10" />
              <span className="relative z-10">Authenticating…</span>
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
