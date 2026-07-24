"use client";

import { Award } from "lucide-react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function CertificatesHeader() {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider justify-center">
        <Award size={14} />
        <span>Verified Accreditations</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight text-center mt-2">
        Certifications & Credentials
      </h2>
      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm text-center mt-2.5 max-w-2xl mx-auto leading-relaxed mb-8">
        Recognized certifications and accredited software engineering programs validating my full-stack web development expertise.
      </p>
    </ScrollReveal>
  );
}
