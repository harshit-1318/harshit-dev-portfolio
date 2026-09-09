"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { MessageSquareText } from "lucide-react";

export function ContactHeader() {
  return (
    <ScrollReveal className="text-center space-y-1 sm:space-y-1.5 mb-1 sm:mb-2">
      {/* Category Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase backdrop-blur-md">
        <MessageSquareText size={11} className="animate-pulse text-indigo-500" />
        <span>Get In Touch</span>
      </div>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
        Let&apos;s{" "}
        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400 bg-clip-text text-transparent">
          Connect &amp; Build
        </span>
      </h2>

      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-xs max-w-md mx-auto leading-normal font-normal sm:font-medium">
        Have a project idea, job opportunity, or just want to chat tech? Drop a message below.
      </p>
    </ScrollReveal>
  );
}
