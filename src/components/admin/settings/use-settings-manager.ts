"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { IProfileData } from './personal-details-form';

export function useSettingsManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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
        }
      } catch (error) {
        console.error('Failed to fetch profile settings:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        toast.success('Profile settings updated successfully!');
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to update profile');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return {
    loading,
    saving,
    profile,
    setProfile,
    handleSubmit,
  };
}
