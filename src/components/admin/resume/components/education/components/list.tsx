"use client";

import { Calendar, MapPin, Pencil, Trash2, GraduationCap, Award, Hash } from "lucide-react";
import { motion } from "framer-motion";
import type { IEducation } from "@/types";

interface EducationListProps {
  eduLoading: boolean;
  educations: IEducation[];
  handleEduEdit: (edu: IEducation) => void;
  handleEduDelete: (id: string) => void;
}

export function EducationList({
  eduLoading,
  educations,
  handleEduEdit,
  handleEduDelete,
}: EducationListProps) {
  if (eduLoading) {
    return (
      <div className="space-y-3">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="rounded-2xl p-4 border border-border/40 bg-card/40 animate-pulse flex justify-between items-center h-20">
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-muted rounded-md w-1/3" />
              <div className="h-3 bg-muted rounded-md w-1/4" />
            </div>
            <div className="w-16 h-8 bg-muted rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (educations.length === 0) {
    return (
      <div className="rounded-2xl p-8 text-center border border-dashed border-border/80 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center my-4">
        <GraduationCap className="w-10 h-10 text-muted-foreground mb-2" />
        <p className="text-xs text-muted-foreground">
          No education history records found. Click &quot;Add School&quot; to create one.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {educations.map((edu, index) => (
        <motion.div
          key={edu._id || index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <div className="relative rounded-2xl p-5 border border-border/60 hover:border-border bg-card/60 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                  {edu.institution}
                </h3>
                {edu.grade && (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full font-mono font-semibold">
                    <Award className="w-3 h-3" />
                    Grade: {edu.grade}
                  </span>
                )}
              </div>
              <p className="text-xs font-semibold text-primary/90">{edu.degree}</p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 font-medium text-foreground/80">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {edu.period}
                </span>
                {edu.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground/70" />
                    {edu.location}
                  </span>
                )}
                <span className="flex items-center gap-1 text-[11px] font-semibold text-primary/80 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                  <Hash className="w-3 h-3" />
                  Order {edu.order}
                </span>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-2">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[10px] bg-muted rounded-md text-muted-foreground">
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 justify-end shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleEduEdit(edu)}
                className="p-2 hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-xl transition cursor-pointer"
                title="Edit record"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => edu._id && handleEduDelete(edu._id)}
                className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-xl transition cursor-pointer"
                title="Delete record"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
