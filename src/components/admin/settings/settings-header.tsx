"use client";

import { Settings } from "lucide-react";

export function SettingsHeader() {
  return (
    <div className="pb-2 border-b border-border/40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
          <Settings className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
            Portfolio Settings & Profile
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Configure your global personal details, contact parameters, logo branding, and social integrations
          </p>
        </div>
      </div>
    </div>
  );
}
