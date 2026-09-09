"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { ResumeSettings, type IResumeData } from './components/settings';
import { EducationManager } from './components/education';
import { ResumeManagerHeader } from './components/header';

export function ResumeManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resume, setResume] = useState<Partial<IResumeData>>({
    summary: '',
    pdfUrl: 'https://drive.google.com/file/d/1t7Ws-Be5RBMl-QMIKngor6LCMr2gpBQ-/view?usp=sharing',
    highlights: {
      experience: '',
      skills: '',
      projects: '',
      education: '',
      certifications: '',
    },
    downloadCount: 0,
  });

  useEffect(() => {
    let ignore = false;
    async function loadResume() {
      try {
        const res = await fetch('/api/resume');
        if (res.ok) {
          const data = await res.json();
          if (!ignore) setResume(data);
        }
      } catch (error) {
        if (!ignore) {
          console.error('Failed to fetch resume settings:', error);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadResume();
    return () => {
      ignore = true;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch('/api/resume', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resume),
      });

      if (res.ok) {
        const data = await res.json();
        setResume(data);
        toast.success('Resume metadata updated successfully!');
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to update resume details');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-muted rounded w-48" />
        <div className="anime-card rounded-2xl p-6 h-96" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl pb-16">
      <ResumeManagerHeader downloadCount={resume.downloadCount || 0} />

      <ResumeSettings
        resume={resume}
        setResume={setResume}
        handleSubmit={handleSubmit}
        saving={saving}
      />

      <EducationManager />
    </div>
  );
}
