"use client";

import type { IEducation } from "@/types";
import { EducationExtraFields } from "./education-extra-fields";

interface EducationFormFieldsProps {
  eduFormData: Partial<IEducation>;
  setEduFormData: (data: Partial<IEducation>) => void;
  courseworkInput: string;
  setCourseworkInput: (val: string) => void;
}

export function EducationFormFields({
  eduFormData,
  setEduFormData,
  courseworkInput,
  setCourseworkInput,
}: EducationFormFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Institution Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          required
          value={eduFormData.institution || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, institution: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-xs transition-all"
          placeholder="e.g. St. Xavier's University"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Degree / Qualification <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          required
          value={eduFormData.degree || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, degree: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-xs transition-all"
          placeholder="e.g. B.Tech Computer Science"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Period / Timeline <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          required
          value={eduFormData.period || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, period: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-xs transition-all"
          placeholder="e.g. 2021 – 2025"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Grade / Score (Optional)
        </label>
        <input
          type="text"
          value={eduFormData.grade || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, grade: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-xs transition-all"
          placeholder="e.g. 8.9 CGPA / 88%"
        />
      </div>

      <EducationExtraFields
        eduFormData={eduFormData}
        setEduFormData={setEduFormData}
        courseworkInput={courseworkInput}
        setCourseworkInput={setCourseworkInput}
      />
    </div>
  );
}
