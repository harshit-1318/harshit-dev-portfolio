"use client";

import { Link2, Code2, ListChecks, Tag, Star, BookOpen } from "lucide-react";
import type { IProject } from "@/types";
import { PROJECT_CATEGORIES } from "./project-form";

interface ProjectFormFieldsProps {
  formData: Partial<IProject>;
  setFormData: (data: Partial<IProject>) => void;
  techStackInput: string;
  setTechStackInput: (val: string) => void;
  featuresInput: string;
  setFeaturesInput: (val: string) => void;
}

const categoryColors: Record<string, string> = {
  AI:         "border-violet-500/40 bg-violet-500/10 text-violet-400 data-[active=true]:border-violet-500 data-[active=true]:bg-violet-500/20",
  FullStack:  "border-blue-500/40 bg-blue-500/10 text-blue-400 data-[active=true]:border-blue-500 data-[active=true]:bg-blue-500/20",
  WebApp:     "border-cyan-500/40 bg-cyan-500/10 text-cyan-400 data-[active=true]:border-cyan-500 data-[active=true]:bg-cyan-500/20",
  Backend:    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 data-[active=true]:border-emerald-500 data-[active=true]:bg-emerald-500/20",
  Automation: "border-amber-500/40 bg-amber-500/10 text-amber-400 data-[active=true]:border-amber-500 data-[active=true]:bg-amber-500/20",
  Resume:     "border-rose-500/40 bg-rose-500/10 text-rose-400 data-[active=true]:border-rose-500 data-[active=true]:bg-rose-500/20",
};

function SectionLabel({ icon: Icon, label, hint }: { icon: React.ComponentType<{ className?: string }>; label: string; hint?: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
      <span className="text-xs font-bold text-foreground uppercase tracking-wider">{label}</span>
      {hint && <span className="text-xs text-muted-foreground font-normal normal-case tracking-normal">— {hint}</span>}
    </div>
  );
}

export function ProjectFormFields({
  formData,
  setFormData,
  techStackInput,
  setTechStackInput,
  featuresInput,
  setFeaturesInput,
}: ProjectFormFieldsProps) {

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    const slug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    setFormData({ ...formData, title: val, slug });
  };

  return (
    <div className="space-y-6">

      {/* ── Basic Info ── */}
      <div className="space-y-4">
        <SectionLabel icon={BookOpen} label="Basic Info" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground/80">
              Title <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="anime-input"
              placeholder="My Awesome Project"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground/80">
              Slug <span className="text-muted-foreground font-normal">(auto-generated)</span>
            </label>
            <input
              type="text"
              value={formData.slug || ''}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              required
              className="anime-input font-mono text-sm"
              placeholder="my-awesome-project"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground/80">
            Description <span className="text-destructive">*</span>
          </label>
          <textarea
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            rows={3}
            className="anime-input resize-none"
            placeholder="A brief overview of what this project does and its key impact…"
          />
        </div>
      </div>

      {/* ── Category & Featured ── */}
      <div className="space-y-3">
        <SectionLabel icon={Tag} label="Category & Featured" />

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

      {/* ── Tech Stack ── */}
      <div className="space-y-3">
        <SectionLabel icon={Code2} label="Tech Stack" hint="comma-separated" />
        <input
          type="text"
          value={techStackInput}
          onChange={(e) => setTechStackInput(e.target.value)}
          className="anime-input"
          placeholder="React, Node.js, MongoDB, Tailwind CSS"
        />
        {techStackInput && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {techStackInput.split(",").map((t) => t.trim()).filter(Boolean).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Features ── */}
      <div className="space-y-3">
        <SectionLabel icon={ListChecks} label="Key Features" hint="one per line" />
        <textarea
          value={featuresInput}
          onChange={(e) => setFeaturesInput(e.target.value)}
          rows={4}
          className="anime-input resize-none font-mono text-sm"
          placeholder={"User authentication & JWT sessions\nReal-time data sync\nResponsive design"}
        />
        {featuresInput && (
          <p className="text-[11px] text-muted-foreground">
            {featuresInput.split("\n").filter(Boolean).length} feature{featuresInput.split("\n").filter(Boolean).length !== 1 ? "s" : ""} added
          </p>
        )}
      </div>

      {/* ── Links ── */}
      <div className="space-y-3">
        <SectionLabel icon={Link2} label="Links" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground/80">GitHub URL</label>
            <input
              type="url"
              value={formData.githubUrl || ''}
              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
              className="anime-input"
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground/80">Live URL</label>
            <input
              type="url"
              value={formData.liveUrl || ''}
              onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
              className="anime-input"
              placeholder="https://myproject.vercel.app"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
