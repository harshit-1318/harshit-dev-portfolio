"use client";

import { useEffect, useCallback } from "react";
import { toast } from "sonner";
import type { IEducation } from "@/types";
import { useEducationState, emptyEducation } from "./use-education-state";

export function useEducationManager() {
  const state = useEducationState();

  const fetchEducations = useCallback(async () => {
    try {
      const res = await fetch('/api/education');
      if (res.ok) state.setEducations(await res.json());
    } catch (error) {
      console.error('Failed to fetch educations:', error);
    } finally {
      state.setEduLoading(false);
    }
  }, [state]);

  useEffect(() => {
    fetchEducations();
  }, [fetchEducations]);

  const resetEduForm = () => {
    state.setEduFormData(emptyEducation);
    state.setCourseworkInput('');
    state.setEditingEduId(null);
    state.setShowEduForm(false);
  };

  const handleEduEdit = (edu: IEducation) => {
    state.setEduFormData(edu);
    state.setCourseworkInput(edu.coursework ? edu.coursework.join(', ') : '');
    state.setEditingEduId(edu._id || null);
    state.setShowEduForm(true);
  };

  const handleEduSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    state.setEduSaving(true);
    const payload = {
      ...state.eduFormData,
      coursework: state.courseworkInput.split(',').map((s) => s.trim()).filter(Boolean),
    };
    try {
      const url = state.editingEduId ? `/api/education/${state.editingEduId}` : '/api/education';
      const res = await fetch(url, {
        method: state.editingEduId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success(state.editingEduId ? 'Education updated!' : 'Education created!');
        resetEduForm();
        fetchEducations();
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to save education record');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      state.setEduSaving(false);
    }
  };

  const handleEduDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this education record?')) return;
    try {
      const res = await fetch(`/api/education/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Education record deleted!');
        fetchEducations();
      } else {
        toast.error('Failed to delete education record');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  return { ...state, resetEduForm, handleEduEdit, handleEduSubmit, handleEduDelete };
}
