"use client";

import { motion } from "framer-motion";

export function HeroIdeTerminal() {
  return (
    <div className="border-t border-slate-200/10 dark:border-white/6 bg-slate-950/40 dark:bg-zinc-950/70 px-5 py-3 font-mono text-[10.5px] leading-relaxed shrink-0">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[#e06c75] font-bold">~</span>
        <span className="text-green-400">portfolio</span>
        <span className="text-zinc-600">&gt;</span>
        <span className="text-zinc-200">npm run dev</span>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="text-emerald-500 font-semibold pl-2 flex items-center gap-1.5 text-[11px]"
      >
        <span>✓</span>
        <span>Production Build Ready</span>
      </motion.div>
    </div>
  );
}
