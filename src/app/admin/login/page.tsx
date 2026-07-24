'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LoginForm } from '@/components/admin/login/login-form';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Top navigation actions */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground bg-card/70 backdrop-blur-xl border border-border/70 hover:border-primary/40 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
        <div className="p-1 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/70 shadow-sm flex items-center justify-center">
          <ThemeToggle />
        </div>
      </motion.div>

      {/* Ambient background glows */}
      <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-tr from-primary/20 via-indigo-500/15 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-md my-auto py-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          {/* Animated 3D Badge */}
          <div className="relative inline-block mb-4 group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-indigo-500 to-cyan-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative w-16 h-16 rounded-2xl bg-card/90 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-primary group-hover:rotate-6 transition-transform duration-300" />
            </div>
          </div>

          {/* System Status Pill */}
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admin Portal Online</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-foreground">
            Admin <span className="gradient-text">Control Center</span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
            Sign in with authorized credentials to access your CMS
          </p>
        </motion.div>

        {/* Login Form */}
        <LoginForm />

        {/* Security Badge Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center flex flex-col items-center gap-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card/50 backdrop-blur-md border border-border/50 text-muted-foreground text-[11px] font-medium shadow-xs">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span>256-Bit SSL Encrypted Access</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <Sparkles className="w-3 h-3 text-amber-500" />
          </div>
          <p className="text-[11px] text-muted-foreground/70 font-mono">
            Protected area. Authorized personnel only.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
