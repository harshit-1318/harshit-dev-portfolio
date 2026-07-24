"use client";

import { FileText, Download } from 'lucide-react';

interface ResumeManagerHeaderProps {
  downloadCount: number;
}

export function ResumeManagerHeader({ downloadCount }: ResumeManagerHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground flex items-center gap-2">
          <FileText className="w-7 h-7 text-primary" />
          Resume & Education Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Review resume download metrics, section highlights, and manage education timeline records
        </p>
      </div>

      <div className="anime-card p-4 rounded-xl flex items-center gap-3.5 border border-border/80 min-w-45">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
          <Download className="w-5 h-5" />
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">
            {downloadCount}
          </div>
          <div className="text-xs text-muted-foreground font-medium">
            Total Downloads
          </div>
        </div>
      </div>
    </div>
  );
}
