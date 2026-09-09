"use client";

import { Tag, Star } from "lucide-react";
import type { IProject } from "@/types";
import { PROJECT_CATEGORIES } from "./form";

interface ProjectFormCategoryFeaturedProps {
  formData: Partial<IProject>;
  setFormData: (data: Partial<IProject>) => void;
}

const categoryColors: Record<string, string> = {
  AI:         "border-violet-500/40 bg-violet-500/10 text-violet-400 data-[active=true]:border-violet-500 data-[active=true]:bg-violet-500/20",
  FullStack:  "border-blue-500/40 bg-blue-500/10 text-blue-400 data-[active=true]:border-blue-500 data-[active=true]:bg-blue-500/20",
  WebApp:     "border-cyan-500/40 bg-cyan-500/10 text-cyan-400 data-[active=true]:border-cyan-500 data-[active=true]:bg-cyan-500/20",
  Backend:    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 data-[active=true]:border-emerald-500 data-[active=true]:bg-emerald-500/20",
  Automation: "border-amber-500/40 bg-amber-500/10 text-amber-400 data-[active=true]:border-amber-500 data-[active=true]:bg-amber-500/20",
  Resume:     "border-rose-500/40 bg-rose-500/10 text-rose-400 data-[active=true]:border-rose-500 data-[active=true]:bg-rose-500/20",
};

export function ProjectFormCategoryFeatured({ formData, setFormData }: ProjectFormCategoryFeaturedProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-3.5 h-3.5 text-primary shrink-0" />
        <span className="text-xs font-bold text-foreground uppercase tracking-wider">Category & Featured</span>
      </div>

      {/* Visual category picker */}
      <div className="flex flex-wrap gap-2">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            data-active={formData.category === cat}
            onClick={() => setFormData({ ...formData, category: cat })}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${categoryColors[cat]}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured toggle */}
      <label className="flex items-center gap-3 w-fit cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured || false}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-10 h-5 rounded-full bg-muted border border-border peer-checked:bg-yellow-500/80 peer-checked:border-yellow-500 transition-all duration-200" />
          <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-muted-foreground peer-checked:bg-white peer-checked:translate-x-5 transition-all duration-200" />
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <Star className="w-3.5 h-3.5 text-yellow-500" />
          Featured Project
        </div>
      </label>
    </div>
  );
}
