"use client";

import { useState, useEffect, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillItem } from "./skills-data";
import { SkillCard } from "./skill-card";
import { GridPagination } from "./grid/grid-pagination";
import { GridEmptyState } from "./grid/grid-empty-state";
import { GridMobileHeader } from "./grid/grid-mobile-header";

interface SkillsGridProps {
  cardsContainerRef: RefObject<HTMLDivElement | null>;
  filteredSkills: SkillItem[];
  paginatedSkills: SkillItem[];
  activeCategory: string;
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onReset: () => void;
}

export function SkillsGrid({
  cardsContainerRef, filteredSkills, paginatedSkills, activeCategory, searchQuery,
  currentPage, totalPages, itemsPerPage, onPageChange, onReset,
}: SkillsGridProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <div
      ref={cardsContainerRef}
      {...(isDesktop ? { "data-lenis-prevent": "true" } : {})}
      className="lg:col-span-8 min-h-105 flex flex-col justify-between space-y-2.5 sm:space-y-4 select-none"
    >
      {filteredSkills.length > 0 ? (
        <>
          {totalPages > 1 && (
            <GridMobileHeader
              currentPage={currentPage}
              totalPages={totalPages}
              filteredCount={filteredSkills.length}
              onPageChange={onPageChange}
            />
          )}

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={activeCategory + searchQuery + currentPage}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              onPanEnd={(_, info) => {
                if (info.offset.x < -40 && currentPage < totalPages) {
                  onPageChange(currentPage + 1);
                } else if (info.offset.x > 40 && currentPage > 1) {
                  onPageChange(currentPage - 1);
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 touch-pan-y"
            >
              {paginatedSkills.map((skill, idx) => (
                <SkillCard key={skill.name} skill={skill} idx={idx} />
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <GridPagination
              currentPage={currentPage}
              totalPages={totalPages}
              filteredCount={filteredSkills.length}
              itemsPerPage={itemsPerPage}
              onPageChange={onPageChange}
            />
          )}
        </>
      ) : (
        <GridEmptyState
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onReset={onReset}
        />
      )}
    </div>
  );
}
