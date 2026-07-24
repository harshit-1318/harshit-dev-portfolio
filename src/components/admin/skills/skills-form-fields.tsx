"use client";

import type { ISkill } from "@/types";

interface SkillsFormFieldsProps {
  formData: Partial<ISkill>;
  setFormData: (data: Partial<ISkill>) => void;
  categories: readonly string[];
}

export function SkillsFormFields({
  formData,
  setFormData,
  categories,
}: SkillsFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Skill Name</label>
          <input
            type="text"
            value={formData.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. React.js, Python"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Category</label>
          <select
            value={formData.category || "Programming Languages"}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Proficiency (1-100)</label>
          <input
            type="number"
            min="1"
            max="100"
            value={formData.proficiency || 80}
            onChange={(e) => setFormData({ ...formData, proficiency: parseInt(e.target.value) || 80 })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Icon Name</label>
          <input
            type="text"
            value={formData.icon || "code-2"}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            placeholder="e.g. terminal, atom, server"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">Display Order</label>
          <input
            type="number"
            value={formData.order || 1}
            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
            required
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>
    </>
  );
}
