"use client";

import { ChevronLeft, ChevronRight, Mouse } from "lucide-react";

interface GridPaginationProps {
  currentPage: number;
  totalPages: number;
  filteredCount: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function GridPagination({
  currentPage,
  totalPages,
  filteredCount,
  itemsPerPage,
  onPageChange,
}: GridPaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-mono">
      <span className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-2">
        <span>
          Showing{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, filteredCount)}
          </span>{" "}
          of{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            {filteredCount}
          </span>
        </span>
        <span
          suppressHydrationWarning
          className="hidden lg:inline-flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-200/80 dark:border-white/10 font-semibold"
        >
          <Mouse size={11} className="text-indigo-600 dark:text-indigo-400" /> Scroll wheel supported
        </span>
      </span>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
          title="Previous page"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`h-7 w-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                currentPage === pageNum
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
          title="Next page"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
