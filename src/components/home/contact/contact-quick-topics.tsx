"use client";

import { Check } from "lucide-react";

export const QUICK_SUBJECTS = [
  { label: "Project Inquiry", value: "Project Inquiry", icon: "💼" },
  { label: "Job / Hiring", value: "Job Opportunity / Hiring", icon: "🚀" },
  { label: "Consultation", value: "Tech Consultation", icon: "⚡" },
  { label: "General Chat", value: "General Connect", icon: "💬" },
];

interface ContactQuickTopicsProps {
  selectedSubject: string;
  onSelectSubject: (value: string) => void;
}

export function ContactQuickTopics({ selectedSubject, onSelectSubject }: ContactQuickTopicsProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
          Select Topic:
        </span>
        {selectedSubject && (
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">
            Topic Selected
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {QUICK_SUBJECTS.map((chip) => {
          const isSelected = selectedSubject === chip.value;
          return (
            <button
              key={chip.value}
              type="button"
              onClick={() => onSelectSubject(chip.value)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-indigo-500 bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs"
                  : "border-slate-300/80 dark:border-white/10 bg-slate-100/70 dark:bg-white/4 text-slate-700 dark:text-slate-300 hover:border-indigo-500/40 hover:bg-white dark:hover:bg-white/8"
              }`}
            >
              <span className="text-xs">{chip.icon}</span>
              <span>{chip.label}</span>
              {isSelected && <Check size={11} className="text-indigo-600 dark:text-indigo-400 ml-0.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
