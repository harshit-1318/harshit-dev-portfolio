"use client";

import { SkillsForm } from './skills-form';
import { SkillsList } from './skills-list';
import { SkillsHeader } from './skills-header';
import { useSkillsManager } from './use-skills-manager';

export const SKILL_CATEGORIES = [
  'Programming Languages',
  'Frontend',
  'Backend',
  'Database & Cloud',
  'AI/ML & Frameworks',
  'Tools & Platforms',
] as const;

export function SkillsManager() {
  const {
    skills,
    loading,
    showForm,
    setShowForm,
    editingId,
    formData,
    setFormData,
    saving,
    groupedSkills,
    resetForm,
    handleEdit,
    handleSubmit,
    handleDelete,
  } = useSkillsManager();

  return (
    <div className="space-y-6">
      <SkillsHeader onAdd={() => { resetForm(); setShowForm(true); }} />

      {showForm && (
        <SkillsForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          editingId={editingId}
          saving={saving}
          categories={SKILL_CATEGORIES}
        />
      )}

      <SkillsList
        loading={loading}
        skills={skills}
        categories={SKILL_CATEGORIES}
        groupedSkills={groupedSkills}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
