import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SkillItem } from "./skills-data";

interface SkillCardProps {
  skill: SkillItem;
  idx: number;
}

export function SkillCard({ skill, idx }: SkillCardProps) {
  const IconComponent = skill.icon;
  
  // Spotlight glow color by category
  const spotlightColor =
    skill.category === "Frontend Core"
      ? "rgba(99, 102, 241, 0.18)"
      : skill.category === "API & State"
      ? "rgba(244, 63, 94, 0.18)"
      : skill.category === "Backend & DB"
      ? "rgba(16, 185, 129, 0.18)"
      : "rgba(245, 158, 11, 0.18)";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.24, delay: Math.min(idx * 0.02, 0.15), ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="h-full"
    >
      <SpotlightCard
        spotlightColor={spotlightColor}
        className="rounded-xl p-3.5 sm:p-4 border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/90 backdrop-blur-xl transition-all duration-300 shadow-xs group h-full flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]"
      >
        <div className="space-y-2.5 relative z-10">
          {/* Inner Top Accent Bar matching Services */}
          <div className={`h-0.5 w-full bg-linear-to-r ${skill.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-full mb-1`} />

          <div className="flex items-center justify-between gap-2">
            <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-all duration-300 shadow-2xs">
              <IconComponent size={17} className="stroke-[2.2]" />
            </div>
            
            <span
              className={`inline-flex items-center gap-1.5 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                skill.tag === "Production Core"
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                  : skill.tag === "Advanced"
                  ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                  : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                  skill.tag === "Production Core"
                    ? "bg-indigo-500"
                    : skill.tag === "Advanced"
                    ? "bg-purple-500"
                    : "bg-emerald-500"
                }`}
              />
              {skill.tag}
            </span>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading tracking-tight leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              {skill.name}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-normal sm:font-medium line-clamp-2">
              {skill.description}
            </p>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[10px] font-mono relative z-10">
          <span className="text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2 py-0.5 rounded-full shadow-2xs">
            {skill.category}
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
            <span className="inline-block h-1 w-1 rounded-full bg-indigo-500" />
            Active
          </span>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}



