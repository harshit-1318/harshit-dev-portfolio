"use client";

import type { IResumeData } from "./resume-settings";

interface ResumeExtraHighlightsProps {
  resume: Partial<IResumeData>;
  setResume: (data: Partial<IResumeData>) => void;
}

export function ResumeExtraHighlights({ resume, setResume }: ResumeExtraHighlightsProps) {
  return (
    <>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Education Highlights</label>
        <input
          type="text"
          value={resume.highlights?.education || ''}
          onChange={(e) =>
            setResume({
              ...resume,
              highlights: { ...resume.highlights!, education: e.target.value },
            })
          }
          required
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          placeholder="e.g. B.Tech in CSE at Gautam Buddha University (2022-2026)"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Certifications Highlights</label>
        <input
          type="text"
          value={resume.highlights?.certifications || ''}
          onChange={(e) =>
            setResume({
              ...resume,
              highlights: { ...resume.highlights!, certifications: e.target.value },
            })
          }
          required
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          placeholder="e.g. Google Cloud GenAI, AWS Cloud, Walmart SWE, Postman API"
        />
      </div>
    </>
  );
}
