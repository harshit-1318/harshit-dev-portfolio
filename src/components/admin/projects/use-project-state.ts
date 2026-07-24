"use client";

import { useState } from 'react';
import type { IProject } from '@/types';

export const emptyProject: Partial<IProject> = {
  title: '',
  slug: '',
  description: '',
  techStack: [],
  features: [],
  githubUrl: '',
  liveUrl: '',
  category: 'FullStack',
  featured: false,
};

export function useProjectState() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<IProject>>(emptyProject);
  const [techStackInput, setTechStackInput] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [saving, setSaving] = useState(false);

  return {
    projects, setProjects,
    loading, setLoading,
    showForm, setShowForm,
    editingId, setEditingId,
    formData, setFormData,
    techStackInput, setTechStackInput,
    featuresInput, setFeaturesInput,
    saving, setSaving,
  };
}
