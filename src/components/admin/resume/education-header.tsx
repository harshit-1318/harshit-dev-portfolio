"use client";

import { GraduationCap, Plus } from "lucide-react";

interface EducationHeaderProps {
  showEduForm: boolean;
  onAdd: () => void;
}

export function EducationHeader({ showEduForm, onAdd }: EducationHeaderProps) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-border/50">
      <h2 className="text-lg font-semibold font-heading flex items-center gap-2 text-foreground">
        <GraduationCap className="w-5 h-5 text-primary" />
        Education Details
      </h2>
      {!showEduForm && (
        <button
          onClick={onAdd}
          className="px-3.5 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          Add School
        </button>
      )}
    </div>
  );
}
