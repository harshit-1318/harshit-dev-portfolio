'use client';

import { useSession } from 'next-auth/react';
import { MessageManager } from '@/components/admin/messages';

export default function AdminMessagesPage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <MessageManager />;
}
