"use client";

import { FolderKanban, Plus } from "lucide-react";
import type { IProject } from "@/types";
import { ProjectCardItem } from "./project-card-item";

interface ProjectListProps {
  loading: boolean;
  projects: IProject[];
  handleEdit: (project: IProject) => void;
  handleDelete: (id: string) => void;
  onAdd?: () => void;
}

export function ProjectList({
  loading,
  projects,
  handleEdit,
  handleDelete,
  onAdd,
}: ProjectListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="anime-card rounded-2xl p-5 animate-pulse space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-muted rounded-lg w-3/4" />
                <div className="h-5 bg-muted rounded-full w-24" />
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-7 h-7 bg-muted rounded-lg" />
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-4/5" />
            </div>
            <div className="flex gap-1.5 pt-2 border-t border-border/40">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="h-5 w-16 bg-muted rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="anime-card rounded-2xl p-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
          <FolderKanban className="w-8 h-8 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">No projects yet</p>
          <p className="text-sm text-muted-foreground mt-1">Add your first project to showcase your work</p>
        </div>
        {onAdd && (
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-2 anime-btn mx-auto"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <ProjectCardItem
          key={project._id}
          project={project}
          index={i}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
