"use client";

import { Palette } from "lucide-react";
import type { IProfileData } from "./personal-details-form";

interface BrandingFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function BrandingForm({ profile, setProfile }: BrandingFormProps) {
  return (
    <div className="anime-card rounded-2xl p-6 space-y-4">
      <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] flex items-center gap-2 text-foreground pb-2 border-b border-border/50">
        <Palette className="w-5 h-5 text-primary" />
        Branding & Logo Colors
      </h2>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Customize the 3D logo gradient colors used in the navbar and home hero section.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground flex items-center gap-1.5">
            Gradient Color 1 (Hex)
          </label>
          <div className="flex gap-2.5">
            <input
              type="color"
              value={profile.logoColor1 || '#6366f1'}
              onChange={(e) => setProfile({ ...profile, logoColor1: e.target.value })}
              className="w-12 h-10 bg-muted border border-border rounded-xl cursor-pointer p-1"
            />
            <input
              type="text"
              value={profile.logoColor1 || ''}
              onChange={(e) => setProfile({ ...profile, logoColor1: e.target.value })}
              className="flex-1 px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground uppercase font-mono"
              placeholder="#6366f1"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground flex items-center gap-1.5">
            Gradient Color 2 (Hex)
          </label>
          <div className="flex gap-2.5">
            <input
              type="color"
              value={profile.logoColor2 || '#22d3ee'}
              onChange={(e) => setProfile({ ...profile, logoColor2: e.target.value })}
              className="w-12 h-10 bg-muted border border-border rounded-xl cursor-pointer p-1"
            />
            <input
              type="text"
              value={profile.logoColor2 || ''}
              onChange={(e) => setProfile({ ...profile, logoColor2: e.target.value })}
              className="flex-1 px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground uppercase font-mono"
              placeholder="#22d3ee"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
