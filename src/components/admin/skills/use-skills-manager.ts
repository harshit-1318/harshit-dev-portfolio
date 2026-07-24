"use client";

import { useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import type { ISkill } from '@/types';
import { SKILL_CATEGORIES } from './skills-manager';
import { useSkillsState, emptySkill } from './use-skills-state';

export function useSkillsManager() {
  const state = useSkillsState();
  const { setSkills, setLoading } = state;

  const fetchSkills = useCallback(async () => {
    try {
      const res = await fetch('/api/skills');
      if (res.ok) setSkills(await res.json());
    } catch {
      toast.error('Failed to fetch skills');
    } finally {
      setLoading(false);
    }
  }, [setSkills, setLoading]);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const resetForm = () => {
    state.setFormData(emptySkill);
    state.setEditingId(null);
    state.setShowForm(false);
  };

  const handleEdit = (skill: ISkill) => {
    state.setFormData(skill);
    state.setEditingId(skill._id || null);
    state.setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    state.setSaving(true);
    try {
      const url = state.editingId ? `/api/skills/${state.editingId}` : '/api/skills';
      const res = await fetch(url, {
        method: state.editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state.formData),
      });
      if (res.ok) {
        toast.success(state.editingId ? 'Skill updated!' : 'Skill created!');
        resetForm();
        fetchSkills();
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to save skill');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      state.setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    try {
      const res = await fetch(`/api/skills/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Skill deleted!');
        fetchSkills();
      } else {
        toast.error('Failed to delete skill');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const groupedSkills = SKILL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = state.skills.filter((s) => s.category === cat);
    return acc;
  }, {} as Record<string, ISkill[]>);

  return { ...state, groupedSkills, resetForm, handleEdit, handleSubmit, handleDelete };
}
