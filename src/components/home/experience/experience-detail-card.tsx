import { Briefcase, MapPin, Calendar, Activity } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { IExperienceData } from "@/types/portfolio";
import { ExperienceDetailBullets } from "./experience-detail-bullets";

interface ExperienceDetailCardProps {
  activeExp: IExperienceData;
  activeIndex: number;
  isCSharma: boolean;
}

export function ExperienceDetailCard({ activeExp, activeIndex, isCSharma }: ExperienceDetailCardProps) {
  return (
    <div className="lg:col-span-5 w-full lg:h-full">
      <ScrollReveal delay={0.06} className="w-full lg:h-full flex flex-col">
        <AnimatePresence mode="wait">
          <SpotlightCard
            key={activeIndex}
            spotlightColor="rgba(99, 102, 241, 0.22)"
            className="rounded-3xl p-4 sm:p-5 bg-linear-to-br from-white/95 via-white/90 to-white/95 dark:from-[#121214]/95 dark:via-[#121214]/90 dark:to-[#121214]/95 border border-indigo-500/20 dark:border-white/10 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-md h-full flex flex-col justify-between lg:grow"
          >
            <div className="space-y-3 sm:space-y-3.5">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 border-b border-indigo-500/10 dark:border-white/10 pb-2.5 sm:pb-3 flex items-center gap-2">
                <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  <Briefcase size={13} className="stroke-[2.5]" />
                </div>
                <span>Experience Overview</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 border-b border-indigo-500/10 dark:border-white/10 pb-3 sm:pb-3.5">
                <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 backdrop-blur-xs hover:border-indigo-500/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-200 group shadow-2xs">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <Calendar size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8.5px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Duration</p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">{activeExp.period}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 backdrop-blur-xs hover:border-purple-500/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-200 group shadow-2xs">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl border border-purple-500/20 bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <Briefcase size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8.5px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Employment</p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">{activeExp.type || "Full-time"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 backdrop-blur-xs hover:border-cyan-500/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-200 group shadow-2xs">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <MapPin size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8.5px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">Jalandhar, Punjab</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 backdrop-blur-xs hover:border-emerald-500/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-200 group shadow-2xs">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-200">
                    <Activity size={13} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8.5px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Client</p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      {isCSharma ? "YourMedicals (UK)" : "Direct Client"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ExperienceDetailBullets activeExp={activeExp} isCSharma={isCSharma} />
          </SpotlightCard>
        </AnimatePresence>
      </ScrollReveal>
    </div>
  );
}
