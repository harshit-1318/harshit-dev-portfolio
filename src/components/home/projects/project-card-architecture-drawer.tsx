"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp, Layers } from "lucide-react";
import type { ProjectItem } from "./project-types";

interface CardArchitectureDrawerProps {
  project: ProjectItem;
  isExpanded: boolean;
  onToggle: () => void;
}

/** Card-variant architecture drawer with full Engineering Challenge / Solution labels */
export function CardArchitectureDrawer({
  project,
  isExpanded,
  onToggle,
}: CardArchitectureDrawerProps) {
  if (!project.challenges && !project.solutions && !project.architectureSteps) {
    return null;
  }

  return (
    <div className="pt-1">
      <button
        type="button"
        onClick={onToggle}
        className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5 cursor-pointer py-1"
      >
        <Layers size={13} />
        <span>{isExpanded ? "Hide Architecture & Solved Challenges" : "View Architecture & Solved Challenges"}</span>
        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mt-2.5 p-3.5 rounded-2xl bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2.5 text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            {project.challenges && (
              <div>
                <strong className="text-slate-900 dark:text-white font-mono mb-0.5 flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-amber-500" />
                  <span>Engineering Challenge:</span>
                </strong>
                <span>{project.challenges}</span>
              </div>
            )}

            {project.solutions && (
              <div>
                <strong className="text-indigo-600 dark:text-indigo-400 font-mono mb-0.5 flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>Solution & Implementation:</span>
                </strong>
                <span>{project.solutions}</span>
              </div>
            )}

            {project.architectureSteps && project.architectureSteps.length > 0 && (
              <div className="pt-1 border-t border-slate-200/80 dark:border-white/10">
                <strong className="text-slate-900 dark:text-white font-mono block mb-1.5">
                  Key Architecture Flow:
                </strong>
                <ul className="space-y-1 pl-2">
                  {project.architectureSteps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5 text-[11px]">
                      <span className="font-mono text-indigo-500 font-bold shrink-0">{sIdx + 1}.</span>
                      <span><strong className="text-slate-800 dark:text-slate-200">{step.title}:</strong> {step.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
