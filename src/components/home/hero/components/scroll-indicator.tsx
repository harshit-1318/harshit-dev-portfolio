"use client";

import { motion } from "framer-motion";

export function HeroScrollIndicator() {
  return (
    <div className="hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity duration-300 pointer-events-none select-none">
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1"
      >
        <span className="text-[9px] font-mono tracking-[0.28em] uppercase text-slate-400 dark:text-zinc-500">
          Scroll
        </span>
        <span className="text-slate-400 dark:text-zinc-500 text-xs">↓</span>
      </motion.div>
    </div>
  );
}
