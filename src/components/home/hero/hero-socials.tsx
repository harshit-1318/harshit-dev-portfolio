"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { IProfileData } from "@/types/portfolio";
import { HeroSocialLinks } from "./hero-social-links";

interface HeroSocialsProps {
  profile: IProfileData;
  variants?: Variants;
}

export function HeroSocials({ profile, variants }: HeroSocialsProps) {
  return (
    <motion.div variants={variants} className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {profile.social.resume && (
        <a
          href={profile.social.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#4f46e5] dark:bg-[#6366f1] hover:bg-[#4338ca] dark:hover:bg-[#4f46e5] text-white rounded-xl px-5 py-2.75 text-sm font-semibold shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-indigo-500/30 cursor-pointer"
        >
          <Download size={14} />
          Download Resume
        </a>
      )}
      <Link
        href="/#contact"
        className="inline-flex items-center bg-white/60 dark:bg-white/4 border border-slate-200/60 dark:border-white/10 text-slate-800 dark:text-zinc-200 hover:bg-white/80 dark:hover:bg-white/8 rounded-xl px-5 py-2.75 text-sm font-semibold backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
      >
        Let&apos;s Talk
      </Link>

      <HeroSocialLinks profile={profile} />
    </motion.div>
  );
}
