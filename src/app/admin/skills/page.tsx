'use client';

import { useSession } from 'next-auth/react';
import { SkillsManager } from '@/components/admin/skills/skills-manager';

export default function AdminSkillsPage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <SkillsManager />;
}
