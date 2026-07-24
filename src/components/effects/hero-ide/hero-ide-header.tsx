"use client";

import { CODE_TABS, TabId } from "./hero-ide-data";

const ReactIcon = ({ opacity = "100" }: { opacity?: string }) => (
  <svg
    className={`w-3.5 h-3.5 shrink-0 animate-[spin_20s_linear_infinite] opacity-${opacity}`}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
  >
    <circle cx="0" cy="0" r="1.5" fill="#00d8ff" />
    <g stroke="#00d8ff" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const CssHashIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

interface HeroIdeHeaderProps {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

export function HeroIdeHeader({ activeTab, onTabChange }: HeroIdeHeaderProps) {
  const currentTabConfig = CODE_TABS.find((t) => t.id === activeTab) || CODE_TABS[0];

  return (
    <>
      {/* Title Bar */}
      <div className="h-11 border-b border-slate-200/10 dark:border-white/6 bg-slate-900/10 dark:bg-white/1 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/95 shadow-xs" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/95 shadow-xs" />
          <div className="w-3 h-3 rounded-full bg-green-500/95 shadow-xs" />
        </div>
        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-semibold tracking-widest uppercase">
          VSCODE // MAIN-PORTFOLIO
        </span>
        <div className="w-14" />
      </div>

      {/* Tab Bar */}
      <div className="h-9 bg-slate-950/20 dark:bg-zinc-950/40 border-b border-slate-200/10 dark:border-white/6 flex items-end shrink-0 select-none">
        {CODE_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`h-full px-4 flex items-center gap-1.5 font-mono text-[11px] transition-all cursor-pointer border-r border-slate-200/10 dark:border-white/6 border-t-2 ${
                isActive
                  ? "bg-slate-950/90 dark:bg-slate-950/70 border-t-primary text-zinc-100 font-medium"
                  : "border-t-transparent text-zinc-400 hover:text-zinc-200 dark:text-zinc-500 dark:hover:text-zinc-300"
              }`}
            >
              {tab.icon === "react" ? <ReactIcon opacity={isActive ? "100" : "60"} /> : <CssHashIcon />}
              <span>{tab.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Breadcrumbs */}
      <div className="h-6 bg-slate-950/10 dark:bg-slate-950/20 border-b border-slate-200/5 dark:border-white/4 flex items-center px-4 text-[10px] text-zinc-400 dark:text-zinc-500 gap-1 font-mono shrink-0">
        <span className="text-zinc-400 font-medium">{currentTabConfig.path}</span>
      </div>
    </>
  );
}
