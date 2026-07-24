"use client";

import type { IExperience } from "@/types";
import { EXPERIENCE_TYPES } from "./experience-form";
import { ExperienceFormDateFields } from "./experience-form-date-fields";
import { ExperienceFormTechBulletFields } from "./experience-form-tech-bullet-fields";

interface ExperienceFormFieldsProps {
  formData: Partial<IExperience>;
  setFormData: (data: Partial<IExperience>) => void;
  bulletsInput: string;
  setBulletsInput: (val: string) => void;
  technologiesInput: string;
  setTechnologiesInput: (val: string) => void;
}

export function ExperienceFormFields({
  formData,
  setFormData,
  bulletsInput,
  setBulletsInput,
  technologiesInput,
  setTechnologiesInput,
}: ExperienceFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Company Name</label>
          <input
            type="text"
            value={formData.company || ''}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. Thales Group"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Role / Title</label>
          <input
            type="text"
            value={formData.role || ''}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. Engineering Intern"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Job Type</label>
          <select
            value={formData.type || 'Internship'}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as IExperience['type'] })}
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground cursor-pointer"
          >
            {EXPERIENCE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Location</label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. Noida, India"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Display Order</label>
          <input
            type="number"
            value={formData.order || 1}
            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      <ExperienceFormDateFields formData={formData} setFormData={setFormData} />
      <ExperienceFormTechBulletFields
        bulletsInput={bulletsInput}
        setBulletsInput={setBulletsInput}
        technologiesInput={technologiesInput}
        setTechnologiesInput={setTechnologiesInput}
      />
    </>
  );
}
