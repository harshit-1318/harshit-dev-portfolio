"use client";

import { X } from "lucide-react";
import type { IExperience } from "@/types";
import { ExperienceFormFields } from "./experience-form-fields";

export const EXPERIENCE_TYPES = ['Internship', 'Full-Time', 'Part-Time', 'Freelance', 'Contract'] as const;

interface ExperienceFormProps {
  formData: Partial<IExperience>;
  setFormData: (data: Partial<IExperience>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  editingId: string | null;
  saving: boolean;
  bulletsInput: string;
  setBulletsInput: (val: string) => void;
  technologiesInput: string;
  setTechnologiesInput: (val: string) => void;
}

export function ExperienceForm({
  formData,
  setFormData,
  handleSubmit,
  resetForm,
  editingId,
  saving,
  bulletsInput,
  setBulletsInput,
  technologiesInput,
  setTechnologiesInput,
}: ExperienceFormProps) {
  return (
    <div className="anime-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold font-heading">
          {editingId ? 'Edit Experience' : 'New Experience'}
        </h2>
        <button
          onClick={resetForm}
          className="text-muted-foreground hover:text-foreground transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <ExperienceFormFields
          formData={formData}
          setFormData={setFormData}
          bulletsInput={bulletsInput}
          setBulletsInput={setBulletsInput}
          technologiesInput={technologiesInput}
          setTechnologiesInput={setTechnologiesInput}
        />

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-50"
          >
            {saving ? 'Saving...' : editingId ? 'Update Experience' : 'Create Experience'}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 bg-muted text-foreground rounded-xl hover:opacity-80 transition cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
