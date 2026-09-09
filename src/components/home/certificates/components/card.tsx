"use client";

import { Award, Building2, ExternalLink, BadgeCheck } from "lucide-react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import type { ICertificate } from "@/types";

interface CertificateCardProps {
  cert: ICertificate;
  index: number;
  onSelect: (cert: ICertificate) => void;
}

const orgGradients: Record<string, string> = {
  "Apna College": "from-indigo-500 via-purple-500 to-indigo-600",
  "Infosys Foundation": "from-cyan-500 via-blue-500 to-indigo-600",
  "Frontend Engineering Mastery": "from-purple-500 via-rose-500 to-amber-500",
};

export function CertificateCard({ cert, index, onSelect }: CertificateCardProps) {
  const accentGradient = orgGradients[cert.organization] || "from-indigo-500 via-purple-500 to-cyan-500";

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        onClick={() => onSelect(cert)}
        className="rounded-xl p-3.5 sm:p-4 bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 hover:bg-slate-100/90 dark:hover:bg-white/10 transition-all duration-200 group flex flex-col justify-between h-full relative overflow-hidden cursor-pointer"
      >
        <div className="space-y-2.5 relative z-10">
          <div className={`h-1 w-full bg-linear-to-r ${accentGradient} rounded-full opacity-80 mb-2 group-hover:opacity-100 transition-opacity`} />

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <BadgeCheck size={11} />
              <span>Verified Credential</span>
            </span>

            <span className="text-[10px] font-mono font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-200/80 dark:border-white/10">
              {cert.issueDate}
            </span>
          </div>

          <div className="flex items-start gap-3 pt-0.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20 group-hover:scale-105 transition-transform shadow-2xs">
              <Award className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold font-heading text-sm sm:text-base text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{cert.organization}</span>
              </p>
            </div>
          </div>

          {cert.skills && cert.skills.length > 0 && (
            <div className="pt-2 border-t border-slate-100 dark:border-white/10 space-y-1.5">
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block">
                Competencies Covered:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono font-medium bg-slate-100/90 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 text-[10px] font-mono relative z-10">
          <span className="text-slate-500 dark:text-slate-400 truncate max-w-37.5">
            {cert.credentialId ? `ID: ${cert.credentialId}` : "Accredited"}
          </span>

          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Verify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline inline-flex items-center gap-1 shrink-0">
              <span>Verify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
