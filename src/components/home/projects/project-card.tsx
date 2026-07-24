"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ProjectBrowserFrame, getDisplayUrl } from "./project-browser-frame";
import { CardArchitectureDrawer } from "./project-card-architecture-drawer";
import { ProjectCardActions } from "./project-card-actions";
import { ProjectCardInfo } from "./project-card-info";
import { ProjectMetricsGrid } from "./project-metrics-grid";
import { ProjectStackPills } from "./project-stack-pills";
import type { ProjectItem } from "./project-types";

export type { ProjectItem };

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const accentGradients = [
  "from-indigo-500 via-purple-500 to-indigo-600",
  "from-emerald-500 via-teal-500 to-cyan-600",
  "from-amber-500 via-orange-500 to-rose-600",
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const displayUrl = getDisplayUrl(project);
  const accentGradient = accentGradients[index % accentGradients.length];

  return (
    <ScrollReveal delay={index * 0.05}>
      <SpotlightCard
        spotlightColor="rgba(99, 102, 241, 0.15)"
        className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/90 backdrop-blur-xl p-5 sm:p-8 transition-all duration-300 shadow-md hover:shadow-xl hover:border-indigo-500/40 group overflow-hidden"
      >
        <div className={`h-1 w-full bg-linear-to-r ${accentGradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-full mb-6`} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <ProjectBrowserFrame
              project={project}
              imageHeightClass="h-52 sm:h-60 md:h-64"
              displayUrlOverride={displayUrl}
              addressBarMaxWidth="max-w-47.5"
              browserBarHeight="h-8 sm:h-9"
            />
          </div>

          <div className={`lg:col-span-6 space-y-3.5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <ProjectCardInfo project={project} index={index} />

            <ProjectStackPills
              stack={project.stack}
              maxVisible={20}
              pillClassName="text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-2.5 py-0.5 rounded-lg hover:border-indigo-500/30 transition-colors"
            />

            <ProjectMetricsGrid metrics={project.metrics} />

            <CardArchitectureDrawer
              project={project}
              isExpanded={isExpanded}
              onToggle={() => setIsExpanded(!isExpanded)}
            />

            <ProjectCardActions project={project} />
          </div>
        </div>
      </SpotlightCard>
    </ScrollReveal>
  );
}
