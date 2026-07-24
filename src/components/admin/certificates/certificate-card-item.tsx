"use client";

import { Award, ExternalLink, Pencil, Trash2, Calendar, Hash, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import type { ICertificate } from "@/types";

interface CertificateCardItemProps {
  cert: ICertificate;
  index?: number;
  handleEdit: (cert: ICertificate) => void;
  handleDelete: (id: string) => void;
}

export function CertificateCardItem({
  cert,
  index = 0,
  handleEdit,
  handleDelete,
}: CertificateCardItemProps) {
  const formattedDate = cert.issueDate
    ? new Date(cert.issueDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex flex-col justify-between h-full rounded-2xl p-5 border border-border/60 hover:border-border bg-card/60 backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group overflow-hidden">
        {/* Top subtle accent gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary/40 via-amber-500/40 to-secondary/40 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-all duration-300" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold font-heading text-foreground line-clamp-1 text-base group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span className="font-medium truncate">{cert.organization}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Credential"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => handleEdit(cert)}
                title="Edit"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => cert._id && handleDelete(cert._id)}
                title="Delete"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description */}
          {cert.description && (
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-2.5 bg-muted/30 p-2.5 rounded-xl border border-border/40">
              {cert.description}
            </p>
          )}
        </div>

        {/* Footer info */}
        <div className="relative z-10 mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
          {formattedDate ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 text-foreground/80 font-medium">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {formattedDate}
            </span>
          ) : (
            <span />
          )}

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-semibold border border-primary/20">
            <Hash className="w-3 h-3" />
            Order {cert.order}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
