"use client";

import type { IEducation } from "@/types";

interface EducationExtraFieldsProps {
  eduFormData: Partial<IEducation>;
  setEduFormData: (data: Partial<IEducation>) => void;
  courseworkInput: string;
  setCourseworkInput: (val: string) => void;
}

export function EducationExtraFields({
  eduFormData,
  setEduFormData,
  courseworkInput,
  setCourseworkInput,
}: EducationExtraFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">Location (Optional)</label>
        <input
          type="text"
          value={eduFormData.location || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, location: e.target.value })}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
          placeholder="e.g. Greater Noida, UP"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">Display Order (Ascending)</label>
        <input
          type="number"
          value={eduFormData.order || 1}
          onChange={(e) => setEduFormData({ ...eduFormData, order: parseInt(e.target.value) || 1 })}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="block text-xs font-medium text-muted-foreground">Coursework / Key Subjects (Comma-separated)</label>
        <input
          type="text"
          value={courseworkInput}
          onChange={(e) => setCourseworkInput(e.target.value)}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
          placeholder="e.g. Physics, Chemistry, Mathematics"
        />
      </div>
    </>
  );
}
