"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { quickActions } from './dashboard-data';

export function DashboardQuickActions() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold font-heading text-foreground">
          Quick Management Actions
        </h2>
        <span className="text-xs text-muted-foreground font-mono">CMS Shortcuts</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-3.5 p-4 anime-card rounded-2xl border border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {action.label}
                </span>
                <span className="text-[11px] text-muted-foreground truncate">
                  {action.description}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary transition-all shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
