"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { statsConfig, DashboardStats } from './dashboard-data';

interface DashboardStatsGridProps {
  stats: DashboardStats | null;
  loading: boolean;
}

export function DashboardStatsGrid({ stats, loading }: DashboardStatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {statsConfig.map((item) => {
        const Icon = item.icon;
        const count = loading
          ? '—'
          : stats
          ? stats[item.key]
          : 0;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={`anime-card rounded-2xl p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 border border-border/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 bg-linear-to-b ${item.gradient}`}
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-11 h-11 rounded-xl ${item.bgColor} border flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary transition-all" />
            </div>
            <div className="mt-4">
              <p className="text-3xl font-black font-heading text-foreground tracking-tight">
                {loading ? (
                  <span className="inline-block w-10 h-8 bg-muted/60 rounded animate-pulse" />
                ) : (
                  count
                )}
              </p>
              <p className="text-xs font-semibold text-foreground/90 mt-1 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5 font-normal">
                {item.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
