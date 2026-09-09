"use client";

import { FolderGit2 } from "lucide-react";

interface ProjectsSidebarFooterProps {
  totalCount: number;
}

export function ProjectsSidebarFooter({ totalCount }: ProjectsSidebarFooterProps) {
  return (
    <div className="pt-1.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-600 dark:text-slate-300 px-1 mt-auto">
      <span className="flex items-center gap-1">
        <FolderGit2 size={12} className="text-indigo-600 dark:text-indigo-400" />
        Projects
      </span>
      <span className="flex items-center gap-1 text-slate-900 dark:text-white font-bold">
        {totalCount} Total Works
      </span>
    </div>
  );
}
