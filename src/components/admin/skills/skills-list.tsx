"use client";

import { Zap } from "lucide-react";
import type { ISkill } from "@/types";
import { SkillCardItem } from "./skill-card-item";

interface SkillsListProps {
  loading: boolean;
  skills: ISkill[];
  categories: readonly string[];
  groupedSkills: Record<string, ISkill[]>;
  handleEdit: (skill: ISkill) => void;
  handleDelete: (id: string) => void;
}

export function SkillsList({
  loading,
  skills,
  categories,
  groupedSkills,
  handleEdit,
  handleDelete,
}: SkillsListProps) {
  if (loading) {
    return (
      <div className="space-y-8">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="space-y-3">
            <div className="h-6 bg-muted rounded w-48 animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="anime-card rounded-xl p-4 h-16 animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className="anime-card rounded-2xl p-12 text-center">
        <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No skills yet. Add your first skill!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const catSkills = groupedSkills[category];
        if (!catSkills || catSkills.length === 0) return null;

        return (
          <div key={category} className="space-y-3">
            <h2 className="text-lg font-semibold font-heading text-foreground border-l-3 border-primary pl-2.5">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {catSkills
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((skill) => (
                  <SkillCardItem
                    key={skill._id}
                    skill={skill}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
