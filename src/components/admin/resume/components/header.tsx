"use client";

import { FileText, Download, TrendingUp } from 'lucide-react';

interface ResumeManagerHeaderProps {
  downloadCount: number;
}

export function ResumeManagerHeader({ downloadCount }: ResumeManagerHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/40">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
              Resume & Education
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Manage resume PDF links, highlights, professional summary, and academic records
            </p>
          </div>
        </div>
      </div>

      {/* Analytics stat card */}
      <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm shadow-xs self-start sm:self-auto min-w-44">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
          <Download className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold text-foreground font-heading">
              {downloadCount}
            </span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Resume Downloads
          </p>
        </div>
      </div>
    </div>
  );
}
