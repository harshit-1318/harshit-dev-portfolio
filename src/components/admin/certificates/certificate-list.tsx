"use client";

import { Award, Plus } from "lucide-react";
import type { ICertificate } from "@/types";
import { CertificateCardItem } from "./certificate-card-item";

interface CertificateListProps {
  loading: boolean;
  certificates: ICertificate[];
  handleEdit: (cert: ICertificate) => void;
  handleDelete: (id: string) => void;
  onAdd?: () => void;
}

export function CertificateList({
  loading,
  certificates,
  handleEdit,
  handleDelete,
  onAdd,
}: CertificateListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 border border-border/40 bg-card/40 backdrop-blur-sm animate-pulse flex flex-col justify-between h-44"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-muted shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-muted rounded-md w-3/4" />
                  <div className="h-3 bg-muted rounded-md w-1/2" />
                </div>
              </div>
              <div className="h-3 bg-muted rounded-md w-full mb-2" />
              <div className="h-3 bg-muted rounded-md w-2/3" />
            </div>
            <div className="h-4 bg-muted rounded-md w-1/3 pt-2 border-t border-border/30" />
          </div>
        ))}
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <div className="rounded-2xl p-12 text-center border border-dashed border-border/80 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center max-w-md mx-auto my-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-inner">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold font-heading text-foreground mb-1">
          No Certificates Found
        </h3>
        <p className="text-xs text-muted-foreground max-w-xs mb-6 leading-relaxed">
          You haven&apos;t added any certifications yet. Add your courses, badges, and credentials here!
        </p>
        {onAdd && (
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary/20 transition cursor-pointer flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add First Certificate
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {certificates.map((cert, index) => (
        <CertificateCardItem
          key={cert._id || index}
          cert={cert}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
