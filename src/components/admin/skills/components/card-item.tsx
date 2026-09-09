"use client";

import { Pencil, Trash2, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import type { ISkill } from "@/types";

interface SkillCardItemProps {
  skill: ISkill;
  index?: number;
  handleEdit: (skill: ISkill) => void;
  handleDelete: (id: string) => void;
}

export function SkillCardItem({
  skill,
  index = 0,
  handleEdit,
  handleDelete,
}: SkillCardItemProps) {
  // Gradient color based on proficiency level
  const getProficiencyGradient = (val: number) => {
    if (val >= 85) return "from-emerald-500 to-cyan-500";
    if (val >= 70) return "from-primary to-blue-500";
    if (val >= 50) return "from-amber-500 to-primary";
    return "from-rose-500 to-amber-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
    >
      <div className="relative rounded-xl p-4 border border-border/60 hover:border-border bg-card/60 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group flex items-center justify-between">
        <div className="flex-1 min-w-0 mr-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-foreground truncate text-sm group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
            <span className="text-xs font-bold text-primary font-mono shrink-0 ml-2">
              {skill.proficiency}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-muted/80 rounded-full overflow-hidden p-0.5 border border-border/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.03, ease: "easeOut" }}
              className={`h-full rounded-full bg-linear-to-r ${getProficiencyGradient(skill.proficiency ?? 0)} shadow-xs`}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 shrink-0">
          <button
            onClick={() => handleEdit(skill)}
            title="Edit"
            className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition cursor-pointer"
          >
            <Pencil className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => skill._id && handleDelete(skill._id)}
            title="Delete"
            className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
