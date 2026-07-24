"use client";

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { statsConfig, DashboardStats } from './dashboard-data';

interface DashboardStatsGridProps {
  stats: DashboardStats | null;
  loading: boolean;
}

export function DashboardStatsGrid({ stats, loading }: DashboardStatsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
      {statsConfig.map((item, idx) => {
        const Icon = item.icon;
        const val  = stats ? stats[item.key] : 0;
        const count = loading
          ? '—'
          : typeof val === 'number' || typeof val === 'string'
          ? val
          : 0;

        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={item.href}
              className={`
                relative flex flex-col overflow-hidden
                anime-card rounded-2xl p-5 cursor-pointer group
                hover:-translate-y-1.5 transition-all duration-300
                border border-border/70 hover:border-primary/40
                hover:shadow-xl hover:shadow-primary/8
                bg-linear-to-b ${item.gradient}
              `}
            >
              {/* Top-edge accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r ${item.accentGradient}`} />

              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${item.bgColor} border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </div>

              {/* Count */}
              <p className="text-3xl font-black font-heading text-foreground tracking-tight">
                {loading ? (
                  <span className="inline-block w-10 h-8 bg-muted/60 rounded-lg animate-pulse" />
                ) : (
                  count
                )}
              </p>

              <p className="text-xs font-bold text-foreground/80 mt-1 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {item.description}
              </p>

              {/* Subtle trend indicator */}
              {!loading && typeof count === 'number' && count > 0 && (
                <div className={`mt-3 inline-flex items-center gap-1 text-[10px] font-semibold ${item.color} opacity-70`}>
                  <TrendingUp className="w-3 h-3" />
                  Active
                </div>
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
