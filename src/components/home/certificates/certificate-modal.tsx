"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Building2, ExternalLink, BadgeCheck, Copy, Check } from "lucide-react";
import { useState } from "react";
import type { CertificateModalProps } from "./certificate-types";

export function CertificateModal({ cert, isOpen, onClose }: CertificateModalProps) {
  const [copied, setCopied] = useState(false);
  if (!isOpen || !cert) return null;

  const handleCopyId = () => {
    if (cert.credentialId) {
      navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#121214]/95 p-6 shadow-2xl overflow-hidden"
        >
          <div className="h-1 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-90 absolute top-0 left-0 right-0" />
          <button type="button" onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
            <X size={16} />
          </button>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                <BadgeCheck size={12} />
                <span>Verified Accreditation</span>
              </span>
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-200/80 dark:border-white/10">
                {cert.issueDate}
              </span>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20 shadow-xs">
                <Award size={24} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-xl text-slate-900 dark:text-white leading-tight">{cert.title}</h3>
                <p className="mt-1 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Building2 size={13} />
                  <span>{cert.organization}</span>
                </p>
              </div>
            </div>

            {cert.skills && cert.skills.length > 0 && (
              <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block">Verified Skills & Competencies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {cert.credentialId && (
              <div className="pt-2 flex items-center justify-between bg-slate-100/80 dark:bg-white/5 p-3 rounded-xl border border-slate-200/80 dark:border-white/10">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  ID: <span className="font-bold text-slate-900 dark:text-white">{cert.credentialId}</span>
                </span>
                <button type="button" onClick={handleCopyId} className="flex items-center gap-1 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer">
                  {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy ID"}</span>
                </button>
              </div>
            )}

            {cert.credentialUrl && (
              <div className="pt-2">
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold inline-flex items-center justify-center gap-2 text-xs py-2.5 rounded-xl cursor-pointer shadow-md shadow-indigo-500/20 transition-all">
                  <span>Open Official Verification Portal</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
