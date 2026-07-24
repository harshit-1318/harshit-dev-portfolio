"use client";

import { ExperienceForm } from './experience-form';
import { ExperienceList } from './experience-list';
import { ExperienceHeader } from './experience-header';
import { useExperienceManager } from './use-experience-manager';

export function ExperienceManager() {
  const {
    experiences,
    loading,
    showForm,
    setShowForm,
    editingId,
    formData,
    setFormData,
    bulletsInput,
    setBulletsInput,
    technologiesInput,
    setTechnologiesInput,
    saving,
    resetForm,
    handleEdit,
    handleSubmit,
    handleDelete,
  } = useExperienceManager();

  return (
    <div className="space-y-6">
      <ExperienceHeader
        onAdd={() => { resetForm(); setShowForm(true); }}
        totalCount={experiences.length}
      />

      {showForm && (
        <ExperienceForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          editingId={editingId}
          saving={saving}
          bulletsInput={bulletsInput}
          setBulletsInput={setBulletsInput}
          technologiesInput={technologiesInput}
          setTechnologiesInput={setTechnologiesInput}
        />
      )}

      <ExperienceList
        loading={loading}
        experiences={experiences}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        onAdd={() => { resetForm(); setShowForm(true); }}
      />
    </div>
  );
}
