"use client";

import { BadgeCheck, Building2, ShieldCheck, Award } from "lucide-react";
import type { ICertificate } from "@/types";

interface CertificatesSidebarProps {
  certificates: ICertificate[];
}

export function CertificatesSidebar({ certificates }: CertificatesSidebarProps) {
  const organizations = Array.from(new Set(certificates.map((c) => c.organization)));

  return (
    <div className="lg:col-span-4 w-full flex flex-col justify-between space-y-4 lg:border-r border-slate-200/80 dark:border-white/10 lg:pr-5">
      <div className="space-y-3.5 w-full">
        {/* Accreditations Banner Pill */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
          <ShieldCheck size={18} className="shrink-0 stroke-[2.2]" />
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider">100% Authenticated</div>
            <div className="text-[10px] text-slate-600 dark:text-slate-300">Verified via official credential links</div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="flex flex-col items-center py-2 px-1 rounded-xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
            <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">{certificates.length}</span>
            <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400 mt-1">Credentials</span>
          </div>
          <div className="flex flex-col items-center py-2 px-1 rounded-xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 leading-none">100%</span>
            <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400 mt-1">Verified</span>
          </div>
          <div className="flex flex-col items-center py-2 px-1 rounded-xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 leading-none">2025</span>
            <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400 mt-1">Latest Year</span>
          </div>
        </div>

        {/* Accrediting Organizations List */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block px-0.5">
            Accrediting Bodies
          </span>
          <div className="space-y-1">
            {organizations.map((org) => (
              <div
                key={org}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <Building2 size={13} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="truncate">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          <Award size={13} className="text-indigo-600 dark:text-indigo-400" />
          Software Accreditations
        </span>
        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
          <BadgeCheck size={12} className="text-emerald-500" />
          Verified
        </span>
      </div>
    </div>
  );
}
