"use client";

import { Search, X, Command } from "lucide-react";
import { useEffect } from "react";

interface SidebarSearchProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onClearSearch: () => void;
}

export function SidebarSearch({
  searchQuery,
  onSearchChange,
  onClearSearch,
}: SidebarSearchProps) {
  // Ctrl+K / Cmd+K shortcut focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("skills-search")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="relative group">
      {/* Glow ring on focus */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 transition-colors pointer-events-none z-10"
      />

      <input
        id="skills-search"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tech stack..."
        className="relative z-10 w-full pl-8 pr-16 py-2 rounded-xl text-xs bg-slate-100/90 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all font-medium"
      />

      {/* Keyboard shortcut hint or clear button */}
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1">
        {searchQuery ? (
          <button
            onClick={onClearSearch}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-0.5 rounded-full hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={13} />
          </button>
        ) : (
          <span className="hidden sm:flex items-center gap-0.5 text-[9px] font-mono text-slate-400 dark:text-slate-500 bg-slate-200/70 dark:bg-white/10 px-1.5 py-0.5 rounded border border-slate-300/60 dark:border-white/10">
            <Command size={9} /> K
          </span>
        )}
      </div>
    </div>
  );
}
