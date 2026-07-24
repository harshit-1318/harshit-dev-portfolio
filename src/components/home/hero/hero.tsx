"use client";

import { motion, Variants } from "framer-motion";
import { HeroIde } from "@/components/effects/hero-ide";
import { IProfileData } from "@/types/portfolio";
import { HeroBackground } from "./hero-background";
import { HeroTechStack } from "./hero-tech-stack";
import { HeroSocials } from "./hero-socials";
import { HeroScrollIndicator } from "./hero-scroll-indicator";
import { HeroImpactMetrics } from "./hero-impact-metrics";

interface HeroSectionProps {
  profile: IProfileData;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="home-hero relative overflow-hidden bg-transparent min-h-screen pt-36 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
      <HeroBackground />

      <div className="relative z-10 w-full mx-auto px-5 sm:px-8 max-w-375">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="col-span-1 lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 bg-violet-500/10 border border-violet-500/20 px-4 sm:px-5 h-9 sm:h-10 rounded-full">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Time</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-foreground">
              Frontend Developer Building Fast, <span className="gradient-text">Scalable</span> Web Apps.
            </motion.h1>

            <HeroTechStack variants={itemVariants} />

            <motion.p variants={itemVariants} className="text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
              Hi, I&apos;m Harshit. I craft pixel-perfect, high-performance web interfaces with modern React, TypeScript, Next.js, and Tailwind CSS — turning complex ideas into seamless digital experiences.
            </motion.p>

            <HeroImpactMetrics variants={itemVariants} />

            <HeroSocials profile={profile} variants={itemVariants} />
          </motion.div>

          {/* Right Column - Interactive IDE */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.2 }} className="hidden lg:flex lg:col-span-5 w-full justify-center">
            <HeroIde />
          </motion.div>
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
