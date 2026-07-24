import { Briefcase } from "lucide-react";
import { IExperienceData } from "@/types/portfolio";

interface ExperienceBadgesProps {
  activeExp: IExperienceData;
}

export function ExperienceBadges({ activeExp }: ExperienceBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-3">
      {/* Section Badge */}
      <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 dark:border-indigo-400/20 bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-md shadow-2xs hover:scale-105 transition-transform duration-200">
        <Briefcase size={11} className="stroke-[2.5]" />
        <span>Work Experience</span>
      </div>

      {/* Employment Type Badge */}
      <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-md shadow-2xs hover:scale-105 transition-transform duration-200">
        <span>{activeExp.type || "Full-time"}</span>
      </div>

      {/* Status Badge */}
      <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-400/20 bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-md shadow-2xs hover:scale-105 transition-transform duration-200">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span>{activeExp.current ? "Active" : "Completed"}</span>
      </div>
    </div>
  );
}
