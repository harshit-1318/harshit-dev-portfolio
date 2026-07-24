"use client";

import { Briefcase, Calendar, MapPin, Pencil, Trash2 } from "lucide-react";
import type { IExperience } from "@/types";

interface ExperienceCardItemProps {
  exp: IExperience;
  handleEdit: (exp: IExperience) => void;
  handleDelete: (id: string) => void;
}

export function ExperienceCardItem({ exp, handleEdit, handleDelete }: ExperienceCardItemProps) {
  return (
    <div className="anime-card rounded-2xl p-6 group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold font-heading text-lg text-foreground flex items-center gap-2">
              {exp.role}
              {exp.current && (
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shrink-0" title="Current role" />
              )}
            </h3>
            <div className="text-sm font-medium text-primary mt-0.5">
              {exp.company} <span className="text-muted-foreground font-normal">({exp.type})</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
              <span>Order: {exp.order}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:opacity-0 group-hover:opacity-100 transition shrink-0 self-end md:self-start">
          <button
            onClick={() => handleEdit(exp)}
            className="p-2 bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition cursor-pointer"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={() => exp._id && handleDelete(exp._id)}
            className="p-2 bg-muted text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 pl-0 md:pl-16 space-y-2">
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed pl-1 -indent-5 ml-5">
              {bullet}
            </li>
          ))}
        </ul>

        {exp.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
