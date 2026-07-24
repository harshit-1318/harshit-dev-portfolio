"use client";

import { motion } from "framer-motion";
import { useHeroMousePos } from "./use-hero-mouse-pos";
import { HeroBackgroundSvg } from "./hero-background-svg";

export function HeroBackground() {
  const mousePos = useHeroMousePos();

  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/20 via-transparent to-transparent dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none -z-30" />

      <motion.div
        animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
        className="absolute -top-32 -left-32 w-175 h-175 rounded-full pointer-events-none -z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
        className="absolute -bottom-32 -right-20 w-150 h-150 rounded-full pointer-events-none -z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.09) 0%, rgba(99,102,241,0.05) 50%, transparent 72%)",
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-100 h-100 rounded-full pointer-events-none -z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.07) 0%, transparent 65%)",
        }}
      />

      <HeroBackgroundSvg mousePos={mousePos} />

      <div className="absolute top-[22%] left-[13%] w-1.5 h-1.5 rounded-full bg-indigo-400/35 dark:bg-indigo-400/20 blur-[1px] animate-pulse pointer-events-none -z-10" />
      <div className="absolute top-[35%] right-[10%] w-2 h-2 rounded-full bg-cyan-400/30 dark:bg-cyan-400/15 blur-[1px] animate-[pulse_3.2s_infinite] pointer-events-none -z-10" />
      <div className="absolute bottom-[28%] left-[18%] w-1 h-1 rounded-full bg-purple-400/35 dark:bg-purple-400/20 blur-[0.5px] animate-pulse pointer-events-none -z-10" />
      <div className="absolute bottom-[38%] right-[22%] w-1.5 h-1.5 rounded-full bg-indigo-400/25 dark:bg-indigo-400/15 blur-[0.5px] pointer-events-none -z-10" />
    </>
  );
}
