"use client";

import { Code2, Globe, Lock } from "lucide-react";
import type { ProjectItem } from "./project-types";

export const getDisplayUrl = (project: ProjectItem): string => {
  if (project.liveUrl && !project.liveUrl.includes("github.com")) {
    try {
      const url = new URL(project.liveUrl);
      return url.hostname;
    } catch {
      return project.liveUrl;
    }
  }
  if (project.id.includes("yourmedicals")) return "yourmedicals.co.uk";
  if (project.id.includes("eventelite")) return "eventelite.dev";
  if (project.id.includes("rentnest")) return "rentnest.app";
  return `${project.id}.dev`;
};

interface BrowserFrameProps {
  project: ProjectItem;
  /** Height class for the image area, e.g. "h-28 sm:h-32 md:h-36" */
  imageHeightClass?: string;
  /** Override the auto-computed display URL */
  displayUrlOverride?: string;
  /** Max-width class for the address bar, default "max-w-40" */
  addressBarMaxWidth?: string;
  /** Height class for the browser chrome bar, default "h-6" */
  browserBarHeight?: string;
  /** Extra class on the outer wrapper */
  className?: string;
}

/** Reusable macOS-style browser frame with project screenshot/fallback */
export function ProjectBrowserFrame({
  project,
  imageHeightClass = "h-28 sm:h-32 md:h-36",
  displayUrlOverride,
  addressBarMaxWidth = "max-w-40",
  browserBarHeight = "h-6",
  className = "",
}: BrowserFrameProps) {
  const displayUrl = displayUrlOverride ?? getDisplayUrl(project);
  const lockSize = browserBarHeight === "h-6" ? 8 : 10;
  const globeSize = browserBarHeight === "h-6" ? 10 : 13;

  return (
    <div
      className={`w-full rounded-lg bg-slate-950 border border-slate-800 shadow-xs overflow-hidden group/browser ${className}`}
    >
      {/* Browser chrome */}
      <div className={`${browserBarHeight} bg-slate-900/90 border-b border-slate-800 flex items-center justify-between px-2.5`}>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-rose-500/90" />
          <div className="w-2 h-2 rounded-full bg-amber-500/90" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/90" />
        </div>
        <div className={`flex items-center gap-1 px-2 py-0.5 bg-slate-950/80 rounded-md border border-slate-800 text-[9px] font-mono text-slate-400 ${addressBarMaxWidth} truncate`}>
          <Lock size={lockSize} className="text-emerald-400 shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>
        <Globe size={globeSize} className="text-slate-500" />
      </div>

      {/* Screenshot / fallback */}
      <div className={`w-full ${imageHeightClass} bg-slate-950 overflow-hidden relative`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover/browser:scale-105 transition-transform duration-700 opacity-90 group-hover/browser:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center text-center p-3 bg-linear-to-br from-slate-900 to-slate-950 text-white">
            <Code2 className="w-8 h-8 text-indigo-400/60 mb-1" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
