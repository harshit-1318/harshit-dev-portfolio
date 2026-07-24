"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { quickActions } from './dashboard-data';

export function DashboardQuickActions() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold font-heading text-foreground">Quick Management</h2>
          <p className="text-[11px] text-muted-foreground font-mono mt-0.5">CMS Shortcuts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {quickActions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.35 }}
            >
              <Link
                href={action.href}
                className="relative flex items-center gap-3.5 p-4 anime-card rounded-2xl border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer group shadow-xs hover:shadow-lg hover:shadow-primary/8 overflow-hidden"
              >
                {/* Subtle sweep on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-200 relative z-10">
                  <Icon className="w-4.5 h-4.5 text-primary" />
                </div>

                <div className="flex flex-col min-w-0 flex-1 relative z-10">
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {action.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground truncate">
                    {action.description}
                  </span>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0 relative z-10" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
