"use client";

import { ProjectForm } from './components/form';
import { ProjectList } from './components/list';
import { ProjectHeader } from './components/header';
import { useProjectManager } from './hooks/use-project-manager';

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

  const handleAdd = () => { resetForm(); setShowForm(true); };

  return (
    <div className="space-y-6">
      <ProjectHeader onAdd={handleAdd} projects={projects} />

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
        onAdd={handleAdd}
      />
    </div>
  );
}
