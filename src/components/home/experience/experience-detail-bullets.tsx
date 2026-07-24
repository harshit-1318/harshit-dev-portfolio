import { CheckCircle2 } from "lucide-react";
import { IExperienceData } from "@/types/portfolio";

interface ExperienceDetailBulletsProps {
  activeExp: IExperienceData;
  isCSharma: boolean;
}

export function ExperienceDetailBullets({ activeExp, isCSharma }: ExperienceDetailBulletsProps) {
  if (!activeExp.highlights || activeExp.highlights.length === 0) return null;

  const bulletsToRender = isCSharma
    ? [
        "Built responsive user interfaces and modular layouts using React.js, TypeScript, Astro, and Tailwind CSS, maintaining styling consistency across all device viewports.",
        "Developed a full-featured Order Management Dashboard with custom filtering, sorting, and pagination using TanStack Table, integrating RESTful API endpoints via Axios.",
        "Optimized state management and query caching using TanStack Query, collaborating closely with backend engineers and QA teams to ensure reliable production releases.",
      ]
    : activeExp.highlights.filter((h: string) => h !== activeExp.summary).slice(0, 4);

  return (
    <div className="space-y-2.5 pt-1">
      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 font-bold">
        Key Contributions
      </p>
      <div className="space-y-2">
        {bulletsToRender.map((highlight: string, hIdx: number) => (
          <div
            key={hIdx}
            className="group/item flex items-start gap-2.5 p-2.5 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 hover:border-indigo-500/30 hover:bg-white/85 dark:hover:bg-white/10 transition-all duration-200 shadow-2xs"
          >
            <div className="w-5 h-5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/20 group-hover/item:scale-110 transition-transform duration-200">
              <CheckCircle2 size={12} className="stroke-[2.5]" />
            </div>
            <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal sm:font-medium transition-colors duration-200 group-hover/item:text-slate-900 dark:group-hover/item:text-white">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
