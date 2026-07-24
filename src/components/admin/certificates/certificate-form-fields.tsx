"use client";

import type { ICertificate } from "@/types";

interface CertificateFormFieldsProps {
  formData: Partial<ICertificate>;
  setFormData: (data: Partial<ICertificate>) => void;
}

export function CertificateFormFields({
  formData,
  setFormData,
}: CertificateFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. Google Cloud GenAI"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Organization</label>
          <input
            type="text"
            value={formData.organization || ''}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. Google Cloud"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Issue Date</label>
          <input
            type="date"
            value={formData.issueDate || ''}
            onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
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
            placeholder="1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Credential URL</label>
        <input
          type="url"
          value={formData.credentialUrl || ''}
          onChange={(e) => setFormData({ ...formData, credentialUrl: e.target.value })}
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          placeholder="https://..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">Description (Optional)</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
          placeholder="Brief summary of the certification criteria or context"
        />
      </div>
    </>
  );
}
