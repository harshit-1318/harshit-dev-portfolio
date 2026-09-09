'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LoginForm } from '@/components/admin/login';
import { AmbientBackground } from '@/components/admin/login/components/ambient-background';
import { BrandPanel } from '@/components/admin/login/components/brand-panel';
import { SecurityFooter } from '@/components/admin/login/components/security-footer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex">
      {/* Ambient background & floating particles */}
      <AmbientBackground />

      {/* Brand promotional showcase panel (desktop only) */}
      <BrandPanel />

      {/* Right Form Panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-5 sm:p-8 relative">
        {/* Top-right controls */}
        <motion.div
          {...fadeUp(0.1)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2"
        >
          <Link
            href="/"
            className="lg:hidden group flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground bg-card/70 backdrop-blur-xl border border-border/70 hover:border-primary/40 rounded-2xl transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Portfolio</span>
          </Link>
          <div className="p-1.5 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/70 shadow-sm flex items-center justify-center">
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Form column */}
        <div className="w-full max-w-sm">
          {/* Header — shown on mobile/tablet only */}
          <motion.div {...fadeUp(0.15)} className="lg:hidden text-center mb-8">
            <div className="relative inline-block mb-4 group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-indigo-500 to-cyan-500 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative w-14 h-14 rounded-2xl bg-card/90 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-extrabold font-heading tracking-tight text-foreground">
              Admin <span className="gradient-text">Control Center</span>
            </h1>
            <p className="text-xs text-muted-foreground mt-1.5">
              Sign in with authorized credentials
            </p>
          </motion.div>

          {/* Desktop header inside form column */}
          <motion.div {...fadeUp(0.2)} className="hidden lg:block mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">Secure Access</p>
            <h2 className="text-2xl font-extrabold font-heading text-foreground">
              Welcome back 👋
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Enter your credentials to continue</p>
          </motion.div>

          {/* Login Form */}
          <motion.div {...fadeUp(0.3)}>
            <LoginForm />
          </motion.div>

          {/* Security details footer */}
          <SecurityFooter />
        </div>
      </div>
    </div>
  );
}
