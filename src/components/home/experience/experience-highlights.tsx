import { ShieldCheck, Layers, Users } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ExperienceHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Production Features",
      desc: "Shipped performant code to UK healthcare portal.",
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white group-active:bg-indigo-600 group-active:text-white",
      hoverBorder: "hover:border-indigo-500/40 active:border-indigo-500/40",
      hoverBg: "hover:bg-gradient-to-b hover:from-indigo-500/10 hover:to-transparent active:bg-indigo-500/10",
      titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      spotlightColor: "rgba(99, 102, 241, 0.25)",
    },
    {
      icon: Layers,
      title: "Dashboard Dev",
      desc: "Built robust data tables with TanStack Table.",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white",
      hoverBorder: "hover:border-purple-500/40 active:border-purple-500/40",
      hoverBg: "hover:bg-gradient-to-b hover:from-purple-500/10 hover:to-transparent active:bg-purple-500/10",
      titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      spotlightColor: "rgba(168, 85, 247, 0.25)",
    },
    {
      icon: Users,
      title: "Agile Collab",
      desc: "Coordinated with engineering teams in agile sprints.",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-600 group-hover:text-white group-active:bg-cyan-600 group-active:text-white",
      hoverBorder: "hover:border-cyan-500/40 active:border-cyan-500/40",
      hoverBg: "hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-transparent active:bg-cyan-500/10",
      titleHover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
      spotlightColor: "rgba(6, 182, 212, 0.25)",
    },
  ];

  return (
    <div className="pt-0.5 w-full">
      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2.5">Impact Highlights</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <SpotlightCard
              key={idx}
              spotlightColor={item.spotlightColor}
              containerClassName="items-center justify-center text-center gap-1 py-0.5"
              className={`group rounded-2xl p-2.5 sm:p-3 bg-white/90 dark:bg-[#121214]/85 border border-slate-200/80 dark:border-white/10 backdrop-blur-md hover:-translate-y-0.5 active:-translate-y-0.5 transition-all duration-300 shadow-2xs ${item.hoverBorder} ${item.hoverBg}`}
            >
              <div className={`w-8.5 h-8.5 rounded-xl border flex items-center justify-center ${item.badgeColor} group-hover:scale-110 group-hover:rotate-3 group-active:scale-105 transition-all duration-300 shadow-2xs mb-0.5`}>
                <Icon size={16} className="stroke-[2.5]" />
              </div>
              <span className={`text-[11px] sm:text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider ${item.titleHover} transition-colors duration-300`}>
                {item.title}
              </span>
              <span className="text-[11px] sm:text-[11.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium px-0.5">
                {item.desc}
              </span>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
