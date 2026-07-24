"use client";

import { ProjectListItem } from "./project-list-item";
import type { ProjectItem } from "./project-types";

interface ProjectsListProps {
  projects: ProjectItem[];
  selectedProjectId: string;
  onSelectProject: (id: string) => void;
}

export function ProjectsList({
  projects,
  selectedProjectId,
  onSelectProject,
}: ProjectsListProps) {
  return (
    <div className="flex flex-col h-full justify-between space-y-1.5">
      <div className="max-h-87.5 sm:max-h-95 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
        {projects.length > 0 ? (
          projects.map((proj, idx) => (
            <ProjectListItem
              key={proj.id}
              proj={proj}
              idx={idx}
              isSelected={proj.id === selectedProjectId}
              onSelect={onSelectProject}
            />
          ))
        ) : (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400 font-mono text-xs border border-dashed border-slate-200 dark:border-white/10 rounded-lg">
            No projects in this category.
          </div>
        )}
      </div>

      <div className="text-center pt-0.5">
        <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500">
          Click any project to update showcase on left
        </span>
      </div>
    </div>
  );
}
