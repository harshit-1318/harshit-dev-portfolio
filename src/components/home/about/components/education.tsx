"use client";

import { GraduationCap, Award } from "lucide-react";
import { IEducationData } from "@/types/portfolio";

interface AboutEducationProps {
  education: IEducationData[];
}

export function AboutEducation({ education }: AboutEducationProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-2.5">
        <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          <Award size={14} className="stroke-[2.5]" />
        </div>
        <h3 className="font-bold text-[11px] uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
          Education Pathway
        </h3>
      </div>

      <div className="space-y-4 relative before:absolute before:inset-y-1.5 before:left-4 before:w-0.5 before:bg-linear-to-b before:from-indigo-500 before:via-purple-500/60 before:to-indigo-500/20">
        {education &&
          education.map((edu, idx) => {
            const isLovely = edu.institution.toLowerCase().includes("lovely");
            return (
              <div key={idx} className="group/item relative pl-10">
                {/* Node icon container */}
                <div
                  className={`absolute left-0 top-0.5 w-8 h-8 rounded-full border flex items-center justify-center shadow-xs z-10 transition-all duration-300 ${
                    isLovely
                      ? "bg-linear-to-br from-indigo-500 to-purple-600 border-indigo-400/30 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)] ring-4 ring-indigo-500/10 dark:ring-indigo-400/15"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 group-hover/item:border-indigo-500 group-hover/item:text-indigo-500 group-hover/item:scale-105"
                  }`}
                >
                  <GraduationCap size={15} className="transition-transform duration-300 group-hover/item:scale-110" />
                </div>

                <div className="space-y-1 text-left">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h4 className="font-bold text-sm sm:text-[15px] text-slate-900 dark:text-white leading-snug transition-colors duration-200 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400">
                      {edu.institution}
                    </h4>
                    {isLovely && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-xs">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-medium">{edu.degree}</p>
                  
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-indigo-600 dark:text-indigo-300 font-mono text-[11px] font-semibold border border-slate-200/80 dark:border-slate-700/60 shadow-2xs">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Grade: {edu.grade}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
