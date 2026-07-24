'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Mail, ArrowRight, Database, Sparkles, ShieldCheck } from 'lucide-react';
import { DashboardStats } from '@/components/admin/dashboard/dashboard-data';
import { DashboardStatsGrid } from '@/components/admin/dashboard/dashboard-stats-grid';
import { DashboardQuickActions } from '@/components/admin/dashboard/dashboard-quick-actions';
import { DashboardWelcomeBanner } from '@/components/admin/dashboard/dashboard-welcome-banner';

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

  return (
    <div className="space-y-8">
      <DashboardWelcomeBanner userName={userName} />

      {stats && stats.unreadMessages > 0 && (
        <Link
          href="/admin/messages"
          className="flex items-center gap-3 px-5 py-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl hover:bg-rose-500/15 transition cursor-pointer group shadow-sm"
        >
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-rose-500 animate-bounce" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">
              New Visitor Messages ({stats.unreadMessages})
            </p>
            <p className="text-xs text-muted-foreground">
              You have <span className="text-rose-500 font-semibold">{stats.unreadMessages}</span> unread message{stats.unreadMessages !== 1 ? 's' : ''} waiting in your inbox.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-rose-500 ml-auto group-hover:translate-x-1 transition-transform" />
        </Link>
      )}

      <DashboardStatsGrid stats={stats} loading={loading} />

      <DashboardQuickActions />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-card/60 border border-border/70 flex items-center gap-3">
          <Database className="w-5 h-5 text-indigo-500 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground">Database Sync</p>
            <p className="text-[11px] text-muted-foreground">Connected to MongoDB Atlas</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card/60 border border-border/70 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground">Security Session</p>
            <p className="text-[11px] text-muted-foreground">NextAuth.js Protected Route</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-card/60 border border-border/70 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground">Next.js 16 App Router</p>
            <p className="text-[11px] text-muted-foreground">Full-Stack Dynamic CMS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
