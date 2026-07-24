"use client";

import { ProjectForm } from './project-form';
import { ProjectList } from './project-list';
import { ProjectHeader } from './project-header';
import { useProjectManager } from './use-project-manager';

export function ProjectManager() {
  const {
    projects,
    loading,
    showForm,
    setShowForm,
    editingId,
    formData,
    setFormData,
    techStackInput,
    setTechStackInput,
    featuresInput,
    setFeaturesInput,
    saving,
    resetForm,
    handleEdit,
    handleSubmit,
    handleDelete,
  } = useProjectManager();

  return (
    <div className="space-y-6">
      <ProjectHeader onAdd={() => { resetForm(); setShowForm(true); }} />

      {showForm && (
        <ProjectForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          editingId={editingId}
          saving={saving}
          techStackInput={techStackInput}
          setTechStackInput={setTechStackInput}
          featuresInput={featuresInput}
          setFeaturesInput={setFeaturesInput}
        />
      )}

      <ProjectList
        loading={loading}
        projects={projects}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
