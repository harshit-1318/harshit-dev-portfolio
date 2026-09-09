"use client";

import { useState } from 'react';
import type { IExperience } from '@/types';

export const emptyExperience: Partial<IExperience> = {
  company: '',
  role: '',
  type: 'Internship',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  bullets: [],
  technologies: [],
  order: 1,
};

export function useExperienceState() {
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<IExperience>>(emptyExperience);
  const [bulletsInput, setBulletsInput] = useState('');
  const [technologiesInput, setTechnologiesInput] = useState('');
  const [saving, setSaving] = useState(false);

  return {
    experiences, setExperiences,
    loading, setLoading,
    showForm, setShowForm,
    editingId, setEditingId,
    formData, setFormData,
    bulletsInput, setBulletsInput,
    technologiesInput, setTechnologiesInput,
    saving, setSaving,
  };
}
