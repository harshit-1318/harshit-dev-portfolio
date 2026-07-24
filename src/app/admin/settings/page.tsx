'use client';

import { useSession } from 'next-auth/react';
import { SettingsManager } from '@/components/admin/settings/settings-manager';

export default function AdminSettingsPage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <SettingsManager />;
}
