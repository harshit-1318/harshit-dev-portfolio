"use client";

import { ExternalLink, MousePointerClick, ChevronLeft, ChevronRight } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import type { ProjectItem } from "./project-types";

interface ProjectShowcaseActionsProps {
  project: ProjectItem;
  activeFilteredIndex?: number;
  totalFilteredCount?: number;
  onNext?: () => void;
  onPrev?: () => void;
}

export function ProjectShowcaseActions({
  project,
  activeFilteredIndex = 0,
  totalFilteredCount = 1,
  onNext,
  onPrev,
}: ProjectShowcaseActionsProps) {
  const isFirst = activeFilteredIndex === 0;
  const isLast = activeFilteredIndex === totalFilteredCount - 1;

  return (
    <div className="pt-1.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 flex-wrap mt-auto">
      <div className="flex items-center gap-2 flex-wrap">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold inline-flex items-center gap-1 text-[10px] px-3 py-1 rounded-lg cursor-pointer shadow-2xs transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Live Demo</span>
            <ExternalLink size={11} />
          </a>
        ) : project.id.includes("yourmedicals") ? (
          <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
            Client Production Portal
          </span>
        ) : null}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-semibold inline-flex items-center gap-1 text-[10px] px-3 py-1 rounded-lg cursor-pointer border border-slate-200/80 dark:border-white/10 transition-all duration-300"
          >
            <Github size={11} className="w-3 h-3" />
            <span>Source Code</span>
          </a>
        )}
      </div>

      {/* Desktop Wheel Scroll Indicator */}
      <div className="hidden lg:flex items-center gap-1 text-[10px] font-mono text-slate-400 dark:text-slate-500">
        <MousePointerClick size={12} className="text-indigo-500 animate-pulse" />
        <span>Scroll wheel over card to switch</span>
      </div>

      {/* Mobile Swipe & Next/Prev Controls */}
      <div className="flex lg:hidden items-center gap-1.5 ml-auto">
        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mr-1">
          {activeFilteredIndex + 1} / {totalFilteredCount}
        </span>
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="p-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft size={13} />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          className="p-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}
