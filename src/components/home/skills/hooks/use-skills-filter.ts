"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { skillsData } from "../skills-data";
import { useWheelScroll } from "./use-wheel-scroll";

const ITEMS_PER_PAGE = 6;

export function useSkillsFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('a[href*="#skills"]')) {
        setActiveCategory("All");
        setSearchQuery("");
        setCurrentPage(1);
      }
    };
    const handleHash = () => {
      if (window.location.hash === "#skills") {
        setActiveCategory("All");
        setSearchQuery("");
        setCurrentPage(1);
      }
    };
    window.addEventListener("click", handleNavClick);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("click", handleNavClick);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: skillsData.length };
    skillsData.forEach((s) => { counts[s.category] = (counts[s.category] || 0) + 1; });
    return counts;
  }, []);

  const filteredSkills = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return skillsData.filter((s) => {
      const matchCat = activeCategory === "All" || s.category === activeCategory;
      const matchQ = !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || s.tag.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);

  const paginatedSkills = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSkills.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSkills, currentPage]);

  const currentPageRef = useRef(1);
  const totalPagesRef = useRef(1);
  currentPageRef.current = currentPage;
  totalPagesRef.current = totalPages;

  const scrollToSkillsTop = () => {
    if (typeof window === "undefined") return;
    const section = document.getElementById("skills");
    if (!section) return;
    const lenisInstance = (window as any).lenis;
    if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
      lenisInstance.scrollTo(section, { offset: -70 });
      return;
    }
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => { scrollToSkillsTop(); }, 10);
  };

  useWheelScroll({
    cardsContainerRef, currentPageRef, totalPagesRef,
    onNext: () => handlePageChange(Math.min(currentPageRef.current + 1, totalPagesRef.current)),
    onPrev: () => handlePageChange(Math.max(currentPageRef.current - 1, 1)),
  });

  const handleCategoryChange = (cat: string) => { setActiveCategory(cat); setCurrentPage(1); if (searchQuery) setSearchQuery(""); };
  const handleSearchChange = (q: string) => { setSearchQuery(q); setCurrentPage(1); if (q && activeCategory !== "All") setActiveCategory("All"); };
  const handleReset = () => { setActiveCategory("All"); setSearchQuery(""); setCurrentPage(1); };

  return {
    activeCategory, searchQuery, currentPage, totalPages, categoryCounts,
    filteredSkills, paginatedSkills, itemsPerPage: ITEMS_PER_PAGE,
    cardsContainerRef, handleCategoryChange, handleSearchChange, handleReset,
    setCurrentPage: handlePageChange, totalSkillsCount: skillsData.length,
  };
}
