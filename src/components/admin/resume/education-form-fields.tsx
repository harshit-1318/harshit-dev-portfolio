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
      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">Institution Name</label>
        <input
          type="text"
          required
          value={eduFormData.institution || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, institution: e.target.value })}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
          placeholder="e.g. St. Aerjay Public School"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">Degree / Standard</label>
        <input
          type="text"
          required
          value={eduFormData.degree || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, degree: e.target.value })}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
          placeholder="e.g. 12th, Science"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">Period / Timeline</label>
        <input
          type="text"
          required
          value={eduFormData.period || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, period: e.target.value })}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
          placeholder="e.g. Mar 2020 – Jun 2022"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-muted-foreground">Grade / Score (Optional)</label>
        <input
          type="text"
          value={eduFormData.grade || ''}
          onChange={(e) => setEduFormData({ ...eduFormData, grade: e.target.value })}
          className="w-full px-3.5 py-2 bg-muted border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-xs text-foreground"
          placeholder="e.g. 87% or 8.5 CGPA"
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
