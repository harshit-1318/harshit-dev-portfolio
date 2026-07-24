"use client";

import { Plus, FolderKanban, Star, Layers } from 'lucide-react';
import type { IProject } from '@/types';

interface ProjectHeaderProps {
  onAdd: () => void;
  projects?: IProject[];
}

export function ProjectHeader({ onAdd, projects = [] }: ProjectHeaderProps) {
  const total    = projects.length;
  const featured = projects.filter((p) => p.featured).length;
  const cats     = new Set(projects.map((p) => p.category)).size;

  return (
    <div className="space-y-4">
      {/* Title row */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            Projects
          </h1>
          <p className="text-muted-foreground mt-0.5 text-sm">
            Manage and showcase your portfolio projects
          </p>
        </div>
        <button
          onClick={onAdd}
          className="anime-btn flex items-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {/* Stats strip */}
      {total > 0 && (
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/50 border border-border/50 text-xs text-muted-foreground">
            <FolderKanban className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold text-foreground">{total}</span>
            <span>project{total !== 1 ? 's' : ''}</span>
          </div>
          {featured > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/8 border border-yellow-500/20 text-xs text-yellow-600 dark:text-yellow-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-semibold">{featured}</span>
              <span>featured</span>
            </div>
          )}
          {cats > 1 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/50 border border-border/50 text-xs text-muted-foreground">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span className="font-semibold text-foreground">{cats}</span>
              <span>categories</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
