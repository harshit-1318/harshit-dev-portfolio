"use client";

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Menu, LogOut, ExternalLink, ShieldCheck } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';

interface AdminHeaderProps {
  setSidebarOpen: (open: boolean) => void;
  userName: string;
}

export function AdminHeader({ setSidebarOpen, userName }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border/80 px-4 lg:px-8 py-3.5 shrink-0 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-foreground transition cursor-pointer p-1.5 rounded-lg hover:bg-muted"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Portal
            </div>
            <div>
              <span className="text-xs text-muted-foreground font-medium block">
                Signed in as
              </span>
              <span className="text-sm font-bold text-foreground font-heading">
                {userName}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition cursor-pointer"
          >
            <span>View Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          
          <ThemeToggle />
          
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="px-3.5 py-1.5 text-xs font-semibold bg-destructive/10 text-destructive rounded-xl hover:bg-destructive/20 transition cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
