import { useState, useEffect, useRef, useCallback } from "react";
import type { ProjectItem } from "../types/project-types";
import { useProjectTouch } from "./use-project-touch";

interface UseProjectScrollOptions {
  filteredProjects: ProjectItem[];
  setSelectedProjectId: React.Dispatch<React.SetStateAction<string>>;
  setScrollDirection: (dir: number) => void;
}

export function useProjectScroll({
  filteredProjects,
  setSelectedProjectId,
  setScrollDirection,
}: UseProjectScrollOptions) {
  const [isDesktop, setIsDesktop] = useState(false);
  const lastScrollTime = useRef<number>(0);
  const showcaseContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const filteredProjectsRef = useRef(filteredProjects);
  useEffect(() => {
    filteredProjectsRef.current = filteredProjects;
  }, [filteredProjects]);

  const goToNextProject = useCallback(() => {
    const currentFiltered = filteredProjectsRef.current;
    if (!currentFiltered || currentFiltered.length === 0) return;
    setSelectedProjectId((prevId) => {
      const curIdx = currentFiltered.findIndex((p) => p.id === prevId);
      return curIdx !== -1 && curIdx < currentFiltered.length - 1
        ? (setScrollDirection(1), currentFiltered[curIdx + 1].id)
        : prevId;
    });
  }, [setSelectedProjectId, setScrollDirection]);

  const goToPrevProject = useCallback(() => {
    const currentFiltered = filteredProjectsRef.current;
    if (!currentFiltered || currentFiltered.length === 0) return;
    setSelectedProjectId((prevId) => {
      const curIdx = currentFiltered.findIndex((p) => p.id === prevId);
      return curIdx > 0
        ? (setScrollDirection(-1), currentFiltered[curIdx - 1].id)
        : prevId;
    });
  }, [setSelectedProjectId, setScrollDirection]);

  useEffect(() => {
    const el = showcaseContainerRef.current;
    if (!el) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024 || Math.abs(e.deltaY) < 15) return;
      const currentFiltered = filteredProjectsRef.current;
      if (!currentFiltered || currentFiltered.length === 0) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 400) return;

      const selectedId = el.getAttribute("data-selected-id") || "";
      const curIdx = currentFiltered.findIndex((p) => p.id === selectedId);

      if (e.deltaY > 0 && curIdx < currentFiltered.length - 1) {
        e.preventDefault();
        lastScrollTime.current = now;
        goToNextProject();
      } else if (e.deltaY < 0 && curIdx > 0) {
        e.preventDefault();
        lastScrollTime.current = now;
        goToPrevProject();
      }
    };

    el.addEventListener("wheel", handleNativeWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleNativeWheel);
  }, [goToNextProject, goToPrevProject]);

  const { handleTouchStart, handleTouchEnd } = useProjectTouch({
    onNext: goToNextProject,
    onPrev: goToPrevProject,
  });

  return {
    isDesktop,
    showcaseContainerRef,
    goToNextProject,
    goToPrevProject,
    handleTouchStart,
    handleTouchEnd,
  };
}
