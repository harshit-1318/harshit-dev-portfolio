"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp, Layers } from "lucide-react";
import type { ProjectItem } from "./project-types";

interface ArchitectureDrawerProps {
  project: ProjectItem;
  isExpanded: boolean;
  onToggle: () => void;
}

/** Expandable architecture / challenge / solution drawer panel */
export function ArchitectureDrawer({
  project,
  isExpanded,
  onToggle,
}: ArchitectureDrawerProps) {
  if (!project.challenges && !project.solutions && !project.architectureSteps) {
    return null;
  }

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="text-[10px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
      >
        <Layers size={10} />
        <span>{isExpanded ? "Hide Architecture" : "View Architecture"}</span>
        {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="mt-1 p-2 rounded-lg bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            {project.challenges && (
              <div>
                <strong className="text-slate-900 dark:text-white font-mono flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-amber-500" />
                  <span>Challenge:</span>
                </strong>
                <span className="line-clamp-2">{project.challenges}</span>
              </div>
            )}

            {project.solutions && (
              <div>
                <strong className="text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-emerald-500" />
                  <span>Solution:</span>
                </strong>
                <span className="line-clamp-2">{project.solutions}</span>
              </div>
            )}

            {project.architectureSteps && project.architectureSteps.length > 0 && (
              <div className="pt-1 border-t border-slate-200/80 dark:border-white/10">
                <strong className="text-slate-900 dark:text-white font-mono block mb-1">
                  Key Architecture Flow:
                </strong>
                <ul className="space-y-1 pl-2">
                  {project.architectureSteps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1 text-[10px]">
                      <span className="font-mono text-indigo-500 font-bold shrink-0">{sIdx + 1}.</span>
                      <span>
                        <strong className="text-slate-800 dark:text-slate-200">{step.title}:</strong>{" "}
                        {step.description}
                      </span>
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
