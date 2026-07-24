'use client';

import { useSession } from 'next-auth/react';
import { ExperienceManager } from '@/components/admin/experience/experience-manager';

export default function AdminExperiencePage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <ExperienceManager />;
}
