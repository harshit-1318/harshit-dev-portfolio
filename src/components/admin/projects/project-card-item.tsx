"use client";

import { ExternalLink, Pencil, Star, Trash2, GitBranch, Layers } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import { motion } from "framer-motion";
import type { IProject } from "@/types";

interface ProjectCardItemProps {
  project: IProject;
  index: number;
  handleEdit: (project: IProject) => void;
  handleDelete: (id: string) => void;
}

const categoryConfig: Record<string, { label: string; color: string; bg: string; gradient: string; dot: string }> = {
  AI:         { label: "AI / ML",     color: "text-violet-400",  bg: "bg-violet-500/10 border-violet-500/20", gradient: "from-violet-500/10 via-transparent", dot: "bg-violet-400" },
  FullStack:  { label: "Full Stack",  color: "text-blue-400",    bg: "bg-blue-500/10 border-blue-500/20",     gradient: "from-blue-500/10 via-transparent",    dot: "bg-blue-400"    },
  WebApp:     { label: "Web App",     color: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/20",     gradient: "from-cyan-500/10 via-transparent",     dot: "bg-cyan-400"    },
  Backend:    { label: "Backend",     color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", gradient: "from-emerald-500/10 via-transparent", dot: "bg-emerald-400" },
  Automation: { label: "Automation",  color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/20",   gradient: "from-amber-500/10 via-transparent",   dot: "bg-amber-400"   },
  Resume:     { label: "Resume",      color: "text-rose-400",    bg: "bg-rose-500/10 border-rose-500/20",     gradient: "from-rose-500/10 via-transparent",     dot: "bg-rose-400"    },
};

export function ProjectCardItem({ project, index, handleEdit, handleDelete }: ProjectCardItemProps) {
  const cat = categoryConfig[project.category] ?? categoryConfig.WebApp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`
          relative flex flex-col h-full rounded-2xl overflow-hidden group cursor-default
          border border-border/60 hover:border-border
          bg-card/60 backdrop-blur-sm
          hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10
          transition-all duration-300
        `}
      >
        {/* Category gradient top strip */}
        <div className={`absolute inset-0 bg-linear-to-br ${cat.gradient} to-transparent pointer-events-none`} />
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent ${cat.dot.replace("bg-", "via-")} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Featured glow */}
        {project.featured && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none" />
        )}

        <div className="relative p-5 flex flex-col h-full gap-3">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                {project.featured && (
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0" />
                )}
                <h3 className="font-bold font-heading text-foreground truncate text-sm lg:text-base leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Category badge */}
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${cat.bg} ${cat.color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
                {cat.label}
              </span>
            </div>

            {/* Actions — always visible on mobile, hover on desktop */}
            <div className="flex items-center gap-1 shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={() => handleEdit(project)}
                title="Edit"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition cursor-pointer"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => project._id && handleDelete(project._id)}
                title="Delete"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Footer — tech stack + meta */}
          <div className="flex items-end justify-between gap-2 pt-1 border-t border-border/40">
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium bg-muted/70 rounded-md text-muted-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-muted/70 rounded-md text-muted-foreground border border-border/50">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Mini meta */}
            <div className="flex items-center gap-2 shrink-0 text-[10px] text-muted-foreground">
              {project.features?.length > 0 && (
                <span className="flex items-center gap-0.5">
                  <Layers className="w-3 h-3" />
                  {project.features.length}
                </span>
              )}
              {(project.githubUrl || project.liveUrl) && (
                <span className="flex items-center gap-0.5">
                  <GitBranch className="w-3 h-3" />
                  {[project.githubUrl, project.liveUrl].filter(Boolean).length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
