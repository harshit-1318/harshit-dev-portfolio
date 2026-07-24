"use client";

import Link from 'next/link';
import { Plus, ExternalLink } from 'lucide-react';

interface DashboardWelcomeBannerProps {
  userName: string;
}

export function DashboardWelcomeBanner({ userName }: DashboardWelcomeBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-r from-primary/15 via-indigo-500/10 to-cyan-500/15 p-6 lg:p-8 shadow-xl shadow-primary/5">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            MongoDB Database Online
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Welcome back, <span className="gradient-text">{userName}</span>! 👋
          </h1>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
            Frontend Developer • Control & customize your portfolio projects, skills, certificates, and visitor messages dynamically.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition shadow-md shadow-primary/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm font-semibold hover:bg-muted transition cursor-pointer"
          >
            View Live Site
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </div>
  );
}
