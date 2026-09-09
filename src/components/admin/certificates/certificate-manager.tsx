"use client";

import { CertificateForm } from './components/form';
import { CertificateList } from './components/list';
import { CertificateHeader } from './components/header';
import { useCertificateManager } from './hooks/use-certificate-manager';

export function CertificateManager() {
  const {
    certificates,
    loading,
    showForm,
    setShowForm,
    editingId,
    formData,
    setFormData,
    saving,
    resetForm,
    handleEdit,
    handleSubmit,
    handleDelete,
  } = useCertificateManager();

  return (
    <div className="space-y-6">
      <CertificateHeader
        onAdd={() => { resetForm(); setShowForm(true); }}
        totalCount={certificates.length}
      />

      {showForm && (
        <CertificateForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          editingId={editingId}
          saving={saving}
        />
      )}

      <CertificateList
        loading={loading}
        certificates={certificates}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        onAdd={() => { resetForm(); setShowForm(true); }}
      />
    </div>
  );
}
