"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ContactAvailability() {
  return (
    <div className="space-y-2.5">
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-0.5 text-[10px] sm:text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-2xs"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <span className="flex items-center gap-1">
          <span>Available for new projects</span>
          <Sparkles size={10} className="text-emerald-500 opacity-90 animate-pulse" />
        </span>
      </motion.div>

      {/* Heading */}
      <div className="space-y-0.5">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Let&apos;s discuss your project
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal font-normal sm:font-medium">
          Open to full-time roles, freelance work, and technical partnerships.
        </p>
      </div>
    </div>
  );
}
