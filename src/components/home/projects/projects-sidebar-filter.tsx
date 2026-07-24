"use client";

import { cn } from "@/lib/utils";
import type { ProjectCategoryFilter } from "./projects-filter";

interface FilterOption {
  id: ProjectCategoryFilter;
  label: string;
  count: number;
}

interface ProjectsSidebarFilterProps {
  filterOptions: FilterOption[];
  activeFilter: ProjectCategoryFilter;
  onFilterChange: (filter: ProjectCategoryFilter) => void;
}

export function ProjectsSidebarFilter({
  filterOptions,
  activeFilter,
  onFilterChange,
}: ProjectsSidebarFilterProps) {
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
              "relative px-2 py-0.5 text-[11px] font-semibold rounded-lg border transition-all duration-200 cursor-pointer select-none flex items-center gap-1",
              isActive
                ? "border-indigo-500/40 text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-500/10 dark:bg-indigo-400/10 shadow-2xs"
                : "border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5"
            )}
          >
            <span>{option.label}</span>
            <span
              className={cn(
                "text-[9px] font-mono font-bold px-1 py-0.1 rounded-md border",
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
