"use client";

import { useState } from "react";
import { certificates } from "@/lib/constants";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CertificatesHeader } from "./certificates/certificates-header";
import { CertificatesSidebar } from "./certificates/certificates-sidebar";
import { CertificatesGrid } from "./certificates/certificates-grid";
import { CertificateModal } from "./certificates/certificate-modal";
import type { ICertificate } from "@/types";

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<ICertificate | null>(null);

  return (
    <section
      id="certificates"
      className="py-6 sm:py-8 lg:py-10 border-t border-border/40 relative z-10 px-3.5 sm:px-6 scroll-mt-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-cyan-500/10 dark:from-indigo-600/10 dark:via-purple-600/5 dark:to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
        <CertificatesHeader />

        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.15)"
          className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/90 backdrop-blur-xl p-4 sm:p-5 lg:p-6 pb-6 sm:pb-7 lg:pb-8 shadow-xl group overflow-hidden w-full"
        >
          <div className="h-0.5 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-80 mb-4 sm:mb-5" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
            <CertificatesSidebar certificates={certificates} />
            <CertificatesGrid certificates={certificates} onSelectCert={setSelectedCert} />
          </div>
        </SpotlightCard>
      </div>

      <CertificateModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
