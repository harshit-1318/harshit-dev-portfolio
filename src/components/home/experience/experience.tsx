"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { IExperienceData } from "@/types/portfolio";

import { ExperienceBadges } from "./experience-badges";
import { ExperienceTechStack } from "./experience-tech-stack";
import { ExperienceHighlights } from "./experience-highlights";
import { ExperienceDetailCard } from "./experience-detail-card";
import { ExperienceTabs } from "./experience-tabs";

interface ExperienceSectionProps {
  experience: IExperienceData[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!experience || experience.length === 0) return null;

  const activeExp = experience[activeIndex] || experience[0];
  const isCSharma = activeExp.company.toLowerCase().includes("csharma");

  return (
    <section id="experience" className="py-10 lg:py-12 border-t border-border/40 relative z-10 px-4 sm:px-6 scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-tr from-indigo-500/5 to-cyan-500/5 dark:from-[#6366f1]/2 dark:to-[#55d6f2]/2 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between items-start w-full h-full">
            <div className="w-full">
              <ScrollReveal className="w-full">
                <ExperienceBadges activeExp={activeExp} />
              </ScrollReveal>

              <ExperienceTabs
                experience={experience}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full"
                >
                  <ScrollReveal delay={0.04}>
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-slate-900 dark:text-white tracking-tight leading-tight mb-1.5">
                      {activeExp.role}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-3 flex items-center gap-1.5 flex-wrap">
                      <span>at</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-400/10 px-2.5 py-0.5 rounded-lg border border-indigo-500/20 shadow-2xs">
                        {activeExp.company}
                      </span>
                    </p>
                    <div className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal sm:font-medium mb-4">
                      <p>
                        {isCSharma ? (
                          <>
                            Engineered frontend features for the production-ready <span className="font-semibold text-slate-900 dark:text-white">YourMedicals Prescriber Portal</span>, a healthcare application serving a UK client. Developed responsive interfaces with reusable <span className="font-semibold text-slate-900 dark:text-white">React components</span> and integrated <span className="font-semibold text-slate-900 dark:text-white">RESTful APIs</span> to deliver secure, high-performance dashboards.
                          </>
                        ) : (
                          activeExp.summary
                        )}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.06}>
                    <ExperienceTechStack />
                  </ScrollReveal>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full mt-auto pt-2 lg:pt-3">
              <ExperienceHighlights />
            </div>
          </div>

          <ExperienceDetailCard
            activeExp={activeExp}
            activeIndex={activeIndex}
            isCSharma={isCSharma}
          />
        </div>
      </div>
    </section>
  );
}
