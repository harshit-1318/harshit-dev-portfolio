"use client";

import { X } from "lucide-react";
import type { IProject } from "@/types";
import { ProjectFormFields } from "./project-form-fields";

export const PROJECT_CATEGORIES = ['AI', 'FullStack', 'WebApp', 'Backend', 'Automation', 'Resume'] as const;

interface ProjectFormProps {
  formData: Partial<IProject>;
  setFormData: (data: Partial<IProject>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  editingId: string | null;
  saving: boolean;
  techStackInput: string;
  setTechStackInput: (val: string) => void;
  featuresInput: string;
  setFeaturesInput: (val: string) => void;
}

export function ProjectForm({
  formData,
  setFormData,
  handleSubmit,
  resetForm,
  editingId,
  saving,
  techStackInput,
  setTechStackInput,
  featuresInput,
  setFeaturesInput,
}: ProjectFormProps) {
  return (
    <div className="anime-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold font-heading">
          {editingId ? 'Edit Project' : 'New Project'}
        </h2>
        <button
          onClick={resetForm}
          className="text-muted-foreground hover:text-foreground transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <ProjectFormFields
          formData={formData}
          setFormData={setFormData}
          techStackInput={techStackInput}
          setTechStackInput={setTechStackInput}
          featuresInput={featuresInput}
          setFeaturesInput={setFeaturesInput}
        />

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="anime-btn disabled:opacity-50"
          >
            {saving ? 'Saving...' : editingId ? 'Update Project' : 'Create Project'}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="anime-btn-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
