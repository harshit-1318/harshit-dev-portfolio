"use client";

import { Pencil, Trash2 } from "lucide-react";
import type { ISkill } from "@/types";

interface SkillCardItemProps {
  skill: ISkill;
  handleEdit: (skill: ISkill) => void;
  handleDelete: (id: string) => void;
}

export function SkillCardItem({ skill, handleEdit, handleDelete }: SkillCardItemProps) {
  return (
    <div className="anime-card rounded-xl p-4 flex items-center justify-between group">
      <div className="flex-1 min-w-0 mr-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-medium text-foreground truncate text-sm">
            {skill.name}
          </span>
          <span className="text-xs text-muted-foreground shrink-0 font-medium">
            {skill.proficiency}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0">
        <button
          onClick={() => handleEdit(skill)}
          className="p-1 text-muted-foreground hover:text-primary transition cursor-pointer"
        >
          <Pencil className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => skill._id && handleDelete(skill._id)}
          className="p-1 text-muted-foreground hover:text-destructive transition cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
