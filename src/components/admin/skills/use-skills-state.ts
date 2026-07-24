"use client";

import { useState } from 'react';
import type { ISkill } from '@/types';

export const emptySkill: Partial<ISkill> = {
  name: '',
  category: 'Programming Languages',
  icon: 'code-2',
  proficiency: 80,
  order: 1,
};

export function useSkillsState() {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ISkill>>(emptySkill);
  const [saving, setSaving] = useState(false);

  return {
    skills, setSkills,
    loading, setLoading,
    showForm, setShowForm,
    editingId, setEditingId,
    formData, setFormData,
    saving, setSaving,
  };
}
