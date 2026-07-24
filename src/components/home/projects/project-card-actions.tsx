"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import type { ProjectItem } from "./project-types";

interface ProjectCardActionsProps {
  project: ProjectItem;
}

export function ProjectCardActions({ project }: ProjectCardActionsProps) {
  return (
    <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center gap-3 flex-wrap">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl cursor-pointer shadow-md shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02]"
        >
          <span>Live Demo</span>
          <ExternalLink size={13} />
        </a>
      ) : project.id.includes("yourmedicals") ? (
        <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
          Client Production Portal
        </span>
      ) : null}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-semibold inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl cursor-pointer border border-slate-200 dark:border-white/10 transition-all duration-300"
        >
          <Github size={13} className="w-3.5 h-3.5" />
          <span>Source Code</span>
        </a>
      )}
    </div>
  );
}
