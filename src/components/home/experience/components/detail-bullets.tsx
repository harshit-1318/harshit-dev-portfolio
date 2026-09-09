import { CheckCircle2 } from "lucide-react";
import { IExperienceData } from "@/types/portfolio";

interface ExperienceDetailBulletsProps {
  activeExp: IExperienceData;
  isCSharma: boolean;
}

export function ExperienceDetailBullets({ activeExp, isCSharma }: ExperienceDetailBulletsProps) {
  if (!activeExp.highlights || activeExp.highlights.length === 0) return null;

  const bulletsToRender = activeExp.highlights && activeExp.highlights.length > 0
    ? activeExp.highlights.filter((h: string) => h !== activeExp.summary)
    : isCSharma
      ? [
          "Developed and maintained core frontend modules for the production-ready YourMedicals Prescriber Portal, a live healthcare platform for a UK-based client.",
          "Developed 20+ scalable, reusable, and responsive UI components using React.js, TypeScript, Astro, Vite, and Tailwind CSS, improving consistency and cross-browser compatibility.",
          "Translated Figma designs into pixel-perfect, accessible, and responsive interfaces while maintaining reusable component patterns and consistent UI standards.",
          "Developed an interactive Order Management Dashboard with filtering, sorting, pagination, and search using TanStack Table; integrated 15+ RESTful API endpoints with Axios and managed server state with TanStack Query.",
          "Collaborated with backend developers, QA engineers, and UI/UX designers in an Agile environment, contributing to sprint planning, code reviews, debugging, testing, and production releases.",
        ]
      : [];

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
