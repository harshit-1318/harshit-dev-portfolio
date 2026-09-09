"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants";

interface DesktopLinksProps {
  getActiveState: (href: string) => boolean;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const primaryLinks = navLinks.filter((link) =>
  ["/", "/#about", "/#experience", "/#services", "/#skills", "/#projects", "/#certificates", "/#contact"].includes(link.href)
);

export function DesktopLinks({ getActiveState, onLinkClick }: DesktopLinksProps) {
  return (
    <div className="hidden lg:flex items-center lg:gap-0.5 xl:gap-1 bg-slate-100/70 dark:bg-[#121214]/65 border border-black/5 dark:border-white/5 rounded-full px-3 py-1 backdrop-blur-md shadow-inner shadow-black/5 dark:shadow-black/40">
      {primaryLinks.map((link) => {
        const active = getActiveState(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => onLinkClick(e, link.href)}
            className={cn(
              "relative rounded-full lg:px-2 xl:px-3 py-1.5 text-[10px] font-bold tracking-wide uppercase transition-colors duration-200 z-10",
              active
                ? "text-slate-900 dark:text-white font-black"
                : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            {active && (
              <motion.span
                layoutId="active-nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-slate-200/90 dark:bg-white/12 border border-slate-900/10 dark:border-white/15 shadow-xs"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
