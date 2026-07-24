"use client";

import { motion, Variants } from "framer-motion";
import { Zap, ShieldCheck, Activity } from "lucide-react";

interface HeroImpactMetricsProps {
  variants?: Variants;
}

export function HeroImpactMetrics({ variants }: HeroImpactMetricsProps) {
  const metrics = [
    { icon: ShieldCheck, text: "95%+ Layout Consistency", color: "text-indigo-500" },
    { icon: Zap, text: "30+ Reusable UI Modules", color: "text-purple-500" },
    { icon: Activity, text: "Sub-120ms API Latency", color: "text-emerald-500" },
  ];

  return (
    <motion.div
      variants={variants}
      className="flex flex-wrap items-center gap-3 pt-1 select-none"
    >
      {metrics.map((m) => (
        <div
          key={m.text}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-mono font-semibold text-slate-800 dark:text-zinc-200 shadow-xs"
        >
          <m.icon className={`w-3.5 h-3.5 ${m.color} shrink-0`} />
          <span>{m.text}</span>
        </div>
      ))}
    </motion.div>
  );
}
