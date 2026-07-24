"use client";

import { FolderGit2, Star } from "lucide-react";
import type { ProjectItem } from "./project-types";

interface ProjectShowcaseInfoProps {
  project: ProjectItem;
  projectIndex: number;
}

export function ProjectShowcaseInfo({ project, projectIndex }: ProjectShowcaseInfoProps) {
  return (
    <div className="space-y-0.5">
      <div className="flex items-center justify-between flex-wrap gap-1">
        <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase flex items-center gap-1">
          <FolderGit2 size={11} />
          <span>Project #{String(projectIndex + 1).padStart(2, "0")}</span>
        </span>

        <div className="flex items-center gap-1">
          {project.highlight && (
            <span className="inline-flex items-center gap-0.5 text-[8px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-1.5 py-0.1 rounded-full uppercase tracking-wider">
              <Star size={7} className="fill-current" />
              <span>Featured</span>
            </span>
          )}
          <span className="text-[10px] font-mono font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-1.5 py-0.1 rounded-full">
            {project.year}
          </span>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
        {project.title}
      </h3>

      {project.subtitle && (
        <p className="text-xs font-sans font-semibold text-indigo-600 dark:text-indigo-400 leading-snug line-clamp-1">
          {project.subtitle}
        </p>
      )}

      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-normal line-clamp-2">
        {project.description}
      </p>
    </div>
  );
}
