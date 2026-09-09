'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  type DashboardStats,
  DashboardStatsGrid,
  DashboardQuickActions,
  DashboardWelcomeBanner,
  DashboardUnreadAlert,
  DashboardInfoStrip,
} from '@/components/admin/dashboard';

export default function AdminDashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;
    let ignore = false;

    async function loadStats() {
      try {
        const res = await fetch('/api/dashboard');
        if (res.ok) {
          const data = await res.json();
          if (!ignore) setStats(data);
        }
      } catch (error) {
        if (!ignore) console.error('Failed to fetch dashboard stats:', error);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadStats();
    return () => {
      ignore = true;
    };
  }, [session]);

  if (!session) return null;

  const userName = session.user?.name || 'Harshit';
  const hasUnread = stats && typeof stats.unreadMessages === 'number' && stats.unreadMessages > 0;

  return (
    <div className="space-y-6 lg:space-y-8">
      <DashboardWelcomeBanner userName={userName} />

      {hasUnread && <DashboardUnreadAlert count={stats!.unreadMessages} />}

      <DashboardStatsGrid stats={stats} loading={loading} />

      <DashboardQuickActions />

      <DashboardInfoStrip />
    </div>
  );
}
