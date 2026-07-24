'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  Sparkles,
  Clock,
  Zap,
  Globe,
  Activity,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LoginForm } from '@/components/admin/login/login-form';

/* ── Floating particles (purely decorative) ─────────────────── */
const PARTICLES = [
  { x: '12%',  y: '18%',  size: 3, delay: 0,    dur: 8  },
  { x: '82%',  y: '11%',  size: 2, delay: 1.2,  dur: 11 },
  { x: '67%',  y: '76%',  size: 4, delay: 0.7,  dur: 9  },
  { x: '28%',  y: '88%',  size: 2, delay: 2.1,  dur: 13 },
  { x: '91%',  y: '55%',  size: 3, delay: 1.8,  dur: 7  },
  { x: '44%',  y: '30%',  size: 2, delay: 0.4,  dur: 10 },
  { x: '5%',   y: '62%',  size: 3, delay: 3.0,  dur: 12 },
  { x: '75%',  y: '40%',  size: 2, delay: 2.5,  dur: 9  },
];

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

/* ── Stagger helpers ────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex">

      {/* ── Ambient background layer ──────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Layered radial glows */}
        <div className="absolute top-1/3 left-1/4 w-125 h-125 rounded-full bg-indigo-500/15 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      {/* ── Floating particles ────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════
          LEFT BRAND PANEL (hidden on mobile/tablet)
      ══════════════════════════════════════════════════════ */}
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
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
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

      {/* ══════════════════════════════════════════════════════
          RIGHT FORM PANEL
      ══════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center p-5 sm:p-8 relative">

        {/* ── Top-right controls ────────────────────────────── */}
        <motion.div
          {...fadeUp(0.1)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2"
        >
          {/* Back button — only visible on mobile (panel already has it on desktop) */}
          <Link
            href="/"
            className="lg:hidden group flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground bg-card/70 backdrop-blur-xl border border-border/70 hover:border-primary/40 rounded-2xl transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Portfolio</span>
          </Link>
          <div className="p-1.5 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/70 shadow-sm flex items-center justify-center">
            <ThemeToggle />
          </div>
        </motion.div>

        {/* ── Form column ───────────────────────────────────── */}
        <div className="w-full max-w-sm">
          {/* Header — shown on mobile/tablet only */}
          <motion.div {...fadeUp(0.15)} className="lg:hidden text-center mb-8">
            <div className="relative inline-block mb-4 group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-indigo-500 to-cyan-500 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative w-14 h-14 rounded-2xl bg-card/90 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-extrabold font-heading tracking-tight text-foreground">
              Admin <span className="gradient-text">Control Center</span>
            </h1>
            <p className="text-xs text-muted-foreground mt-1.5">
              Sign in with authorized credentials
            </p>
          </motion.div>

          {/* Desktop header inside form column */}
          <motion.div {...fadeUp(0.2)} className="hidden lg:block mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">Secure Access</p>
            <h2 className="text-2xl font-extrabold font-heading text-foreground">
              Welcome back 👋
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Enter your credentials to continue</p>
          </motion.div>

          {/* The form itself */}
          <motion.div {...fadeUp(0.3)}>
            <LoginForm />
          </motion.div>

          {/* Security footer */}
          <motion.div {...fadeUp(0.45)} className="mt-6 flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card/50 backdrop-blur-md border border-border/50 text-muted-foreground text-[11px] font-medium shadow-xs">
              <Lock className="w-3 h-3 text-primary" />
              <span>256-Bit SSL Encrypted</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Authorized Personnel Only</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/50 font-mono">
              <Clock className="w-3 h-3" />
              <span>Sessions expire after 30 days of inactivity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
