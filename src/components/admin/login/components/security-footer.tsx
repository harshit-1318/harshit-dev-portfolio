'use client';

import { Lock, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function SecurityFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 flex flex-col items-center gap-2"
    >
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
  );
}
