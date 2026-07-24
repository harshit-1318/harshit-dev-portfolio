"use client";

import type { IProject } from "@/types";
import { ProjectFormLinksFields } from "./project-form-links-fields";

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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="anime-input"
            placeholder="Project title"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Slug</label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            required
            className="anime-input"
            placeholder="project-slug"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          rows={3}
          className="anime-input resize-none"
          placeholder="Brief project description"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Tech Stack <span className="text-muted-foreground font-normal">(comma-separated)</span>
        </label>
        <input
          type="text"
          value={techStackInput}
          onChange={(e) => setTechStackInput(e.target.value)}
          className="anime-input"
          placeholder="React, Node.js, MongoDB"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Features <span className="text-muted-foreground font-normal">(one per line)</span>
        </label>
        <textarea
          value={featuresInput}
          onChange={(e) => setFeaturesInput(e.target.value)}
          rows={4}
          className="anime-input resize-none font-mono"
          placeholder={"Feature one\nFeature two\nFeature three"}
        />
      </div>

      <ProjectFormLinksFields formData={formData} setFormData={setFormData} />
    </>
  );
}
