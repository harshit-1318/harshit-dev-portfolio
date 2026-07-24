"use client";

import { Award } from "lucide-react";
import type { IResumeData } from "./resume-settings";
import { ResumeExtraHighlights } from "./resume-extra-highlights";

interface ResumeHighlightsSectionProps {
  resume: Partial<IResumeData>;
  setResume: (data: Partial<IResumeData>) => void;
}

export function ResumeHighlightsSection({
  resume,
  setResume,
}: ResumeHighlightsSectionProps) {
  return (
    <div className="anime-card rounded-2xl p-6 space-y-4">
      <h2 className="text-lg font-semibold font-heading flex items-center gap-2 text-foreground pb-2 border-b border-border/50">
        <Award className="w-5 h-5 text-primary" />
        Resume Section Highlights
      </h2>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Write short, bullet-point summaries or key takeaways for each resume section to display on the resume highlights page.
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Experience Highlights</label>
          <input
            type="text"
            value={resume.highlights?.experience || ''}
            onChange={(e) =>
              setResume({
                ...resume,
                highlights: { ...resume.highlights!, experience: e.target.value },
              })
            }
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. 3 internships at Manipal, Thales, and MI Matdar"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Skills Highlights</label>
          <input
            type="text"
            value={resume.highlights?.skills || ''}
            onChange={(e) =>
              setResume({
                ...resume,
                highlights: { ...resume.highlights!, skills: e.target.value },
              })
            }
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. Python, React.js, Node.js, TensorFlow, LangChain"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Projects Highlights</label>
          <input
            type="text"
            value={resume.highlights?.projects || ''}
            onChange={(e) =>
              setResume({
                ...resume,
                highlights: { ...resume.highlights!, projects: e.target.value },
              })
            }
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. AI-powered StudyMate assistant & AlphaCare Voice AI chatbot"
          />
        </div>

        <ResumeExtraHighlights resume={resume} setResume={setResume} />
      </div>
    </div>
  );
}
