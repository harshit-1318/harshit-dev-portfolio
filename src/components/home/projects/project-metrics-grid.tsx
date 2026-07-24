"use client";

import { Sparkles } from "lucide-react";

interface ProjectMetricsGridProps {
  metrics?: Record<string, string>;
  maxItems?: number;
}

export function ProjectMetricsGrid({ metrics, maxItems = 3 }: ProjectMetricsGridProps) {
  if (!metrics || Object.keys(metrics).length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-100 dark:border-white/10">
      {Object.entries(metrics).slice(0, maxItems).map(([key, val]) => (
        <div
          key={key}
          className="bg-indigo-500/5 dark:bg-indigo-400/10 border border-indigo-500/15 rounded-lg px-2 py-1 flex items-center gap-1.5"
        >
          <Sparkles size={10} className="text-amber-500 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 font-sans text-[10px] font-semibold uppercase tracking-wider">
            {key}:
          </span>
          <span className="font-mono text-[11px] font-bold text-slate-900 dark:text-white">{val}</span>
        </div>
      ))}
    </div>
  );
}
