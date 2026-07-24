"use client";

import { Calendar, MapPin, Pencil, Trash2 } from "lucide-react";
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
      <div className="text-center py-6 text-xs text-muted-foreground">Loading education history...</div>
    );
  }

  if (educations.length === 0) {
    return (
      <div className="text-center py-8 text-xs text-muted-foreground bg-muted/20 border border-dashed border-border rounded-2xl">
        No education history records found. Click "Add School" to create one.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3.5">
      {educations.map((edu) => (
        <div 
          key={edu._id} 
          className="p-4 bg-muted/20 border border-border/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold text-foreground font-[family-name:var(--font-heading)]">
                {edu.institution}
              </h3>
              {edu.grade && (
                <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-mono font-semibold">
                  Grade: {edu.grade}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground font-medium">{edu.degree}</p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1.5">
              <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-mono">
                <Calendar className="w-3 h-3 text-primary" />
                {edu.period}
              </span>
              {edu.location && (
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  {edu.location}
                </span>
              )}
              <span className="text-[10px] text-muted-foreground font-semibold">
                Order: {edu.order}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 justify-end shrink-0">
            <button
              onClick={() => handleEduEdit(edu)}
              className="p-2 hover:bg-muted text-foreground rounded-lg transition cursor-pointer"
              title="Edit record"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => edu._id && handleEduDelete(edu._id)}
              className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition cursor-pointer"
              title="Delete record"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
