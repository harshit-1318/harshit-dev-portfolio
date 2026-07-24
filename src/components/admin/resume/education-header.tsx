"use client";

import { GraduationCap, Plus } from "lucide-react";

interface EducationHeaderProps {
  showEduForm: boolean;
  onAdd: () => void;
}

export function EducationHeader({ showEduForm, onAdd }: EducationHeaderProps) {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-border/40">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <GraduationCap className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-base font-bold font-heading text-foreground">
            Education Timeline
          </h2>
          <p className="text-xs text-muted-foreground">
            Manage your degrees, schools, and academic achievements
          </p>
        </div>
      </div>

      {!showEduForm && (
        <button
          onClick={onAdd}
          className="px-3.5 py-2 bg-linear-to-r from-primary to-primary/90 text-primary-foreground text-xs font-semibold rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add School</span>
        </button>
      )}
    </div>
  );
}
