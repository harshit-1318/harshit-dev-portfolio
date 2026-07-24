"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export function ScrollProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  if (pathname?.startsWith("/admin")) return null;
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1.5 sm:h-2 rounded-r-full bg-linear-to-r from-indigo-500 via-pink-500 to-cyan-400 z-9999 origin-left shadow-[0_0_16px_rgba(99,102,241,0.95)] pointer-events-none"
    />
  );
}
