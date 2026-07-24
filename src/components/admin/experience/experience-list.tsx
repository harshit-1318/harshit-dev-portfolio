"use client";

import { Briefcase, Plus } from "lucide-react";
import type { IExperience } from "@/types";
import { ExperienceCardItem } from "./experience-card-item";

interface ExperienceListProps {
  loading: boolean;
  experiences: IExperience[];
  handleEdit: (exp: IExperience) => void;
  handleDelete: (id: string) => void;
  onAdd?: () => void;
}

export function ExperienceList({
  loading,
  experiences,
  handleEdit,
  handleDelete,
  onAdd,
}: ExperienceListProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-2xl p-6 border border-border/40 bg-card/40 backdrop-blur-sm animate-pulse space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-muted shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-5 bg-muted rounded-md w-1/3" />
                <div className="h-4 bg-muted rounded-md w-1/4" />
              </div>
            </div>
            <div className="h-3 bg-muted rounded-md w-full" />
            <div className="h-3 bg-muted rounded-md w-4/5" />
          </div>
        ))}
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="rounded-2xl p-12 text-center border border-dashed border-border/80 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center max-w-md mx-auto my-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-inner">
          <Briefcase className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold font-heading text-foreground mb-1">
          No Work Experience Yet
        </h3>
        <p className="text-xs text-muted-foreground max-w-xs mb-6 leading-relaxed">
          Add your work history, internships, or freelance roles to showcase your career timeline!
        </p>
        {onAdd && (
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary/20 transition cursor-pointer flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add First Experience
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {experiences.map((exp, index) => (
        <ExperienceCardItem
          key={exp._id || index}
          exp={exp}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
