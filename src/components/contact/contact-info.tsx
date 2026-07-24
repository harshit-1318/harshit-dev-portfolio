"use client";

import { ContactInfoCards } from "./contact-info-cards";
import { ContactInfoSocials } from "./contact-info-socials";

export function ContactInfo() {
  return (
    <div className="space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-3">
        {/* Availability pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span>Available for new projects</span>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            Let&apos;s discuss your project
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Open to full-time roles, freelance projects, and tech consultations.
          </p>
        </div>

        <ContactInfoCards />
      </div>

      <ContactInfoSocials />
    </div>
  );
}
