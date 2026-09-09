'use client';

import { motion } from 'framer-motion';

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

export function AmbientBackground() {
  return (
    <>
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
    </>
  );
}
