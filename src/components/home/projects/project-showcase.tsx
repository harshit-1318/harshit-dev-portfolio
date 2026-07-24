"use client";

import { useState } from "react";
import { ProjectBrowserFrame } from "./project-browser-frame";
import { ArchitectureDrawer } from "./project-architecture-drawer";
import { ProjectMetricsGrid } from "./project-metrics-grid";
import { ProjectShowcaseActions } from "./project-showcase-actions";
import { ProjectShowcaseInfo } from "./project-showcase-info";
import { ProjectStackPills } from "./project-stack-pills";
import { ProjectMobileNav } from "./project-mobile-nav";
import type { ProjectItem } from "./project-types";
import type { ProjectCategoryFilter } from "./projects-filter";

interface ProjectShowcaseProps {
  project: ProjectItem;
  projectIndex: number;
  activeFilteredIndex?: number;
  totalFilteredCount?: number;
  onNext?: () => void;
  onPrev?: () => void;
  filteredProjects?: ProjectItem[];
  activeFilter?: ProjectCategoryFilter;
  onFilterChange?: (filter: ProjectCategoryFilter) => void;
  counts?: { all: number; production: number; fullstack: number };
  onSelectProject?: (id: string) => void;
}

export function ProjectShowcase({
  project,
  projectIndex,
  activeFilteredIndex,
  totalFilteredCount,
  onNext,
  onPrev,
  filteredProjects,
  activeFilter,
  onFilterChange,
  counts,
  onSelectProject,
}: ProjectShowcaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full lg:h-full flex flex-col justify-between space-y-2">
      <div className="space-y-2 w-full">
        {filteredProjects && (
          <ProjectMobileNav
            projects={filteredProjects}
            selectedProjectId={project.id}
            onSelectProject={onSelectProject || (() => {})}
            activeFilter={activeFilter || "all"}
            onFilterChange={onFilterChange || (() => {})}
            counts={counts || { all: filteredProjects.length, production: 0, fullstack: 0 }}
          />
        )}

        <ProjectBrowserFrame project={project} imageHeightClass="h-20 sm:h-24 lg:h-26" />

        <ProjectShowcaseInfo project={project} projectIndex={projectIndex} />

        <ProjectStackPills
          stack={project.stack}
          maxVisible={10}
          pillClassName="text-[9px] font-mono font-medium bg-slate-100/90 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 rounded-md px-1.5 py-0.2"
        />

        <ProjectMetricsGrid metrics={project.metrics} />

        <ArchitectureDrawer
          project={project}
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
        />
      </div>

      <ProjectShowcaseActions
        project={project}
        activeFilteredIndex={activeFilteredIndex}
        totalFilteredCount={totalFilteredCount}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
}
