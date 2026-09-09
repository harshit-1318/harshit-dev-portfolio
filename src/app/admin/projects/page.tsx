'use client';

import { useSession } from 'next-auth/react';
import { ProjectManager } from '@/components/admin/projects';

export default function AdminProjectsPage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <ProjectManager />;
}
