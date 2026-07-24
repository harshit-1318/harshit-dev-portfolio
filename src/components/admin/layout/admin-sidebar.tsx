"use client";

import Link from 'next/link';
import {
  LayoutDashboard,
  FolderKanban,
  Award,
  Briefcase,
  Zap,
  MessageSquare,
  FileText,
  Settings,
  X,
} from 'lucide-react';
import { AdminSidebarNav, type SidebarLinkItem } from './admin-sidebar-nav';
import { AdminSidebarUserFooter } from './admin-sidebar-user-footer';

const sidebarLinks: SidebarLinkItem[] = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { name: 'Certificates', href: '/admin/certificates', icon: Award },
  { name: 'Experience', href: '/admin/experience', icon: Briefcase },
  { name: 'Skills', href: '/admin/skills', icon: Zap },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Resume', href: '/admin/resume', icon: FileText },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isActive: (href: string) => boolean;
}

export function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
  isActive,
}: AdminSidebarProps) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <Link
            href="/admin"
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <LayoutDashboard className="w-4.5 h-4.5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold font-heading gradient-text text-base leading-none">
                Harshit
              </span>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">
                Admin Panel
              </span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-foreground transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <AdminSidebarNav links={sidebarLinks} isActive={isActive} />

        <AdminSidebarUserFooter />
      </aside>
    </>
  );
}
