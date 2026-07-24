"use client";

import { CertificateCard } from "./certificate-card";
import type { ICertificate } from "@/types";

interface CertificatesGridProps {
  certificates: ICertificate[];
  onSelectCert: (cert: ICertificate) => void;
}

export function CertificatesGrid({ certificates, onSelectCert }: CertificatesGridProps) {
  return (
    <div className="lg:col-span-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((cert: ICertificate, i: number) => (
        <CertificateCard
          key={cert.title || i}
          cert={cert}
          index={i}
          onSelect={onSelectCert}
        />
      ))}
    </div>
  );
}
