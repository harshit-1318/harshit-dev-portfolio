"use client";

import { Plus } from 'lucide-react';

interface ProjectHeaderProps {
  onAdd: () => void;
}

export function ProjectHeader({ onAdd }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
          Projects
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your portfolio projects
        </p>
      </div>
      <button
        onClick={onAdd}
        className="anime-btn flex items-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Project
      </button>
    </div>
  );
}
