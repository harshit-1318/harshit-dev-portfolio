"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

interface DashboardUnreadAlertProps {
  count: number;
}

export function DashboardUnreadAlert({ count }: DashboardUnreadAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/admin/messages"
        className="flex items-center gap-4 px-5 py-4 bg-rose-500/8 border border-rose-500/20 rounded-2xl hover:bg-rose-500/12 transition-all cursor-pointer group shadow-sm hover:shadow-md hover:shadow-rose-500/8"
      >
        <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Mail className="w-5 h-5 text-rose-500 animate-bounce" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-foreground">
            New Visitor Messages ({count})
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            You have{' '}
            <span className="text-rose-500 font-semibold">{count}</span>{' '}
            unread message{count !== 1 ? 's' : ''} waiting in your inbox.
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform shrink-0" />
      </Link>
    </motion.div>
  );
}
