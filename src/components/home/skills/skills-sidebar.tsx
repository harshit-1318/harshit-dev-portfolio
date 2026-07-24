"use client";

import { Terminal, TrendingUp } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SidebarSearch } from "./sidebar/sidebar-search";
import { SidebarCategories } from "./sidebar/sidebar-categories";
import { SidebarStandards } from "./sidebar/sidebar-standards";

interface SkillsSidebarProps {
  activeCategory: string;
  searchQuery: string;
  categoryCounts: Record<string, number>;
  totalSkillsCount: number;
  onCategoryChange: (cat: string) => void;
  onSearchChange: (q: string) => void;
  onClearSearch: () => void;
}

export function SkillsSidebar({
  activeCategory,
  searchQuery,
  categoryCounts,
  totalSkillsCount,
  onCategoryChange,
  onSearchChange,
  onClearSearch,
}: SkillsSidebarProps) {
  return (
    <div className="lg:col-span-4 w-full lg:h-full">
      <SpotlightCard
        spotlightColor="rgba(99, 102, 241, 0.15)"
        className="rounded-2xl p-2.5 sm:p-4 border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/90 backdrop-blur-xl shadow-md w-full lg:h-full flex flex-col justify-start lg:justify-between"
        containerClassName="w-full lg:h-full flex flex-col justify-start lg:justify-between space-y-2"
      >
        <div className="space-y-2 w-full">
          {/* Inner Accent Line */}
          <div className="h-0.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-80" />

          {/* Search Input */}
          <SidebarSearch
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            onClearSearch={onClearSearch}
          />

          {/* Category Navigation List */}
          <SidebarCategories
            activeCategory={activeCategory}
            categoryCounts={categoryCounts}
            onCategoryChange={onCategoryChange}
          />
        </div>

        {/* Engineering Standards (Hidden on Mobile < lg, Visible on Desktop >= lg) */}
        <div className="hidden lg:block">
          <SidebarStandards />
        </div>

        {/* Footer (Hidden on Mobile < lg, Visible on Desktop >= lg) */}
        <div className="hidden lg:flex pt-2 border-t border-slate-100 dark:border-white/10 items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300 px-1 mt-auto">
          <span className="flex items-center gap-1.5">
            <Terminal size={13} className="text-indigo-600 dark:text-indigo-400" />
            Stack Overview
          </span>
          <span className="flex items-center gap-1 text-slate-900 dark:text-white font-bold">
            <TrendingUp size={12} className="text-emerald-500" />
            {totalSkillsCount} Total Techs
          </span>
        </div>
      </SpotlightCard>
    </div>
  );
}
