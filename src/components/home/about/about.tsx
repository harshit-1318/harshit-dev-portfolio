"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { IProfileData, IEducationData } from "@/types/portfolio";

import { AboutBadges } from "./about-badges";
import { AboutBio } from "./about-bio";
import { AboutStats } from "./about-stats";
import { AboutEducation } from "./about-education";
import { AboutFocus } from "./about-focus";

export interface AboutSectionProps {
  profile: IProfileData;
  education: IEducationData[];
}

export function AboutSection({ education }: AboutSectionProps) {
  return (
    <section id="about" className="py-10 lg:py-12 border-t border-border/40 relative z-10 px-4 sm:px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Bio info & Stats - 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start w-full h-full">
            <div className="w-full">
              <AboutBadges />
              <AboutBio />
            </div>
            <div className="w-full mt-auto pt-2 lg:pt-3">
              <AboutStats />
            </div>
          </div>

          {/* Right: Education & Professional Focus card - 5 cols */}
          <div className="lg:col-span-5 w-full flex flex-col h-full">
            <ScrollReveal delay={0.12} className="h-full flex flex-col">
              <SpotlightCard className="rounded-3xl p-5 sm:p-6 bg-linear-to-br from-indigo-500/4 via-white/80 to-purple-500/3 dark:from-indigo-500/5 dark:via-[#121214]/40 dark:to-purple-500/4 border border-indigo-500/20 dark:border-white/10 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-md h-full flex flex-col justify-between">
                <AboutEducation education={education} />
                <div className="relative my-2.5 flex items-center justify-center">
                  <div className="w-full h-px bg-linear-to-r from-transparent via-indigo-500/30 dark:via-indigo-400/30 to-transparent"></div>
                </div>
                <AboutFocus />
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
