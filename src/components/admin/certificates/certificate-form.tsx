"use client";

import { X } from "lucide-react";
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
    <div className="anime-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold font-heading">
          {editingId ? 'Edit Certificate' : 'New Certificate'}
        </h2>
        <button
          onClick={resetForm}
          className="text-muted-foreground hover:text-foreground transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <CertificateFormFields
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition cursor-pointer disabled:opacity-50"
          >
            {saving ? 'Saving...' : editingId ? 'Update Certificate' : 'Create Certificate'}
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
