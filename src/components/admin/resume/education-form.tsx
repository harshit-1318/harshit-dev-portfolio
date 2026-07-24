"use client";

import { X, GraduationCap, Loader2, Save } from "lucide-react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl p-5 border border-border/80 bg-card/90 backdrop-blur-md shadow-xl overflow-hidden"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4.5 h-4.5 text-primary" />
          <h3 className="text-sm font-bold font-heading text-foreground">
            {editingEduId ? 'Edit Education Record' : 'Add Education Record'}
          </h3>
        </div>
        <button
          type="button"
          onClick={resetEduForm}
          className="w-7 h-7 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleEduSubmit} className="space-y-4">
        <EducationFormFields
          eduFormData={eduFormData}
          setEduFormData={setEduFormData}
          courseworkInput={courseworkInput}
          setCourseworkInput={setCourseworkInput}
        />

        <div className="flex justify-end gap-2.5 pt-3 border-t border-border/50">
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
            className="px-4 py-2 bg-linear-to-r from-primary to-primary/90 text-primary-foreground text-xs font-semibold rounded-xl hover:shadow-md transition disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
          >
            {eduSaving ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>{editingEduId ? 'Update Record' : 'Save Record'}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
