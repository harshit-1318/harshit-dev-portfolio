"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SERVICES_DATA } from "./services/services-data";
import { ServicesHeader } from "./services/services-header";
import { ServiceCard } from "./services/service-card";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center pt-6 pb-4 sm:py-4 border-t border-border/40 relative z-10 px-4 sm:px-6 scroll-mt-28 sm:scroll-mt-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-cyan-500/10 dark:from-indigo-600/10 dark:via-purple-600/5 dark:to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <ServicesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mt-2.5 sm:mt-3">
          {SERVICES_DATA.map((service, idx) => (
            <ScrollReveal key={service.number} delay={idx * 0.03}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
