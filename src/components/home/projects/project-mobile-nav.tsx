"use client";

import { cn } from "@/lib/utils";
import type { ProjectItem } from "./project-types";
import type { ProjectCategoryFilter } from "./projects-filter";

interface ProjectMobileNavProps {
  projects: ProjectItem[];
  selectedProjectId: string;
  onSelectProject: (id: string) => void;
  activeFilter: ProjectCategoryFilter;
  onFilterChange: (filter: ProjectCategoryFilter) => void;
  counts: { all: number; production: number; fullstack: number };
}

function getShortTitle(title: string): string {
  if (title.toLowerCase().includes("yourmedicals")) return "Medicals";
  if (title.toLowerCase().includes("eventelite")) return "EventElite";
  if (title.toLowerCase().includes("rentnest")) return "RentNest";
  const words = title.split(" ");
  return words[0].length > 10 ? words[0].substring(0, 8) + ".." : words[0];
}

export function ProjectMobileNav({
  projects,
  selectedProjectId,
  onSelectProject,
  activeFilter,
  onFilterChange,
  counts,
}: ProjectMobileNavProps) {
  const filterOptions: { id: ProjectCategoryFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: counts.all },
    { id: "production", label: "Prod", count: counts.production },
    { id: "fullstack", label: "Full-Stack", count: counts.fullstack },
  ];

  return (
    <div className="block lg:hidden space-y-1.5 pb-2 border-b border-slate-200/80 dark:border-white/10 w-full">
      {/* Category Segmented Bar */}
      <div className="grid grid-cols-3 gap-1 bg-slate-100/80 dark:bg-white/5 p-1 rounded-xl border border-slate-200/70 dark:border-white/10">
        {filterOptions.map((opt) => {
          const isActive = activeFilter === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onFilterChange(opt.id)}
              className={cn(
                "py-1 text-[10px] font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 select-none",
                isActive
                  ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white font-bold shadow-2xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <span>{opt.label}</span>
              <span className="text-[8px] font-mono opacity-75 font-bold">({opt.count})</span>
            </button>
          );
        })}
      </div>

      {/* Project Switcher Pills */}
      <div className="flex items-center gap-1 w-full">
        {projects.map((p, idx) => {
          const isSelected = p.id === selectedProjectId;
          const shortTitle = getShortTitle(p.title);

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectProject(p.id)}
              className={cn(
                "flex-1 min-w-0 px-1.5 py-1 rounded-lg border text-[10px] font-medium transition-all cursor-pointer flex items-center justify-center gap-1 select-none truncate",
                isSelected
                  ? "border-indigo-500/50 bg-indigo-600 text-white dark:bg-indigo-500 shadow-2xs font-bold"
                  : "border-slate-200/80 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-white/10"
              )}
            >
              <span className="font-mono text-[8px] opacity-75">#{String(idx + 1).padStart(2, "0")}</span>
              <span className="truncate">{shortTitle}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
