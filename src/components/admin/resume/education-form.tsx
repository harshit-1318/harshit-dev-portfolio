"use client";

import { X } from "lucide-react";
import type { IEducation } from "@/types";
import { EducationFormFields } from "./education-form-fields";

interface EducationFormProps {
  eduFormData: Partial<IEducation>;
  setEduFormData: (data: Partial<IEducation>) => void;
  handleEduSubmit: (e: React.FormEvent) => void;
  resetEduForm: () => void;
  editingEduId: string | null;
  eduSaving: boolean;
  courseworkInput: string;
  setCourseworkInput: (val: string) => void;
}

export function EducationForm({
  eduFormData,
  setEduFormData,
  handleEduSubmit,
  resetEduForm,
  editingEduId,
  eduSaving,
  courseworkInput,
  setCourseworkInput,
}: EducationFormProps) {
  return (
    <form onSubmit={handleEduSubmit} className="bg-muted/40 border border-border/60 p-5 rounded-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          {editingEduId ? 'Edit Education Record' : 'Add Education Record'}
        </h3>
        <button
          type="button"
          onClick={resetEduForm}
          className="w-7 h-7 rounded-lg hover:bg-muted text-muted-foreground flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <EducationFormFields
        eduFormData={eduFormData}
        setEduFormData={setEduFormData}
        courseworkInput={courseworkInput}
        setCourseworkInput={setCourseworkInput}
      />

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={resetEduForm}
          className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold rounded-xl transition cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={eduSaving}
          className="px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
        >
          {eduSaving ? 'Saving...' : 'Save Record'}
        </button>
      </div>
    </form>
  );
}
