"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function SkillsHeader() {
  return (
    <ScrollReveal>
      <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-slate-900 dark:text-white tracking-tight text-center">
        Technical{" "}
        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400 bg-clip-text text-transparent">
          Skills & Stack
        </span>
      </h2>
      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm text-center mt-1 max-w-xl mx-auto leading-snug font-normal sm:font-medium">
        Core competencies, production frameworks, & developer tools I leverage daily
      </p>
    </ScrollReveal>
  );
}
