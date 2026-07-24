"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Copy } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ContactEmailCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -1, scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      onClick={handleCopyEmail}
      className="group relative flex items-center justify-between rounded-xl border border-slate-200/90 dark:border-white/10 bg-linear-to-r from-slate-50/80 to-white dark:from-white/4 dark:to-white/2 p-2.5 text-xs backdrop-blur-md transition-all duration-200 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/5 cursor-pointer overflow-hidden"
    >
      <div className="flex items-center gap-2.5 min-w-0 relative z-10">
        <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-cyan-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
          <Mail size={14} />
        </div>
        <div className="min-w-0 space-y-px">
          <p className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
            Email Address
          </p>
          <p className="font-bold text-slate-900 dark:text-white text-xs truncate">
            {siteConfig.email}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="relative z-10 inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 dark:border-white/15 bg-white dark:bg-zinc-800/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-200 group-hover:border-indigo-500/40 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all shadow-2xs"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold"
            >
              <Check size={11} />
              <span>Copied!</span>
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-1"
            >
              <Copy size={11} />
              <span>Copy</span>
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}
