import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { cn } from "@/lib/utils";
import { IExperienceData } from "@/types/portfolio";

interface ExperienceTabsProps {
  experience: IExperienceData[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function ExperienceTabs({ experience, activeIndex, onSelect }: ExperienceTabsProps) {
  if (experience.length <= 1) return null;

  return (
    <ScrollReveal delay={0.02} className="w-full">
      <div className="flex flex-row gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-none border-b border-slate-100 dark:border-slate-800/40 w-full">
        {experience.map((exp, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={cn(
              "px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer whitespace-nowrap",
              activeIndex === idx
                ? "border-indigo-600/30 dark:border-indigo-400/30 bg-indigo-600/5 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 font-extrabold shadow-sm"
                : "border-slate-200 dark:border-slate-800/60 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
            )}
          >
            {exp.company}
          </button>
        ))}
      </div>
    </ScrollReveal>
  );
}
