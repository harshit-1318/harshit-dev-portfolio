"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, X, LayoutDashboard } from 'lucide-react';
import { AdminSidebarNav, type SidebarLinkItem } from './admin-sidebar-nav';
import { AdminSidebarUserFooter } from './admin-sidebar-user-footer';
import {
  FolderKanban,
  Award,
  Briefcase,
  Zap,
  MessageSquare,
  FileText,
  Settings,
} from 'lucide-react';

const sidebarLinks: SidebarLinkItem[] = [
  { name: 'Dashboard',    href: '/admin',              icon: LayoutDashboard },
  { name: 'Projects',     href: '/admin/projects',     icon: FolderKanban    },
  { name: 'Certificates', href: '/admin/certificates', icon: Award           },
  { name: 'Experience',   href: '/admin/experience',   icon: Briefcase       },
  { name: 'Skills',       href: '/admin/skills',       icon: Zap             },
  { name: 'Messages',     href: '/admin/messages',     icon: MessageSquare   },
  { name: 'Resume',       href: '/admin/resume',       icon: FileText        },
  { name: 'Settings',     href: '/admin/settings',     icon: Settings        },
];

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isActive: (href: string) => boolean;
}

export function AdminSidebar({ sidebarOpen, setSidebarOpen, isActive }: AdminSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 flex flex-col
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Glass surface */}
        <div className="absolute inset-0 bg-card/95 backdrop-blur-2xl border-r border-border/60" />

        {/* Top-edge glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

        {/* Subtle inner ambient orb */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

        {/* ── Logo header ────────────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-border/50 shrink-0">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-linear-to-br from-primary to-cyan-500 rounded-xl opacity-0 group-hover:opacity-60 blur-sm transition duration-300" />
              <div className="relative w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <ShieldCheck className="w-4.5 h-4.5 text-primary" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold font-heading gradient-text text-sm tracking-tight">Harshit</span>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-0.5">Admin Panel</span>
            </div>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition cursor-pointer"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* ── Nav links ──────────────────────────────────────── */}
        <AdminSidebarNav links={sidebarLinks} isActive={isActive} />

        {/* ── User footer ────────────────────────────────────── */}
        <AdminSidebarUserFooter />
      </aside>
    </>
  );
}
