'use client';

import { useSession } from 'next-auth/react';
import { CertificateManager } from '@/components/admin/certificates/certificate-manager';

export default function AdminCertificatesPage() {
  const { data: session } = useSession();

  if (!session) return null;

  return <CertificateManager />;
}
