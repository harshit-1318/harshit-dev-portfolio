"use client";

import { EducationForm } from "./components/form";
import { EducationList } from "./components/list";
import { EducationHeader } from "./components/header";
import { useEducationManager } from "./hooks/use-education-manager";

export function EducationManager() {
  const {
    educations,
    eduLoading,
    showEduForm,
    setShowEduForm,
    editingEduId,
    eduFormData,
    setEduFormData,
    courseworkInput,
    setCourseworkInput,
    eduSaving,
    resetEduForm,
    handleEduEdit,
    handleEduSubmit,
    handleEduDelete,
  } = useEducationManager();

  return (
    <div className="anime-card rounded-2xl p-6 space-y-6">
      <EducationHeader
        showEduForm={showEduForm}
        onAdd={() => { resetEduForm(); setShowEduForm(true); }}
      />

      {showEduForm && (
        <EducationForm
          eduFormData={eduFormData}
          setEduFormData={setEduFormData}
          handleEduSubmit={handleEduSubmit}
          resetEduForm={resetEduForm}
          editingEduId={editingEduId}
          eduSaving={eduSaving}
          courseworkInput={courseworkInput}
          setCourseworkInput={setCourseworkInput}
        />
      )}

      <EducationList
        eduLoading={eduLoading}
        educations={educations}
        handleEduEdit={handleEduEdit}
        handleEduDelete={handleEduDelete}
      />
    </div>
  );
}
