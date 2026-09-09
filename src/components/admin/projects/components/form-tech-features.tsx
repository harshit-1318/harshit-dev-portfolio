"use client";

import { Code2, ListChecks } from "lucide-react";

interface ProjectFormTechFeaturesProps {
  techStackInput: string;
  setTechStackInput: (val: string) => void;
  featuresInput: string;
  setFeaturesInput: (val: string) => void;
}

export function ProjectFormTechFeatures({
  techStackInput,
  setTechStackInput,
  featuresInput,
  setFeaturesInput,
}: ProjectFormTechFeaturesProps) {
  return (
    <>
      {/* ── Tech Stack ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Tech Stack</span>
          <span className="text-xs text-muted-foreground font-normal normal-case tracking-normal">— comma-separated</span>
        </div>
        <input
          type="text"
          value={techStackInput}
          onChange={(e) => setTechStackInput(e.target.value)}
          className="anime-input"
          placeholder="React, Node.js, MongoDB, Tailwind CSS"
        />
        {techStackInput && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {techStackInput.split(",").map((t) => t.trim()).filter(Boolean).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Features ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <ListChecks className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Key Features</span>
          <span className="text-xs text-muted-foreground font-normal normal-case tracking-normal">— one per line</span>
        </div>
        <textarea
          value={featuresInput}
          onChange={(e) => setFeaturesInput(e.target.value)}
          rows={4}
          className="anime-input resize-none font-mono text-sm"
          placeholder={"User authentication & JWT sessions\nReal-time data sync\nResponsive design"}
        />
        {featuresInput && (
          <p className="text-[11px] text-muted-foreground">
            {featuresInput.split("\n").filter(Boolean).length} feature{featuresInput.split("\n").filter(Boolean).length !== 1 ? "s" : ""} added
          </p>
        )}
      </div>
    </>
  );
}
