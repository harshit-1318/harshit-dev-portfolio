"use client";

import { Briefcase } from "lucide-react";
import type { IExperience } from "@/types";
import { ExperienceCardItem } from "./experience-card-item";

interface ExperienceListProps {
  loading: boolean;
  experiences: IExperience[];
  handleEdit: (exp: IExperience) => void;
  handleDelete: (id: string) => void;
}

export function ExperienceList({
  loading,
  experiences,
  handleEdit,
  handleDelete,
}: ExperienceListProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="anime-card rounded-2xl p-6 animate-pulse">
            <div className="h-6 bg-muted rounded w-1/4 mb-3" />
            <div className="h-4 bg-muted rounded w-1/3 mb-4" />
            <div className="h-4 bg-muted rounded w-full mb-2" />
            <div className="h-4 bg-muted rounded w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="anime-card rounded-2xl p-12 text-center">
        <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No experience items yet. Add your first job/internship!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <ExperienceCardItem
          key={exp._id}
          exp={exp}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
