"use client";

import { Building2, UserCheck, Briefcase, MapPin, Hash } from "lucide-react";
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
    <div className="space-y-4">
      {/* Company & Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            Company Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.company || ''}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. Google / Microsoft / Startup"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-primary" />
            Role / Title <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.role || ''}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. Senior Frontend Engineer"
          />
        </div>
      </div>

      {/* Type, Location, Order */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            Job Type
          </label>
          <select
            value={formData.type || 'Full-Time'}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as IExperience['type'] })}
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm cursor-pointer transition-all"
          >
            {EXPERIENCE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Location <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. San Francisco, CA (Hybrid)"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
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

      {/* Date Fields & Tech/Bullet Fields */}
      <ExperienceFormDateFields formData={formData} setFormData={setFormData} />
      <ExperienceFormTechBulletFields
        bulletsInput={bulletsInput}
        setBulletsInput={setBulletsInput}
        technologiesInput={technologiesInput}
        setTechnologiesInput={setTechnologiesInput}
      />
    </div>
  );
}
