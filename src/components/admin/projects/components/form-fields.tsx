"use client";

import { Link2, BookOpen } from "lucide-react";
import type { IProject } from "@/types";
import { ProjectFormCategoryFeatured } from "./form-category-featured";
import { ProjectFormTechFeatures } from "./form-tech-features";

interface ProjectFormFieldsProps {
  formData: Partial<IProject>;
  setFormData: (data: Partial<IProject>) => void;
  techStackInput: string;
  setTechStackInput: (val: string) => void;
  featuresInput: string;
  setFeaturesInput: (val: string) => void;
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
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Basic Info</span>
        </div>
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
      <ProjectFormCategoryFeatured formData={formData} setFormData={setFormData} />

      {/* ── Tech Stack & Key Features ── */}
      <ProjectFormTechFeatures
        techStackInput={techStackInput}
        setTechStackInput={setTechStackInput}
        featuresInput={featuresInput}
        setFeaturesInput={setFeaturesInput}
      />

      {/* ── Links ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <Link2 className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Links</span>
        </div>
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
