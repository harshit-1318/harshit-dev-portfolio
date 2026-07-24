"use client";

import { motion, Variants } from "framer-motion";
import { AstroIcon } from "@/components/shared/brand-icons";

interface HeroTechStackProps {
  variants?: Variants;
}

const techStack = [
  {
    name: "React",
    glowColor: "rgba(97, 218, 251, 0.22)",
    textColor: "group-hover:text-[#61DAFB]",
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" className="w-4 h-4 fill-none stroke-[#61DAFB] animate-spin shrink-0" style={{ animationDuration: "10s" }}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <ellipse rx="11" ry="4.2" stroke="#61DAFB" />
        <ellipse rx="11" ry="4.2" stroke="#61DAFB" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" stroke="#61DAFB" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    glowColor: "rgba(49, 120, 198, 0.22)",
    textColor: "group-hover:text-[#3178C6]",
    icon: (
      <svg viewBox="0 0 100 100" className="w-4 h-4 rounded-[3px] shrink-0">
        <rect width="100" height="100" fill="#3178C6" />
        <path d="M38.5 35h-10v-5h27v5h-10v35h-7V35zm29.3 11c0-5 3.5-7.5 9-7.5 4 0 7.5 1.5 9 3.5l-4.5 4c-1-1-2.5-1.5-4.5-1.5-2.5 0-3.5 1-3.5 2 0 1.5 1 2.5 4.5 3.5 7.5 2 10.5 4.5 10.5 10s-3.5 9-11 9c-5 0-8.5-2-11-5.5l5-4c1.5 2 3.5 3.5 6 3.5 3.5 0 4.5-1.5 4.5-2.5s-1-2-4.5-3c-7-2.5-10-5-10-9z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Astro",
    glowColor: "rgba(255, 93, 1, 0.22)",
    textColor: "group-hover:text-[#FF5D01]",
    icon: <AstroIcon size={16} className="w-4 h-4 shrink-0" />,
  },
  {
    name: "Next.js",
    glowColor: "rgba(168, 85, 247, 0.22)",
    textColor: "group-hover:text-foreground",
    icon: (
      <svg viewBox="0 0 128 128" className="w-4 h-4 fill-slate-900 dark:fill-white shrink-0">
        <path d="M64 0a64 64 0 1 0 64 64A64 64 0 0 0 64 0zm38.5 94.5L52.1 42v39.5H41.5V31.5h10.6l40.4 52.5v-52.5H103v63z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    glowColor: "rgba(56, 189, 248, 0.22)",
    textColor: "group-hover:text-[#38bdf8]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#38bdf8] shrink-0">
        <path d="M12 6c-2.28 0-3.81 1.14-4.57 3.43 1.14-1.52 2.47-2.09 4-1.71.87.21 1.49.84 2.17 1.54C14.71 10.43 16.03 11.75 18.85 11.75c2.28 0 3.81-1.14 4.57-3.43-1.14 1.52-2.47 2.09-4 1.71-.87-.21-1.49-.84-2.17-1.54C16.14 7.35 14.82 6 12 6zM5.14 11.75c-2.28 0-3.81 1.14-4.57 3.43 1.14-1.52 2.47-2.09 4-1.71.87.21 1.49.84 2.17 1.54 1.11 1.14 2.42 2.49 5.25 2.49 2.28 0 3.81-1.14 4.57-3.43-1.14 1.52-2.47 2.09-4 1.71-.87-.21-1.49-.84-2.17-1.54-1.11-1.14-2.42-2.49-5.25-2.49z" />
      </svg>
    ),
  },
];

export function HeroTechStack({ variants }: HeroTechStackProps) {
  return (
    <motion.div variants={variants} className="flex flex-wrap items-center gap-2.5 select-none">
      {techStack.map((tech) => (
        <motion.span
          key={tech.name}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 450, damping: 25 }}
          className="group relative inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-card/70 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-zinc-200 backdrop-blur-md shadow-xs cursor-default active:bg-white dark:active:bg-card active:border-indigo-500/40"
        >
          {tech.icon}
          <span className={`transition-colors duration-200 ${tech.textColor}`}>{tech.name}</span>
        </motion.span>
      ))}
    </motion.div>
  );
}
