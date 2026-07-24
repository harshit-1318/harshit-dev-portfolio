"use client";

import { Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { IProfileData } from "./personal-details-form";

interface BrandingFormProps {
  profile: Partial<IProfileData>;
  setProfile: (data: Partial<IProfileData>) => void;
}

export function BrandingForm({ profile, setProfile }: BrandingFormProps) {
  const color1 = profile.logoColor1 || '#6366f1';
  const color2 = profile.logoColor2 || '#22d3ee';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="rounded-2xl p-6 border border-border/60 bg-card/60 backdrop-blur-sm shadow-xs space-y-5"
    >
      <div className="flex items-center justify-between pb-3 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold font-heading text-foreground">
              Branding & Logo Colors
            </h2>
            <p className="text-xs text-muted-foreground">
              Customize the gradient themes used in the logo and navbar elements
            </p>
          </div>
        </div>

        {/* Live gradient preview badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border/50 bg-muted/40">
          <div
            className="w-5 h-5 rounded-full shadow-inner border border-white/20"
            style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
          />
          <span className="text-xs font-bold font-heading text-foreground flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Live Preview
          </span>
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
              className="w-12 h-10 bg-muted border border-border rounded-xl cursor-pointer p-1"
            />
            <input
              type="text"
              value={color1}
              onChange={(e) => setProfile({ ...profile, logoColor1: e.target.value })}
              className="flex-1 px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground uppercase font-mono text-sm"
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
              className="w-12 h-10 bg-muted border border-border rounded-xl cursor-pointer p-1"
            />
            <input
              type="text"
              value={color2}
              onChange={(e) => setProfile({ ...profile, logoColor2: e.target.value })}
              className="flex-1 px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground uppercase font-mono text-sm"
              placeholder="#22d3ee"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
