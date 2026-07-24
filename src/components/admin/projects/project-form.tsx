"use client";

import { X, FolderKanban, Pencil, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { IProject } from "@/types";
import { ProjectFormFields } from "./project-form-fields";

export const PROJECT_CATEGORIES = ['AI', 'FullStack', 'WebApp', 'Backend', 'Automation', 'Resume'] as const;

interface ProjectFormProps {
  formData: Partial<IProject>;
  setFormData: (data: Partial<IProject>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  editingId: string | null;
  saving: boolean;
  techStackInput: string;
  setTechStackInput: (val: string) => void;
  featuresInput: string;
  setFeaturesInput: (val: string) => void;
}

export function ProjectForm({
  formData,
  setFormData,
  handleSubmit,
  resetForm,
  editingId,
  saving,
  techStackInput,
  setTechStackInput,
  featuresInput,
  setFeaturesInput,
}: ProjectFormProps) {
  const isEditing = !!editingId;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden border border-border/70 bg-card/80 backdrop-blur-sm shadow-lg shadow-black/5"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/60 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              {isEditing
                ? <Pencil className="w-4 h-4 text-primary" />
                : <Sparkles className="w-4 h-4 text-primary" />
              }
            </div>
            <div>
              <h2 className="text-sm font-bold font-heading text-foreground">
                {isEditing ? 'Edit Project' : 'New Project'}
              </h2>
              <p className="text-xs text-muted-foreground">
                {isEditing ? 'Update project details' : 'Fill in the details below'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <ProjectFormFields
            formData={formData}
            setFormData={setFormData}
            techStackInput={techStackInput}
            setTechStackInput={setTechStackInput}
            featuresInput={featuresInput}
            setFeaturesInput={setFeaturesInput}
          />

          {/* Footer actions */}
          <div className="flex items-center gap-3 pt-2 border-t border-border/40">
            <button
              type="submit"
              disabled={saving}
              className="anime-btn flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  {isEditing ? <Pencil className="w-4 h-4" /> : <FolderKanban className="w-4 h-4" />}
                  {isEditing ? 'Update Project' : 'Create Project'}
                </>
              )}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="anime-btn-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
