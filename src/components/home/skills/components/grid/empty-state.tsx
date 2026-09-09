"use client";

import { motion } from "framer-motion";
import { Search, RotateCcw } from "lucide-react";

interface GridEmptyStateProps {
  searchQuery: string;
  activeCategory: string;
  onReset: () => void;
}

export function GridEmptyState({
  searchQuery,
  activeCategory,
  onReset,
}: GridEmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 text-center space-y-4 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 h-full backdrop-blur-xl"
    >
      <div className="p-3.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
        <Search size={24} />
      </div>
      <div className="space-y-1 max-w-xs">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          No matching skills found
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          No results for &quot;{searchQuery}&quot; in {activeCategory}.
        </p>
      </div>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-xs cursor-pointer"
      >
        <RotateCcw size={13} />
        Reset Filters
      </button>
    </motion.div>
  );
}
