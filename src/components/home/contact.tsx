"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ContactHeader } from "./contact/contact-header";
import { ContactInfo } from "./contact/contact-info";
import { ContactForm } from "./contact/contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-5 sm:py-6 lg:py-8 border-t border-slate-200/60 dark:border-white/10 relative z-10 px-3 sm:px-6 scroll-mt-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-linear-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/10 dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-bl from-cyan-500/10 via-indigo-500/10 to-purple-500/15 dark:from-cyan-500/10 dark:via-indigo-600/10 dark:to-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
        <ContactHeader />

        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.18)"
          className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-2xl p-4 sm:p-5 lg:p-6 shadow-2xl shadow-indigo-500/5 group overflow-hidden w-full"
        >
          {/* Top Gradient Accent Bar */}
          <div className="h-0.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-90 mb-3.5 sm:mb-4 shadow-xs" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            <div className="lg:col-span-5 w-full flex flex-col justify-between">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7 w-full flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200/60 dark:border-white/10 pt-4 lg:pt-0 lg:pl-6">
              <ContactForm />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
