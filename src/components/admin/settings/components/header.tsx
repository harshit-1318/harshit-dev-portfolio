"use client";

import { Settings } from "lucide-react";

interface SettingsHeaderProps {
  isDirty?: boolean;
  saving?: boolean;
}

export function SettingsHeader({ isDirty = false, saving = false }: SettingsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/40">
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/30 flex items-center justify-center text-primary shadow-md shadow-primary/10">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
              Portfolio Settings & Profile
            </h1>
            {saving ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-primary/15 text-primary border border-primary/30 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Saving...
              </span>
            ) : isDirty ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Unsaved Changes
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                All Synced
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Configure your global personal details, contact parameters, logo branding, and social integrations
          </p>
        </div>
      </div>
    </div>
  );
}
