"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { HeroIdeHeader } from "./hero-ide/hero-ide-header";
import { HeroIdeCode } from "./hero-ide/hero-ide-code";
import { HeroIdeTerminal } from "./hero-ide/hero-ide-terminal";
import { TabId } from "./hero-ide/hero-ide-data";

export function HeroIde() {
  const [activeTab, setActiveTab] = useState<TabId>("hero.tsx");

  // 3D Parallax Tilt state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-250, 250], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-250, 250], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-135 rounded-2xl border border-slate-300/40 dark:border-white/10 bg-slate-950/94 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden relative group"
    >
      {/* Dynamic Animated Glow Halo */}
      <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl z-20" />

      <HeroIdeHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Code Area */}
      <div className="flex-1 px-5 py-4 font-mono text-[11px] sm:text-[11.5px] leading-[1.75] overflow-hidden flex flex-col relative z-10">
        <HeroIdeCode activeTab={activeTab} />
      </div>

      <HeroIdeTerminal />
    </motion.div>
  );
}
