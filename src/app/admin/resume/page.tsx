'use client';

import { useSession } from 'next-auth/react';
import { ResumeManager } from '@/components/admin/resume/resume-manager';

export default function AdminResumePage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <ResumeManager />;
}
