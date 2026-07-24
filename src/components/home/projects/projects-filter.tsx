"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ProjectCategoryFilter = "all" | "production" | "fullstack";

interface ProjectsFilterProps {
  activeFilter: ProjectCategoryFilter;
  onFilterChange: (filter: ProjectCategoryFilter) => void;
  counts: {
    all: number;
    production: number;
    fullstack: number;
  };
}

export function ProjectsFilter({
  activeFilter,
  onFilterChange,
  counts,
}: ProjectsFilterProps) {
  const filterOptions: { id: ProjectCategoryFilter; label: string; count: number }[] = [
    { id: "all", label: "All Works", count: counts.all },
    { id: "production", label: "Production", count: counts.production },
    { id: "fullstack", label: "Full-Stack", count: counts.fullstack },
  ];

  return (
    <div className="flex items-center gap-1 flex-wrap">
      {filterOptions.map((option) => {
        const isActive = activeFilter === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onFilterChange(option.id)}
            className={cn(
              "relative px-2.5 py-0.5 text-[11px] font-semibold rounded-full border transition-all duration-300 cursor-pointer select-none flex items-center gap-1",
              isActive
                ? "border-indigo-500/40 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs"
                : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeMasterProjectFilterPill"
                className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-400/15 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span>{option.label}</span>
            <span
              className={cn(
                "text-[9px] font-mono font-bold px-1 py-0.1 rounded-full border",
                isActive
                  ? "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30"
                  : "bg-slate-100 dark:bg-white/5 text-slate-400 border-slate-200 dark:border-white/10"
              )}
            >
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
