'use client';

import Link from 'next/link';
import { ShieldCheck, Lock, Zap, Globe, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

/* ── Left-panel feature pills ───────────────────────────────── */
const FEATURES = [
  { icon: Zap,      label: 'Real-time CMS updates'       },
  { icon: Globe,    label: 'Manage portfolio content'     },
  { icon: Activity, label: 'Full audit trail & history'   },
  { icon: Lock,     label: 'Session-secured access'       },
];

/* ── Left-panel floating stat cards ────────────────────────── */
const STATS = [
  { value: '99.9%', label: 'Uptime SLA',    color: 'from-emerald-500/20 to-emerald-500/5',  dot: 'bg-emerald-500' },
  { value: 'AES-256', label: 'Encryption',  color: 'from-indigo-500/20 to-indigo-500/5',    dot: 'bg-indigo-400'  },
  { value: '<50ms',  label: 'Auth Latency', color: 'from-cyan-500/20 to-cyan-500/5',        dot: 'bg-cyan-400'    },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export function BrandPanel() {
  return (
    <div className="hidden lg:flex w-[52%] xl:w-[55%] relative flex-col justify-between p-10 xl:p-14 overflow-hidden">
      {/* Panel glass surface */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-indigo-500/5 to-cyan-500/5 border-r border-border/40" />

      {/* Decorative inner orb */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-indigo-500/15 to-transparent rounded-full blur-[60px] pointer-events-none" />

      {/* ── Logo / brand mark ─────────────────────────────── */}
      <motion.div {...fadeUp(0.1)} className="relative z-10">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative w-10 h-10 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
          </div>
          <span className="text-base font-bold font-heading text-foreground">Harshit Admin</span>
        </Link>
      </motion.div>

      {/* ── Central copy block ────────────────────────────── */}
      <div className="relative z-10 my-auto">
        {/* System status pill */}
        <motion.div {...fadeUp(0.2)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Systems Operational
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.3)} className="text-4xl xl:text-5xl font-extrabold font-heading leading-[1.1] tracking-tight text-foreground mb-4">
          Your portfolio,<br />
          <span className="gradient-text">under your control.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.4)} className="text-sm xl:text-base text-muted-foreground leading-relaxed max-w-sm mb-10">
          One secure gateway to manage projects, skills, certifications, experience, and messages — all from a single CMS dashboard.
        </motion.p>

        {/* Feature list */}
        <motion.ul {...fadeUp(0.5)} className="space-y-3">
          {FEATURES.map(({ icon: Icon, label }, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-primary" />
              </span>
              {label}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* ── Floating stat cards ───────────────────────────── */}
      <motion.div {...fadeUp(0.6)} className="relative z-10 flex gap-3">
        {STATS.map(({ value, label, color, dot }, idx) => (
          <motion.div
            key={idx}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4 + idx * 1.2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.6 }}
            className={`flex-1 p-3 rounded-2xl bg-linear-to-b ${color} border border-border/50 backdrop-blur-md`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{label}</span>
            </div>
            <p className="text-base font-bold font-mono text-foreground">{value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
