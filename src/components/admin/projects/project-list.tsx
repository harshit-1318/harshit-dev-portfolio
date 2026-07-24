"use client";

import { FolderKanban } from "lucide-react";
import type { IProject } from "@/types";
import { ProjectCardItem } from "./project-card-item";

interface ProjectListProps {
  loading: boolean;
  projects: IProject[];
  handleEdit: (project: IProject) => void;
  handleDelete: (id: string) => void;
}

export function ProjectList({
  loading,
  projects,
  handleEdit,
  handleDelete,
}: ProjectListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="anime-card rounded-2xl p-5 animate-pulse">
            <div className="h-5 bg-muted rounded w-3/4 mb-3" />
            <div className="h-4 bg-muted rounded w-1/2 mb-4" />
            <div className="h-3 bg-muted rounded w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="anime-card rounded-2xl p-12 text-center">
        <FolderKanban className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No projects yet. Add your first project!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCardItem
          key={project._id}
          project={project}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
