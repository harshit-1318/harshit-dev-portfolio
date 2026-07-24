import { useState, useMemo, useEffect } from "react";
import type { IProjectData } from "@/types/portfolio";
import type { ProjectCategoryFilter } from "@/components/home/projects/projects-filter";
import {
  normalizeProjects,
  computeCategoryCounts,
  filterProjects,
} from "./project-helpers";
import { useProjectScroll } from "./use-project-scroll";

export function useProjects(projects: IProjectData[]) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategoryFilter>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [scrollDirection, setScrollDirection] = useState<number>(1);

  const normalizedProjects = useMemo(() => normalizeProjects(projects), [projects]);
  const counts = useMemo(() => computeCategoryCounts(normalizedProjects), [normalizedProjects]);
  const filteredProjects = useMemo(
    () => filterProjects(normalizedProjects, activeFilter),
    [normalizedProjects, activeFilter]
  );

  const {
    isDesktop,
    showcaseContainerRef,
    goToNextProject,
    goToPrevProject,
    handleTouchStart,
    handleTouchEnd,
  } = useProjectScroll({
    filteredProjects,
    setSelectedProjectId,
    setScrollDirection,
  });

  useEffect(() => {
    if (filteredProjects.length > 0) {
      if (!filteredProjects.some((p) => p.id === selectedProjectId)) {
        setSelectedProjectId(filteredProjects[0].id);
      }
    }
  }, [filteredProjects, selectedProjectId]);

  const activeFilteredIndex = useMemo(() => {
    const idx = filteredProjects.findIndex((p) => p.id === selectedProjectId);
    return idx >= 0 ? idx : 0;
  }, [filteredProjects, selectedProjectId]);

  const activeProjectIndex = useMemo(() => {
    const idx = normalizedProjects.findIndex((p) => p.id === selectedProjectId);
    return idx >= 0 ? idx : 0;
  }, [normalizedProjects, selectedProjectId]);

  const activeProject = useMemo(() => {
    return filteredProjects[activeFilteredIndex] || normalizedProjects[0];
  }, [filteredProjects, activeFilteredIndex, normalizedProjects]);

  const handleSelectProject = (newId: string) => {
    const newIdx = filteredProjects.findIndex((p) => p.id === newId);
    if (newIdx !== -1 && newIdx !== activeFilteredIndex) {
      setScrollDirection(newIdx > activeFilteredIndex ? 1 : -1);
      setSelectedProjectId(newId);
    }
  };

  return {
    activeFilter,
    setActiveFilter,
    scrollDirection,
    isDesktop,
    showcaseContainerRef,
    normalizedProjects,
    filteredProjects,
    counts,
    activeProject,
    activeProjectIndex,
    activeFilteredIndex,
    handleSelectProject,
    goToNextProject,
    goToPrevProject,
    handleTouchStart,
    handleTouchEnd,
  };
}
