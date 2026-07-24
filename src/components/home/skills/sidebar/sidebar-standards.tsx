"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu } from "lucide-react";

const QUICK_STATS = [
  { label: "Prod Ready", value: "12+" },
  { label: "Experience", value: "3+ Yrs" },
  { label: "Uptime",     value: "99%" },
];

export function SidebarStandards() {
  return (
    <div className="space-y-1.5 my-1">
      {/* Compact Quick Stats */}
      <div className="grid grid-cols-3 gap-1">
        {QUICK_STATS.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center py-1 px-1 rounded-lg bg-slate-50/90 dark:bg-white/3 border border-slate-200/80 dark:border-white/10"
          >
            <span className="text-[11px] font-bold text-slate-900 dark:text-white leading-none">
              {value}
            </span>
            <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Stack Standards Bar */}
      <div className="p-2 rounded-xl bg-slate-50/90 dark:bg-white/3 border border-slate-200/80 dark:border-white/10 space-y-1 shadow-2xs">
        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-700 dark:text-slate-200">
          <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
            <Sparkles size={11} />
            Stack Readiness
          </span>
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-bold flex items-center gap-1">
            <Cpu size={10} /> 98.5%
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-indigo-600 via-purple-500 to-cyan-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "98.5%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex items-center justify-between text-[8px] font-mono pt-0.5 font-semibold">
          <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            TypeScript
          </span>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            Clean Arch
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            0 Latency
          </span>
        </div>
      </div>
    </div>
  );
}
