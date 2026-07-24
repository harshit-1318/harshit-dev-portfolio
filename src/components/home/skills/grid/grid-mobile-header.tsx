"use client";

import { ChevronLeft, ChevronRight, Hand } from "lucide-react";

interface GridMobileHeaderProps {
  currentPage: number;
  totalPages: number;
  filteredCount: number;
  onPageChange: (page: number) => void;
}

export function GridMobileHeader({
  currentPage,
  totalPages,
  filteredCount,
  onPageChange,
}: GridMobileHeaderProps) {
  return (
    <div className="flex lg:hidden items-center justify-between px-2.5 py-1.5 rounded-xl bg-slate-100/90 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-xs font-mono">
      <span className="text-[10.5px] text-slate-600 dark:text-slate-300 flex items-center gap-1">
        <span>
          Page{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            {currentPage}
          </span>
          /
          <span className="font-bold text-slate-900 dark:text-white">
            {totalPages}
          </span>
        </span>
        <span className="text-[9.5px] text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-1.5 py-0.2 rounded font-semibold flex items-center gap-0.5 ml-1">
          <Hand size={9} /> Swipe 👈👉
        </span>
      </span>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
          title="Previous page"
        >
          <ChevronLeft size={13} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`h-5.5 w-5.5 rounded-md text-[11px] font-semibold flex items-center justify-center transition-all cursor-pointer ${
              currentPage === pageNum
                ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
            }`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
          title="Next page"
        >
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}
