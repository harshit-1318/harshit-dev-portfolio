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
    <nav className="relative z-10 flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
      {links.map((link, idx) => {
        const Icon = link.icon;
        const active = isActive(link.href);
        return (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.3 }}
          >
            <Link
              href={link.href}
              className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer group ${
                active
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {active && (
                <motion.div
                  layoutId="admin-sidebar-active"
                  className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/20 shadow-xs"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}

              {/* Icon container */}
              <span className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 ${
                active
                  ? 'bg-primary/15 text-primary shadow-xs shadow-primary/20'
                  : 'text-muted-foreground group-hover:text-foreground group-hover:bg-muted/60'
              }`}>
                <Icon className="w-4 h-4" />
              </span>

              <span className="flex-1 relative z-10 tracking-tight">{link.name}</span>

              {active && (
                <ChevronRight className="w-3.5 h-3.5 text-primary opacity-70 relative z-10" />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
