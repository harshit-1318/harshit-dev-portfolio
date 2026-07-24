"use client";

import { Settings } from "lucide-react";

export function SettingsHeader() {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground flex items-center gap-2">
        <Settings className="w-7 h-7 text-primary" />
        Settings
      </h1>
      <p className="text-muted-foreground mt-1">
        Configure your personal info, branding colors, and portfolio integrations
      </p>
    </div>
  );
}
