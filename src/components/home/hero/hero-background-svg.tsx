"use client";

import { motion } from "framer-motion";

export function HeroBackgroundSvg({ mousePos }: { mousePos: { x: number; y: number } }) {
  return (
    <motion.div
      style={{ x: mousePos.x * 0.15, y: mousePos.y * 0.15 }}
      className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -80 400 Q 300 -100 780 200"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate-200/50 dark:text-white/2.5"
        />
        <path
          d="M -120 500 Q 250 -60 820 250"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-slate-200/40 dark:text-white/1.8"
        />
        <path
          d="M 620 900 Q 1100 600 1450 200"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate-200/40 dark:text-white/2"
        />
        <path
          d="M 700 920 Q 1150 640 1480 260"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-slate-200/30 dark:text-white/1.5"
        />
        <path
          d="M 200 0 Q 700 350 1200 900"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-indigo-200/30 dark:text-indigo-400/3"
        />
      </svg>
    </motion.div>
  );
}
