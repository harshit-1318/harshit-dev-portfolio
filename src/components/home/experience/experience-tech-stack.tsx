import { cn } from "@/lib/utils";
import { CORE_TECHS } from "./experience-tech-data";

export function ExperienceTechStack() {
  return (
    <div className="pt-0.5 w-full">
      <p className="text-[9.5px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2.5">
        Core Technologies
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full">
        {CORE_TECHS.map((tech) => (
          <span
            key={tech.name}
            tabIndex={0}
            className={cn(
              "group w-full h-10 sm:h-11 inline-flex items-center justify-center gap-2 px-2.5 sm:px-3 rounded-xl text-xs font-semibold tracking-[0.1px] select-none cursor-pointer",
              "bg-white/90 dark:bg-white/5 backdrop-blur-md",
              "text-slate-800 dark:text-zinc-200",
              "border border-slate-200/80 dark:border-white/10",
              "transition-all duration-200 ease-out",
              "hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xs active:scale-95",
              "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500",
              tech.hoverClass
            )}
          >
            {tech.icon}
            <span className="whitespace-nowrap font-medium text-[11.5px] sm:text-xs group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
              {tech.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
