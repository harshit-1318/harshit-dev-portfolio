"use client";

import { Award, Building2, Calendar, Link as LinkIcon, FileText, Hash } from "lucide-react";
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
    <div className="space-y-4">
      {/* Title & Organization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-primary" />
            Title <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. AWS Certified Solutions Architect"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            Organization <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.organization || ''}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
            placeholder="e.g. Amazon Web Services"
          />
        </div>
      </div>

      {/* Date & Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            Issue Date <span className="text-destructive">*</span>
          </label>
          <input
            type="date"
            value={formData.issueDate ? formData.issueDate.split('T')[0] : ''}
            onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
            required
            className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
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
            placeholder="1"
          />
        </div>
      </div>

      {/* Credential URL */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
          <LinkIcon className="w-3.5 h-3.5 text-primary" />
          Credential URL (Optional)
        </label>
        <input
          type="url"
          value={formData.credentialUrl || ''}
          onChange={(e) => setFormData({ ...formData, credentialUrl: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all"
          placeholder="https://credly.com/your-badge-id"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-primary" />
          Description (Optional)
        </label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-3.5 py-2.5 bg-muted/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 text-foreground text-sm transition-all resize-none"
          placeholder="Brief summary of skills verified or exam topics covered..."
        />
      </div>
    </div>
  );
}
