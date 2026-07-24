"use client";

import { Award } from "lucide-react";
import type { ICertificate } from "@/types";
import { CertificateCardItem } from "./certificate-card-item";

interface CertificateListProps {
  loading: boolean;
  certificates: ICertificate[];
  handleEdit: (cert: ICertificate) => void;
  handleDelete: (id: string) => void;
}

export function CertificateList({
  loading,
  certificates,
  handleEdit,
  handleDelete,
}: CertificateListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="anime-card rounded-2xl p-5 animate-pulse">
            <div className="h-5 bg-muted rounded w-3/4 mb-3" />
            <div className="h-4 bg-muted rounded w-1/2 mb-4" />
            <div className="h-3 bg-muted rounded w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <div className="anime-card rounded-2xl p-12 text-center">
        <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No certificates yet. Add your first certification!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certificates.map((cert) => (
        <CertificateCardItem
          key={cert._id}
          cert={cert}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
