"use client";

import { Plus } from 'lucide-react';

interface ExperienceHeaderProps {
  onAdd: () => void;
}

export function ExperienceHeader({ onAdd }: ExperienceHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
          Experience
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your work history and internships
        </p>
      </div>
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition cursor-pointer flex items-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Experience
      </button>
    </div>
  );
}
