"use client";

import { SkillsHeader } from "@/components/home/skills/skills-header";
import { SkillsSidebar } from "@/components/home/skills/skills-sidebar";
import { SkillsGrid } from "@/components/home/skills/skills-grid";
import { useSkillsFilter } from "@/components/home/skills/hooks/use-skills-filter";

export function SkillsSection() {
  const {
    activeCategory,
    searchQuery,
    currentPage,
    totalPages,
    categoryCounts,
    filteredSkills,
    paginatedSkills,
    itemsPerPage,
    cardsContainerRef,
    handleCategoryChange,
    handleSearchChange,
    handleReset,
    setCurrentPage,
    totalSkillsCount,
  } = useSkillsFilter();

  return (
    <section
      id="skills"
      className="py-8 sm:py-10 lg:py-12 border-t border-border/40 relative z-10 px-3.5 sm:px-6 scroll-mt-24"
    >
      {/* Ambient Background Glow matching Services & Experience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-cyan-500/10 dark:from-indigo-600/10 dark:via-purple-600/5 dark:to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <SkillsHeader />

        {/* Split Frame Container with tight mobile gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 items-stretch">
          <SkillsSidebar
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            categoryCounts={categoryCounts}
            totalSkillsCount={totalSkillsCount}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
            onClearSearch={() => handleSearchChange("")}
          />

          <SkillsGrid
            cardsContainerRef={cardsContainerRef}
            filteredSkills={filteredSkills}
            paginatedSkills={paginatedSkills}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onReset={handleReset}
          />
        </div>
      </div>
    </section>
  );
}
