"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Github, Linkedin } from "@/components/shared/brand-icons";

export function ContactSocialLinks() {
  const socialLinks = [
    {
      label: "GitHub",
      href: siteConfig.links.github,
      icon: Github,
      accent: "hover:border-slate-800 hover:bg-slate-900 hover:text-white dark:hover:border-slate-300 dark:hover:bg-white dark:hover:text-slate-900",
    },
    {
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: Linkedin,
      accent: "hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400",
    },
    {
      label: "Direct Mail",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      accent: "hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400",
    },
  ];

  return (
    <div className="space-y-1.5 pt-1.5 border-t border-slate-200/70 dark:border-white/10">
      <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Social Connect</p>
      <div className="flex flex-wrap gap-1.5">
        {socialLinks.map(({ label, href, icon: Icon, accent }) => (
          <motion.a
            key={label}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-white/4 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md transition-all duration-200 shadow-2xs ${accent}`}
          >
            <Icon size={13} />
            <span>{label}</span>
            <ArrowUpRight size={10} className="opacity-60" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
