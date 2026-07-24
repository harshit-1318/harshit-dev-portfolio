'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { DashboardStats } from '@/components/admin/dashboard/dashboard-data';
import { DashboardStatsGrid } from '@/components/admin/dashboard/dashboard-stats-grid';
import { DashboardQuickActions } from '@/components/admin/dashboard/dashboard-quick-actions';
import { DashboardWelcomeBanner } from '@/components/admin/dashboard/dashboard-welcome-banner';
import { DashboardUnreadAlert } from '@/components/admin/dashboard/dashboard-unread-alert';
import { DashboardInfoStrip } from '@/components/admin/dashboard/dashboard-info-strip';

export default function AdminDashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;
    fetchStats();
  }, [session]);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/dashboard');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

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
