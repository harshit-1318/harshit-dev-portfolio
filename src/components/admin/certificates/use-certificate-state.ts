"use client";

import { useState } from 'react';
import type { ICertificate } from '@/types';

export const emptyCertificate: Partial<ICertificate> = {
  title: '',
  organization: '',
  issueDate: '',
  credentialUrl: '',
  description: '',
  order: 1,
};

export function useCertificateState() {
  const [certificates, setCertificates] = useState<ICertificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ICertificate>>(emptyCertificate);
  const [saving, setSaving] = useState(false);

  return {
    certificates, setCertificates,
    loading, setLoading,
    showForm, setShowForm,
    editingId, setEditingId,
    formData, setFormData,
    saving, setSaving,
  };
}
