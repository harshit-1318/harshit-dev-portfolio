"use client";

import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { categories } from "../skills-data";
import { CATEGORY_META, ICONS } from "./sidebar-category-meta";

interface SidebarCategoriesProps {
  activeCategory: string;
  categoryCounts: Record<string, number>;
  onCategoryChange: (cat: string) => void;
}

export function SidebarCategories({
  activeCategory,
  categoryCounts,
  onCategoryChange,
}: SidebarCategoriesProps) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-0.5 mb-0.5">
        Filter by Category
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flex-col gap-1 sm:gap-1.5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const Icon = ICONS[cat] || LayoutGrid;
          const count = categoryCounts[cat] || 0;
          const meta = CATEGORY_META[cat];
          const isAll = cat === "All";

          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`relative flex items-center justify-between gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg sm:rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer select-none group ${
                isAll ? "col-span-2 lg:col-span-1" : "col-span-1"
              } ${
                isActive
                  ? "text-white font-semibold shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 lg:border-transparent lg:bg-transparent"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCategorySidebar"
                  className={`absolute inset-0 rounded-lg sm:rounded-xl bg-linear-to-r ${meta.color} shadow-md`}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1 min-w-0">
                <span
                  className={`flex items-center justify-center w-4 h-4 rounded-md shrink-0 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200/80 dark:bg-white/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-slate-300/80 dark:group-hover:bg-white/20"
                  } transition-colors`}
                >
                  <Icon size={10} />
                </span>
                <span className="font-semibold tracking-tight text-[10px] sm:text-xs whitespace-nowrap">
                  {cat}
                </span>
              </span>

              <span
                className={`relative z-10 px-1 py-0.2 rounded-full text-[9px] font-mono font-bold shrink-0 ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-slate-200/80 dark:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
