"use client";

import { Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { IProfileData } from "./personal-details-form";

interface BrandingFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

const PRESET_GRADIENTS = [
  { name: 'Indigo & Cyan', c1: '#6366f1', c2: '#22d3ee' },
  { name: 'Violet & Pink', c1: '#8b5cf6', c2: '#ec4899' },
  { name: 'Emerald & Teal', c1: '#10b981', c2: '#06b6d4' },
  { name: 'Sunset Amber', c1: '#f59e0b', c2: '#ef4444' },
  { name: 'Cyber Purple', c1: '#3b82f6', c2: '#a855f7' },
];

export function BrandingForm({ profile, setProfile }: BrandingFormProps) {
  const color1 = profile.logoColor1 || '#6366f1';
  const color2 = profile.logoColor2 || '#22d3ee';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="rounded-2xl p-6 border border-border/70 bg-card/70 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-6"
    >
      <div className="flex items-center justify-between pb-3 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
            <Palette className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-heading text-foreground">
              Branding & Logo Colors
            </h2>
            <p className="text-xs text-muted-foreground">
              Customize the gradient themes used in the logo, highlights, and buttons across your portfolio
            </p>
          </div>
        </div>

        {/* Live gradient badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border/60 bg-muted/30 shadow-xs">
          <div
            className="w-5 h-5 rounded-full shadow-md border border-white/20"
            style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
          />
          <span className="text-xs font-bold font-heading text-foreground flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Theme Accent
          </span>
        </div>
      </div>

      {/* Preset Gradient Swatches */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-foreground uppercase tracking-wider block">
          Quick Gradient Presets
        </label>
        <div className="flex flex-wrap items-center gap-2.5">
          {PRESET_GRADIENTS.map((preset) => {
            const isActive = color1.toLowerCase() === preset.c1.toLowerCase() && color2.toLowerCase() === preset.c2.toLowerCase();
            return (
              <button
                key={preset.name}
                type="button"
                onClick={() => setProfile({ ...profile, logoColor1: preset.c1, logoColor2: preset.c2 })}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs'
                    : 'border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full shadow-xs"
                  style={{ background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2})` }}
                />
                <span>{preset.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
            Gradient Primary Color (Hex)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={color1}
              onChange={(e) => setProfile({ ...profile, logoColor1: e.target.value })}
              className="w-12 h-10 bg-muted/60 border border-border/80 rounded-xl cursor-pointer p-1 transition-transform hover:scale-105"
            />
            <input
              type="text"
              value={color1}
              onChange={(e) => setProfile({ ...profile, logoColor1: e.target.value })}
              className="flex-1 px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground uppercase font-mono text-sm transition-all"
              placeholder="#6366f1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
            Gradient Secondary Color (Hex)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={color2}
              onChange={(e) => setProfile({ ...profile, logoColor2: e.target.value })}
              className="w-12 h-10 bg-muted/60 border border-border/80 rounded-xl cursor-pointer p-1 transition-transform hover:scale-105"
            />
            <input
              type="text"
              value={color2}
              onChange={(e) => setProfile({ ...profile, logoColor2: e.target.value })}
              className="flex-1 px-3.5 py-2.5 bg-muted/40 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-foreground uppercase font-mono text-sm transition-all"
              placeholder="#22d3ee"
            />
          </div>
        </div>
      </div>

      {/* Real-time Component Preview Mockup */}
      <div className="p-4 rounded-xl border border-border/70 bg-muted/20 space-y-2.5">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold uppercase tracking-wider">
          <span>Real-time Navbar & Accent Preview</span>
          <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">Active Theme</span>
        </div>
        <div className="p-3.5 rounded-xl border border-border/80 bg-background/90 backdrop-blur-md flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm shadow-md"
              style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
            >
              {(profile.name?.[0] || 'H').toUpperCase()}
            </div>
            <div>
              <div className="font-bold text-sm text-foreground flex items-center gap-1">
                {profile.name || 'Harshit'}
                <span className="text-xs font-mono text-primary">.dev</span>
              </div>
              <div className="text-[10px] text-muted-foreground font-medium">
                {profile.title || 'Developer'}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
          >
            Connect
          </button>
        </div>
      </div>
    </motion.div>
  );
}
