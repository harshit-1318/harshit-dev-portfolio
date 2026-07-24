"use client";

import { ExternalLink, Pencil, Star, Trash2 } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import type { IProject } from "@/types";

interface ProjectCardItemProps {
  project: IProject;
  handleEdit: (project: IProject) => void;
  handleDelete: (id: string) => void;
}

export function ProjectCardItem({ project, handleEdit, handleDelete }: ProjectCardItemProps) {
  return (
    <div className="anime-card rounded-2xl p-5 group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold font-heading text-foreground truncate">
              {project.title}
            </h3>
            {project.featured && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0" />
            )}
          </div>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={() => handleEdit(project)}
            className="p-1.5 text-muted-foreground hover:text-primary transition cursor-pointer"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={() => project._id && handleDelete(project._id)}
            className="p-1.5 text-muted-foreground hover:text-destructive transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>
    </div>
  );
}
