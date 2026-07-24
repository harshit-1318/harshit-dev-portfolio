"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ServiceItem } from "./services-data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = service.icon;

  return (
    <SpotlightCard
      spotlightColor={service.spotlightColor}
      className={`rounded-xl p-3.5 sm:p-4 border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/90 backdrop-blur-xl transition-all duration-300 shadow-xs group h-full flex flex-col justify-between ${service.hoverBorder}`}
    >
      <div className="space-y-2 relative z-10">
        <div className={`h-0.5 w-full bg-linear-to-r ${service.accentGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-full mb-1.5`} />

        <div className="flex items-center justify-between">
          <div className={`p-1.5 sm:p-2 rounded-lg ${service.accentBg} w-fit border shadow-2xs group-hover:scale-105 transition-all duration-300`}>
            <IconComponent size={17} className="stroke-[2.2]" />
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
              {service.number}
            </span>
            <span className="text-[10px] font-mono font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2 py-0.5 rounded-full shadow-2xs">
              {service.category}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white font-heading leading-snug transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            {service.title}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-snug font-normal sm:font-medium">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] font-medium bg-slate-100/90 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 rounded-lg px-2.5 py-0.5 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-white/10 transition-all shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-800 dark:text-slate-200">
          <Sparkles size={12} className="text-amber-500 shrink-0" />
          <span className="truncate">{service.highlightMetric}</span>
        </div>

        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white transition-all duration-300 shrink-0">
          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </SpotlightCard>
  );
}
