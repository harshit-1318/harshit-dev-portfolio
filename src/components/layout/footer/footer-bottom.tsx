"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function FooterBottom() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-16 pt-8 border-t border-border/60 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} <span className="font-semibold text-foreground">{siteConfig.name}</span>. All rights reserved.</p>

      <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 text-[11px] font-medium backdrop-blur-md shadow-2xs">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <span>Built with Next.js 15, TypeScript &amp; Tailwind CSS</span>
      </div>

      <button
        onClick={scrollToTop}
        type="button"
        className="back-to-top-btn self-start sm:self-auto cursor-pointer group"
        aria-label="Back to top of page"
      >
        <span>Back to top</span>
        <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5 text-primary" />
      </button>
    </div>
  );
}
