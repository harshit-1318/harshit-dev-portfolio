"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, ExternalLink, Sparkles } from 'lucide-react';

interface DashboardWelcomeBannerProps {
  userName: string;
}

export function DashboardWelcomeBanner({ userName }: DashboardWelcomeBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl shadow-primary/8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/12 via-indigo-500/8 to-cyan-500/12" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl translate-y-1/2 pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 lg:p-8">
        <div className="space-y-3 max-w-xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            MongoDB Database Online
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-2xl lg:text-4xl font-extrabold font-heading text-foreground tracking-tight"
          >
            Welcome back,{' '}
            <span className="gradient-text">{userName}</span>! 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            Frontend Developer · Control &amp; customize your portfolio projects, skills,
            certificates, and visitor messages dynamically.
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 shrink-0"
        >
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/25 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/70 text-foreground text-sm font-semibold hover:bg-card hover:border-border transition-all cursor-pointer shadow-sm"
          >
            View Live Site
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </Link>
          <Link
            href="/admin/settings"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-card/60 backdrop-blur-md border border-border/60 text-muted-foreground hover:text-foreground text-sm font-medium hover:bg-card/80 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
