"use client";

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Menu, LogOut, ExternalLink, ShieldCheck, RefreshCw } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { motion } from 'framer-motion';

interface AdminHeaderProps {
  setSidebarOpen: (open: boolean) => void;
  userName: string;
}

export function AdminHeader({ setSidebarOpen, userName }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 shrink-0">
      {/* Frosted glass surface */}
      <div className="absolute inset-0 bg-card/80 backdrop-blur-xl border-b border-border/60" />

      {/* Top-edge accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 flex items-center justify-between px-4 lg:px-6 py-3">

        {/* ── Left ── */}
        <div className="flex items-center gap-3">
          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-4.5 h-4.5" />
          </button>

          {/* Admin portal pill */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-xs font-semibold text-primary"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Portal</span>
          </motion.div>

          {/* Signed-in-as label */}
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[10px] text-muted-foreground font-medium">Signed in as</span>
            <span className="text-sm font-bold text-foreground font-heading">{userName}</span>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="flex items-center gap-2">
          {/* Refresh hint */}
          <button
            onClick={() => window.location.reload()}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-xl transition cursor-pointer"
            title="Refresh data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* View website */}
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-xl transition cursor-pointer border border-transparent hover:border-border/60"
          >
            <span className="hidden sm:inline">View Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <ThemeToggle />

          {/* Logout */}
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-destructive/8 text-destructive border border-destructive/20 rounded-xl hover:bg-destructive/15 hover:border-destructive/30 transition cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
