"use client";

import { User2, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function AboutBadges() {
  return (
    <ScrollReveal className="w-full">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {/* About Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/15 dark:border-indigo-400/20 bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider select-none h-7 shadow-2xs">
          <User2 size={13} className="stroke-[2.5]" />
          <span>About Me</span>
        </div>
        {/* Location Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-500/5 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider select-none h-7 shadow-2xs">
          <MapPin size={13} />
          <span>Jalandhar, Punjab <span className="hidden sm:inline">• Open to Relocation</span></span>
        </div>
        {/* Status Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/15 dark:border-emerald-400/20 bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider select-none h-7 shadow-2xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>MCA Student</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
