"use client";

import { Briefcase, Code2, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function AboutStats() {
  const stats = [
    {
      icon: Briefcase,
      value: "9+",
      label: "Months Experience",
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:shadow-md group-hover:shadow-indigo-500/30 group-active:bg-indigo-600 group-active:text-white",
      hoverBorder: "hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/15 active:border-indigo-500/40",
      hoverBg: "hover:bg-gradient-to-b hover:from-indigo-500/10 hover:to-transparent active:bg-indigo-500/10",
      valueHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-active:text-indigo-600 dark:group-active:text-indigo-400",
      spotlightColor: "rgba(99, 102, 241, 0.25)",
    },
    {
      icon: Code2,
      value: "8+",
      label: "Technologies",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 group-hover:shadow-md group-hover:shadow-purple-500/30 group-active:bg-purple-600 group-active:text-white",
      hoverBorder: "hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/15 active:border-purple-500/40",
      hoverBg: "hover:bg-gradient-to-b hover:from-purple-500/10 hover:to-transparent active:bg-purple-500/10",
      valueHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400 group-active:text-purple-600 dark:group-active:text-purple-400",
      spotlightColor: "rgba(168, 85, 247, 0.25)",
    },
    {
      icon: Rocket,
      value: "1",
      label: "Live Production Product",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 group-hover:shadow-md group-hover:shadow-cyan-500/30 group-active:bg-cyan-600 group-active:text-white",
      hoverBorder: "hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/15 active:border-cyan-500/40",
      hoverBg: "hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-transparent active:bg-cyan-500/10",
      valueHover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-active:text-cyan-600 dark:group-active:text-cyan-400",
      spotlightColor: "rgba(6, 182, 212, 0.25)",
    },
  ];

  return (
    <ScrollReveal delay={0.09} className="w-full">
      <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <SpotlightCard
              key={idx}
              spotlightColor={stat.spotlightColor}
              className={`group rounded-2xl p-3 sm:p-3.5 bg-white/90 dark:bg-[#121214]/85 border border-indigo-500/15 dark:border-white/10 backdrop-blur-md hover:-translate-y-1.5 active:-translate-y-0.5 transition-all duration-300 shadow-xs ${stat.hoverBorder} ${stat.hoverBg}`}
            >
              <div className="flex flex-col items-center text-center gap-1 w-full justify-center h-full">
                <div className={`p-1.5 rounded-lg border ${stat.badgeColor} group-hover:scale-110 group-hover:rotate-3 group-active:scale-105 transition-all duration-300 shadow-2xs`}>
                  <Icon size={16} className="stroke-[2.5]" />
                </div>
                <span className={`text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight ${stat.valueHover} group-hover:scale-105 group-active:scale-105 transition-all duration-300`}>
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-700 dark:text-slate-200 font-mono uppercase tracking-wider font-bold leading-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
