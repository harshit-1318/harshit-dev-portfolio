"use client";

import type { IExperience } from "@/types";

interface ExperienceFormDateFieldsProps {
  formData: Partial<IExperience>;
  setFormData: (data: Partial<IExperience>) => void;
}

export function ExperienceFormDateFields({
  formData,
  setFormData,
}: ExperienceFormDateFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Start Date</label>
        <input
          type="text"
          value={formData.startDate || ''}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          required
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          placeholder="e.g. June 2025"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">End Date</label>
        <input
          type="text"
          value={formData.endDate || ''}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          disabled={formData.current}
          required={!formData.current}
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground disabled:opacity-50"
          placeholder="e.g. July 2025"
        />
      </div>
      <div className="flex items-center gap-3 pt-7">
        <input
          type="checkbox"
          id="current"
          checked={formData.current || false}
          onChange={(e) => setFormData({ ...formData, current: e.target.checked })}
          className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50 cursor-pointer"
        />
        <label htmlFor="current" className="text-sm font-medium text-foreground cursor-pointer">
          Currently Work Here
        </label>
      </div>
    </div>
  );
}
