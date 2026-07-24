"use client";

import { FileText, Save, Link as LinkIcon, AlignLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { ResumeHighlightsSection } from "./resume-highlights-section";

interface IResumeHighlights {
  experience: string;
  skills: string;
  projects: string;
  education: string;
  certifications: string;
}

export interface IResumeData {
  summary: string;
  pdfUrl: string;
  highlights: IResumeHighlights;
  downloadCount: number;
}

interface ResumeSettingsProps {
  resume: Partial<IResumeData>;
  setResume: (data: Partial<IResumeData>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  saving: boolean;
}

export function ResumeSettings({
  resume,
  setResume,
  handleSubmit,
  saving,
}: ResumeSettingsProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl p-6 border border-border/60 bg-card/60 backdrop-blur-sm shadow-xs space-y-5"
      >
        <div className="flex items-center gap-2.5 pb-3 border-b border-border/50">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <FileText className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold font-heading text-foreground">
            Resume Document Settings
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-primary" />
              Resume PDF URL / Path <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={resume.pdfUrl || ''}
              onChange={(e) => setResume({ ...resume, pdfUrl: e.target.value })}
              required
              className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
              placeholder="e.g. /resume/Resume_Harshit_Kumar.pdf"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <AlignLeft className="w-3.5 h-3.5 text-primary" />
              Professional Summary <span className="text-destructive">*</span>
            </label>
            <textarea
              value={resume.summary || ''}
              onChange={(e) => setResume({ ...resume, summary: e.target.value })}
              rows={4}
              required
              className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm resize-none leading-relaxed transition-all"
              placeholder="Brief summary matching your resume..."
            />
          </div>
        </div>
      </motion.div>

      <ResumeHighlightsSection resume={resume} setResume={setResume} />

      <div className="flex items-center justify-end pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-5 py-2.5 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center gap-2 text-sm shadow-md"
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving Highlights...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Resume Settings</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
