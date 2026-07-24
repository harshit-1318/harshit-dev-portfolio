"use client";

import { Award, ExternalLink, Pencil, Trash2 } from "lucide-react";
import type { ICertificate } from "@/types";

interface CertificateCardItemProps {
  cert: ICertificate;
  handleEdit: (cert: ICertificate) => void;
  handleDelete: (id: string) => void;
}

export function CertificateCardItem({ cert, handleEdit, handleDelete }: CertificateCardItemProps) {
  return (
    <div className="anime-card rounded-2xl p-5 group flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold font-heading text-foreground line-clamp-1">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {cert.organization}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => handleEdit(cert)}
              className="p-1.5 text-muted-foreground hover:text-primary transition cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => cert._id && handleDelete(cert._id)}
              className="p-1.5 text-muted-foreground hover:text-destructive transition cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        {cert.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
            {cert.description}
          </p>
        )}
      </div>
      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {cert.issueDate ? new Date(cert.issueDate).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
          }) : ''}
        </span>
        <span className="bg-muted px-2 py-0.5 rounded">
          Order: {cert.order}
        </span>
      </div>
    </div>
  );
}
