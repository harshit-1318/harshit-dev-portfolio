"use client";

import { Plus, Award } from 'lucide-react';

interface CertificateHeaderProps {
  onAdd: () => void;
  totalCount?: number;
}

export function CertificateHeader({ onAdd, totalCount }: CertificateHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/40">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
                Certificates
              </h1>
              {typeof totalCount === "number" && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                  {totalCount}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Manage and showcase your professional credentials and certifications
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onAdd}
        className="self-start sm:self-auto px-4 py-2.5 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-medium rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center gap-2 text-sm shadow-md"
      >
        <Plus className="w-4 h-4" />
        <span>Add Certificate</span>
      </button>
    </div>
  );
}
