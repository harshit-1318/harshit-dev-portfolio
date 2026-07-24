"use client";

import { FileText, Save } from "lucide-react";
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
      <div className="anime-card rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold font-heading flex items-center gap-2 text-foreground pb-2 border-b border-border/50">
          <FileText className="w-5 h-5 text-primary" />
          Resume Document Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-foreground">Resume PDF URL / Path</label>
            <input
              type="text"
              value={resume.pdfUrl || ''}
              onChange={(e) => setResume({ ...resume, pdfUrl: e.target.value })}
              required
              className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              placeholder="e.g. /resume/Resume_Kunal_Singh.pdf"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Professional Summary</label>
          <textarea
            value={resume.summary || ''}
            onChange={(e) => setResume({ ...resume, summary: e.target.value })}
            rows={4}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none leading-relaxed"
            placeholder="Brief summary matching your resume..."
          />
        </div>
      </div>

      <ResumeHighlightsSection resume={resume} setResume={setResume} />

      <div className="flex items-center gap-3 justify-end">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-50 flex items-center gap-2"
        >
          <Save className="w-4.5 h-4.5" />
          {saving ? 'Saving Highlights...' : 'Save Highlights'}
        </button>
      </div>
    </form>
  );
}
