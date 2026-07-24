"use client";

import { Zap, Plus, Layers } from "lucide-react";
import type { ISkill } from "@/types";
import { SkillCardItem } from "./skill-card-item";

interface SkillsListProps {
  loading: boolean;
  skills: ISkill[];
  categories: readonly string[];
  groupedSkills: Record<string, ISkill[]>;
  handleEdit: (skill: ISkill) => void;
  handleDelete: (id: string) => void;
  onAdd?: () => void;
}

export function SkillsList({
  loading,
  skills,
  categories,
  groupedSkills,
  handleEdit,
  handleDelete,
  onAdd,
}: SkillsListProps) {
  if (loading) {
    return (
      <div className="space-y-8">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="space-y-3">
            <div className="h-6 bg-muted rounded-md w-44 animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-xl p-4 h-16 bg-card/40 border border-border/40 animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className="rounded-2xl p-12 text-center border border-dashed border-border/80 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center max-w-md mx-auto my-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-inner">
          <Zap className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold font-heading text-foreground mb-1">
          No Skills Found
        </h3>
        <p className="text-xs text-muted-foreground max-w-xs mb-6 leading-relaxed">
          Add languages, frameworks, libraries, and tools to highlight your skillset!
        </p>
        {onAdd && (
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary/20 transition cursor-pointer flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add First Skill
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.keys(groupedSkills).map((category) => {
        const catSkills = groupedSkills[category];
        if (!catSkills || catSkills.length === 0) return null;

        return (
          <div key={category} className="space-y-3.5">
            <div className="flex items-center gap-2 pb-1 border-b border-border/40">
              <Layers className="w-4 h-4 text-primary" />
              <h2 className="text-base font-bold font-heading text-foreground">
                {category}
              </h2>
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-muted text-muted-foreground border border-border/50">
                {catSkills.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {catSkills
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((skill, index) => (
                  <SkillCardItem
                    key={skill._id || index}
                    skill={skill}
                    index={index}
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
