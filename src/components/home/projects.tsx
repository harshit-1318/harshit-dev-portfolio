"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectsHeader } from "@/components/home/projects/projects-header";
import { ProjectsSidebar } from "@/components/home/projects/projects-sidebar";
import { ProjectShowcase } from "@/components/home/projects/project-showcase";
import { useProjects } from "@/components/home/projects/use-projects";
import { showcaseVariants } from "@/components/home/projects/projects-animations";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import type { IProjectData } from "@/types/portfolio";

export function ProjectsSection({ projects = [] }: { projects?: IProjectData[] }) {
  const {
    activeFilter, setActiveFilter, scrollDirection, isDesktop, showcaseContainerRef,
    normalizedProjects, filteredProjects, counts, activeProject, activeProjectIndex,
    activeFilteredIndex, handleSelectProject, goToNextProject, goToPrevProject,
    handleTouchStart, handleTouchEnd,
  } = useProjects(projects);

  if (!normalizedProjects || normalizedProjects.length === 0) return null;

  return (
    <section id="projects" className="py-6 sm:py-8 lg:py-10 border-t border-border/40 relative z-10 px-3.5 sm:px-6 scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-cyan-500/10 dark:from-indigo-600/10 dark:via-purple-600/5 dark:to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
        <ProjectsHeader />

        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.15)"
          className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/90 backdrop-blur-xl p-4 sm:p-5 lg:p-6 pb-6 sm:pb-7 lg:pb-8 shadow-xl group overflow-hidden w-full"
        >
          <div className="h-0.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-80 mb-4 sm:mb-5" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
            <ProjectsSidebar
              projects={filteredProjects}
              selectedProjectId={activeProject?.id ?? ""}
              onSelectProject={handleSelectProject}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              counts={counts}
              totalCount={normalizedProjects.length}
            />

            <div
              ref={showcaseContainerRef}
              data-selected-id={activeProject?.id ?? ""}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              {...(isDesktop ? { "data-lenis-prevent": "true" } : {})}
              className="lg:col-span-7 w-full lg:h-full cursor-pointer relative min-h-85 sm:min-h-90 flex flex-col justify-between"
            >
              <AnimatePresence mode="wait" custom={scrollDirection}>
                {activeProject && (
                  <motion.div
                    key={activeProject.id}
                    custom={scrollDirection}
                    variants={showcaseVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="w-full lg:h-full flex flex-col"
                  >
                    <ProjectShowcase
                      project={activeProject}
                      projectIndex={activeProjectIndex}
                      activeFilteredIndex={activeFilteredIndex}
                      totalFilteredCount={filteredProjects.length}
                      onNext={goToNextProject}
                      onPrev={goToPrevProject}
                      filteredProjects={filteredProjects}
                      activeFilter={activeFilter}
                      onFilterChange={setActiveFilter}
                      counts={counts}
                      onSelectProject={handleSelectProject}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
