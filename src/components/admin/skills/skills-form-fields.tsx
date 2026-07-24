"use client";

import { Zap, Layers, BarChart2, Hash, Sparkles } from "lucide-react";
import type { ISkill } from "@/types";

interface SkillsFormFieldsProps {
  formData: Partial<ISkill>;
  setFormData: (data: Partial<ISkill>) => void;
  categories: readonly string[];
}

export function SkillsFormFields({
  formData,
  setFormData,
  categories,
}: SkillsFormFieldsProps) {
  const currentProficiency = formData.proficiency || 80;

  return (
    <div className="space-y-4">
      {/* Skill Name & Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-primary" />
            Skill Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. Next.js, TypeScript, Tailwind"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" />
            Category
          </label>
          <select
            value={formData.category || (categories[0] ?? "Frontend")}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm cursor-pointer transition-all"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Proficiency Slider + Input */}
      <div className="p-4 rounded-xl border border-border/60 bg-muted/30 space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-primary" />
            Proficiency Level
          </label>
          <span className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-bold text-xs font-mono border border-primary/20">
            {currentProficiency}%
          </span>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="range"
            min="1"
            max="100"
            value={currentProficiency}
            onChange={(e) => setFormData({ ...formData, proficiency: parseInt(e.target.value) || 80 })}
            className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
          />
          <input
            type="number"
            min="1"
            max="100"
            value={currentProficiency}
            onChange={(e) => setFormData({ ...formData, proficiency: Math.min(100, Math.max(1, parseInt(e.target.value) || 1)) })}
            required
            className="w-20 px-3 py-1.5 bg-background border border-border/80 rounded-lg text-center font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      {/* Icon Name & Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Icon Identifier
          </label>
          <input
            type="text"
            value={formData.icon || "code-2"}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. code-2, terminal, react"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Hash className="w-3.5 h-3.5 text-primary" />
            Display Order
          </label>
          <input
            type="number"
            value={formData.order || 1}
            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
            required
            min={1}
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
          />
        </div>
      </div>
    </div>
  );
}
