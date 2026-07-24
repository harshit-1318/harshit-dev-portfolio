"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { IProfileData } from './personal-details-form';

export function useSettingsManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [initialProfile, setInitialProfile] = useState<Partial<IProfileData>>({});
  const [profile, setProfile] = useState<Partial<IProfileData>>({
    name: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    logoColor1: '#6366f1',
    logoColor2: '#22d3ee',
    linkedinUrl: '',
    githubUrl: '',
    githubUsername: '',
    leetcodeUrl: '',
    leetcodeUsername: '',
    resumeUrl: '',
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('/api/profile');
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          setInitialProfile(data);
        }
      } catch (error) {
        console.error('Failed to fetch profile settings:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const isDirty = JSON.stringify(profile) !== JSON.stringify(initialProfile);

  const resetForm = () => {
    setProfile(initialProfile);
    toast.info('Form reset to saved settings');
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setInitialProfile(data);
        toast.success('Profile settings updated successfully!');
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to update profile');
      }
    } catch {
      toast.error('Something went wrong saving settings');
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveSettings();
  };

  // Keyboard shortcut Ctrl+S / Cmd+S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (!saving && isDirty) {
          saveSettings();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [saving, isDirty, profile]);

  return {
    loading,
    saving,
    profile,
    setProfile,
    handleSubmit,
    isDirty,
    resetForm,
  };
}
