"use client";

import { useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import type { IProject } from '@/types';
import { useProjectState, emptyProject } from './use-project-state';

export function useProjectManager() {
  const state = useProjectState();

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch('/api/projects');
      if (res.ok) state.setProjects(await res.json());
    } catch {
      toast.error('Failed to fetch projects');
    } finally {
      state.setLoading(false);
    }
  }, [state]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const resetForm = () => {
    state.setFormData(emptyProject);
    state.setTechStackInput('');
    state.setFeaturesInput('');
    state.setEditingId(null);
    state.setShowForm(false);
  };

  const handleEdit = (project: IProject) => {
    state.setFormData(project);
    state.setTechStackInput(project.techStack.join(', '));
    state.setFeaturesInput(project.features.join('\n'));
    state.setEditingId(project._id || null);
    state.setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    state.setSaving(true);
    const payload = {
      ...state.formData,
      techStack: state.techStackInput.split(',').map((s) => s.trim()).filter(Boolean),
      features: state.featuresInput.split('\n').map((s) => s.trim()).filter(Boolean),
    };
    try {
      const url = state.editingId ? `/api/projects/${state.editingId}` : '/api/projects';
      const res = await fetch(url, {
        method: state.editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success(state.editingId ? 'Project updated!' : 'Project created!');
        resetForm();
        fetchProjects();
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to save project');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      state.setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Project deleted!');
        fetchProjects();
      } else {
        toast.error('Failed to delete project');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  return { ...state, resetForm, handleEdit, handleSubmit, handleDelete };
}
