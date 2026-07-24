"use client";

import { useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import type { IExperience } from '@/types';
import { useExperienceState, emptyExperience } from './use-experience-state';

export function useExperienceManager() {
  const state = useExperienceState();

  const fetchExperiences = useCallback(async () => {
    try {
      const res = await fetch('/api/experience');
      if (res.ok) state.setExperiences(await res.json());
    } catch {
      toast.error('Failed to fetch experiences');
    } finally {
      state.setLoading(false);
    }
  }, [state]);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  const resetForm = () => {
    state.setFormData(emptyExperience);
    state.setBulletsInput('');
    state.setTechnologiesInput('');
    state.setEditingId(null);
    state.setShowForm(false);
  };

  const handleEdit = (exp: IExperience) => {
    state.setFormData(exp);
    state.setBulletsInput(exp.bullets.join('\n'));
    state.setTechnologiesInput(exp.technologies.join(', '));
    state.setEditingId(exp._id || null);
    state.setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    state.setSaving(true);
    const payload = {
      ...state.formData,
      bullets: state.bulletsInput.split('\n').map((s) => s.trim()).filter(Boolean),
      technologies: state.technologiesInput.split(',').map((s) => s.trim()).filter(Boolean),
      endDate: state.formData.current ? 'Present' : state.formData.endDate,
    };
    try {
      const url = state.editingId ? `/api/experience/${state.editingId}` : '/api/experience';
      const res = await fetch(url, {
        method: state.editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success(state.editingId ? 'Experience updated!' : 'Experience created!');
        resetForm();
        fetchExperiences();
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to save experience');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      state.setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience?')) return;
    try {
      const res = await fetch(`/api/experience/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Experience deleted!');
        fetchExperiences();
      } else {
        toast.error('Failed to delete experience');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  return { ...state, resetForm, handleEdit, handleSubmit, handleDelete };
}
