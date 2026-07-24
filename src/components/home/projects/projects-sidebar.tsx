"use client";

import { ProjectSidebarItem } from "./project-sidebar-item";
import { ProjectsSidebarFilter } from "./projects-sidebar-filter";
import { ProjectsSidebarFooter } from "./projects-sidebar-footer";
import type { ProjectItem } from "./project-types";
import type { ProjectCategoryFilter } from "./projects-filter";

interface ProjectsSidebarProps {
  projects: ProjectItem[];
  selectedProjectId: string;
  onSelectProject: (id: string) => void;
  activeFilter: ProjectCategoryFilter;
  onFilterChange: (filter: ProjectCategoryFilter) => void;
  counts: { all: number; production: number; fullstack: number };
  totalCount: number;
}

export function ProjectsSidebar({
  projects,
  selectedProjectId,
  onSelectProject,
  activeFilter,
  onFilterChange,
  counts,
  totalCount,
}: ProjectsSidebarProps) {
  const filterOptions: { id: ProjectCategoryFilter; label: string; count: number }[] = [
    { id: "all", label: "All Works", count: counts.all },
    { id: "production", label: "Production", count: counts.production },
    { id: "fullstack", label: "Full-Stack", count: counts.fullstack },
  ];

  return (
    <div className="hidden lg:flex lg:col-span-5 w-full flex-col justify-between space-y-3 lg:border-r border-slate-200/80 dark:border-white/10 lg:pr-5">
      <div className="space-y-2.5 w-full">
        <ProjectsSidebarFilter
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
        />

        <div className="max-h-68 sm:max-h-75 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
          {projects.length > 0 ? (
            projects.map((proj, idx) => (
              <ProjectSidebarItem
                key={proj.id}
                proj={proj}
                idx={idx}
                isSelected={proj.id === selectedProjectId}
                onSelect={onSelectProject}
              />
            ))
          ) : (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400 font-mono text-xs border border-dashed border-slate-200 dark:border-white/10 rounded-xl">
              No projects found.
            </div>
          )}
        </div>
      </div>

      <ProjectsSidebarFooter totalCount={totalCount} />
    </div>
  );
}
