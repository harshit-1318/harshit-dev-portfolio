"use client";

import { motion } from "framer-motion";
import { ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectStackPills } from "./project-stack-pills";
import type { ProjectItem } from "./project-types";

interface ProjectListItemProps {
  proj: ProjectItem;
  idx: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function ProjectListItem({
  proj,
  idx,
  isSelected,
  onSelect,
}: ProjectListItemProps) {
  return (
    <motion.div
      key={proj.id}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(proj.id)}
      className={cn(
        "p-2.5 rounded-lg border transition-all duration-300 cursor-pointer relative group",
        isSelected
          ? "border-indigo-500/50 bg-indigo-500/10 dark:bg-indigo-500/15 shadow-2xs"
          : "border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-white/5 hover:border-indigo-500/30 hover:bg-slate-100/80 dark:hover:bg-white/10"
      )}
    >
      {isSelected && (
        <motion.div
          layoutId="activeProjectListBar"
          className="absolute left-0 top-2 bottom-2 w-1 bg-indigo-600 dark:bg-indigo-400 rounded-r-full"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <div className="flex items-start justify-between gap-2">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500">
              #{String(idx + 1).padStart(2, "0")}
            </span>
            {proj.highlight && (
              <span className="inline-flex items-center gap-0.5 text-[8px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-1 py-0.1 rounded-full uppercase tracking-wider">
                <Star size={7} className="fill-current" />
                <span>Featured</span>
              </span>
            )}
            <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">
              {proj.year}
            </span>
          </div>

          <h4
            className={cn(
              "text-xs font-bold font-heading leading-snug transition-colors",
              isSelected
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
            )}
          >
            {proj.title}
          </h4>

          <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
            {proj.subtitle}
          </p>

          <ProjectStackPills stack={proj.stack} />
        </div>

        <div
          className={cn(
            "p-1 rounded-full transition-all duration-300 shrink-0 mt-0.5",
            isSelected
              ? "bg-indigo-600 text-white dark:bg-indigo-500"
              : "bg-slate-200/60 dark:bg-white/10 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
          )}
        >
          {isSelected ? <CheckCircle2 size={12} /> : <ChevronRight size={12} />}
        </div>
      </div>
    </motion.div>
  );
}
