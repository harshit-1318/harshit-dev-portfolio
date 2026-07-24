"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface SidebarLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AdminSidebarNavProps {
  links: SidebarLinkItem[];
  isActive: (href: string) => boolean;
}

export function AdminSidebarNav({ links, isActive }: AdminSidebarNavProps) {
  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
      {links.map((link) => {
        const Icon = link.icon;
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer group ${
              active
                ? 'text-primary font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {active && (
              <motion.div
                layoutId="admin-sidebar-active"
                className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/20 shadow-xs"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <Icon className={`w-4.5 h-4.5 relative z-10 transition-transform ${active ? 'text-primary' : 'group-hover:scale-110'}`} />
            <span className="flex-1 relative z-10">{link.name}</span>
            {active && (
              <ChevronRight className="w-4 h-4 text-primary opacity-80 relative z-10" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
