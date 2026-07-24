"use client";

interface ProjectStackPillsProps {
  stack: string[];
  maxVisible?: number;
  pillClassName?: string;
}

export function ProjectStackPills({
  stack,
  maxVisible = 3,
  pillClassName = "text-[8px] font-mono bg-white dark:bg-white/10 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 px-1 py-0.1 rounded-md",
}: ProjectStackPillsProps) {
  const visibleStack = stack.slice(0, maxVisible);
  const remainingCount = stack.length - maxVisible;

  return (
    <div className="flex flex-wrap gap-1 pt-0.5">
      {visibleStack.map((tech) => (
        <span key={tech} className={pillClassName}>
          {tech}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className="text-[8px] font-mono text-slate-400">
          +{remainingCount}
        </span>
      )}
    </div>
  );
}
