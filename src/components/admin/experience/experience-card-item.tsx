"use client";

import { Briefcase, Calendar, MapPin, Pencil, Trash2, CheckCircle2, Hash } from "lucide-react";
import { motion } from "framer-motion";
import type { IExperience } from "@/types";

interface ExperienceCardItemProps {
  exp: IExperience;
  index?: number;
  handleEdit: (exp: IExperience) => void;
  handleDelete: (id: string) => void;
}

export function ExperienceCardItem({
  exp,
  index = 0,
  handleEdit,
  handleDelete,
}: ExperienceCardItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative rounded-2xl p-6 border border-border/60 hover:border-border bg-card/60 backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group overflow-hidden">
        {/* Subtle accent border strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-primary to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary shadow-xs group-hover:scale-105 transition-transform duration-300">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Present
                  </span>
                )}
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-muted/80 text-muted-foreground border border-border/50">
                  {exp.type}
                </span>
              </div>

              <div className="text-sm font-semibold text-primary/90 mt-1">
                {exp.company}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground/70" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-primary/80 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                  <Hash className="w-3 h-3" />
                  Order {exp.order}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 shrink-0 self-end md:self-start">
            <button
              onClick={() => handleEdit(exp)}
              title="Edit"
              className="p-2 bg-muted/80 hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-xl transition cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => exp._id && handleDelete(exp._id)}
              title="Delete"
              className="p-2 bg-muted/80 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-xl transition cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Details & bullet points */}
        <div className="mt-5 pt-4 border-t border-border/40 space-y-3">
          {exp.bullets.length > 0 && (
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-80" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {exp.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-medium bg-muted/70 rounded-md text-foreground/80 border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
