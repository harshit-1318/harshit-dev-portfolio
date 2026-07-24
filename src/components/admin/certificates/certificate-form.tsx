"use client";

import { X, Award, Loader2, Save } from "lucide-react";
import { motion } from "framer-motion";
import type { ICertificate } from "@/types";
import { CertificateFormFields } from "./certificate-form-fields";

interface CertificateFormProps {
  formData: Partial<ICertificate>;
  setFormData: (data: Partial<ICertificate>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  editingId: string | null;
  saving: boolean;
}

export function CertificateForm({
  formData,
  setFormData,
  handleSubmit,
  resetForm,
  editingId,
  saving,
}: CertificateFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.99 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl p-6 border border-border/80 bg-card/90 backdrop-blur-md shadow-2xl overflow-hidden"
    >
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-amber-500 to-secondary" />

      {/* Form header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-lg font-bold font-heading text-foreground">
            {editingId ? 'Edit Certificate' : 'New Certificate'}
          </h2>
        </div>
        <button
          onClick={resetForm}
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition cursor-pointer"
        >
          <X className="w-4.5 h-4.5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <CertificateFormFields
          formData={formData}
          setFormData={setFormData}
        />

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/50">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-xl transition-all cursor-pointer text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center gap-2 text-sm shadow-md"
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{editingId ? 'Update Certificate' : 'Save Certificate'}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
