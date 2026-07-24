"use client";

import { FolderGit2, Star } from "lucide-react";
import type { ProjectItem } from "./project-types";

interface ProjectCardInfoProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCardInfo({ project, index }: ProjectCardInfoProps) {
  const isPinned = project.highlight;

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
          <FolderGit2 size={13} />
          <span>Case Study #{String(index + 1).padStart(2, "0")}</span>
        </span>

        <div className="flex items-center gap-2">
          {isPinned && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Star size={10} className="fill-current" />
              <span>Featured</span>
            </span>
          )}
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-white/10">
            {project.year}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-heading leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-sans font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
          {project.subtitle}
        </p>
      </div>

      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal sm:font-medium">
        {project.description}
      </p>
    </>
  );
}
