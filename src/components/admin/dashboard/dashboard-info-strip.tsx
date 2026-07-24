"use client";

import { motion } from 'framer-motion';
import { Database, Sparkles, ShieldCheck } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: Database,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/8 border-indigo-500/20',
    title: 'Database Sync',
    desc: 'Connected to MongoDB Atlas',
  },
  {
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/8 border-emerald-500/20',
    title: 'Security Session',
    desc: 'NextAuth.js Protected Route',
  },
  {
    icon: Sparkles,
    color: 'text-amber-500',
    bg: 'bg-amber-500/8 border-amber-500/20',
    title: 'Next.js 16 App Router',
    desc: 'Full-Stack Dynamic CMS',
  },
];

export function DashboardInfoStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-3"
    >
      {INFO_CARDS.map(({ icon: Icon, color, bg, title, desc }) => (
        <div
          key={title}
          className={`flex items-center gap-3.5 p-4 rounded-2xl border ${bg} bg-card/50`}
        >
          <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-4.5 h-4.5 ${color}`} />
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">{title}</p>
            <p className="text-[11px] text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
