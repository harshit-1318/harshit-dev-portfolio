"use client";

import { useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import type { ICertificate } from '@/types';
import { useCertificateState, emptyCertificate } from './use-certificate-state';

export function useCertificateManager() {
  const state = useCertificateState();

  const fetchCertificates = useCallback(async () => {
    try {
      const res = await fetch('/api/certificates');
      if (res.ok) state.setCertificates(await res.json());
    } catch {
      toast.error('Failed to fetch certificates');
    } finally {
      state.setLoading(false);
    }
  }, [state]);

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  const resetForm = () => {
    state.setFormData(emptyCertificate);
    state.setEditingId(null);
    state.setShowForm(false);
  };

  const handleEdit = (cert: ICertificate) => {
    const formattedDate = cert.issueDate ? new Date(cert.issueDate).toISOString().split('T')[0] : '';
    state.setFormData({ ...cert, issueDate: formattedDate });
    state.setEditingId(cert._id || null);
    state.setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    state.setSaving(true);
    try {
      const url = state.editingId ? `/api/certificates/${state.editingId}` : '/api/certificates';
      const res = await fetch(url, {
        method: state.editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state.formData),
      });
      if (res.ok) {
        toast.success(state.editingId ? 'Certificate updated!' : 'Certificate created!');
        resetForm();
        fetchCertificates();
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to save certificate');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      state.setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return;
    try {
      const res = await fetch(`/api/certificates/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Certificate deleted!');
        fetchCertificates();
      } else {
        toast.error('Failed to delete certificate');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  return { ...state, resetForm, handleEdit, handleSubmit, handleDelete };
}
