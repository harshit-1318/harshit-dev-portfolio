"use client";

import type { IProject } from "@/types";
import { PROJECT_CATEGORIES } from "./project-form";

interface ProjectFormLinksFieldsProps {
  formData: Partial<IProject>;
  setFormData: (data: Partial<IProject>) => void;
}

export function ProjectFormLinksFields({
  formData,
  setFormData,
}: ProjectFormLinksFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">GitHub URL</label>
          <input
            type="url"
            value={formData.githubUrl || ''}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            className="anime-input"
            placeholder="https://github.com/..."
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Live URL</label>
          <input
            type="url"
            value={formData.liveUrl || ''}
            onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
            className="anime-input"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Category</label>
          <select
            value={formData.category || 'FullStack'}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as IProject['category'] })}
            className="anime-input cursor-pointer"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 pt-7">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured || false}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50 cursor-pointer"
          />
          <label htmlFor="featured" className="text-sm font-medium text-foreground cursor-pointer">
            Featured Project
          </label>
        </div>
      </div>
    </>
  );
}
