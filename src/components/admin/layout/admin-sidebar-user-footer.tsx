"use client";

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { LogOut, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AdminSidebarUserFooter() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const name  = session?.user?.name  || 'Harshit';
  const email = session?.user?.email || 'kumarharshit370@gmail.com';
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="relative z-10 p-3 border-t border-border/50 shrink-0">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/60 transition-all duration-200 cursor-pointer group"
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-9 h-9 rounded-full bg-linear-to-tr from-indigo-500 via-primary to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/20">
            {initial}
          </div>
          {/* Online dot */}
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-card" />
        </div>

        <div className="flex flex-col min-w-0 flex-1 text-left">
          <span className="text-xs font-bold text-foreground truncate">{name}</span>
          <span className="text-[10px] text-muted-foreground truncate">{email}</span>
        </div>

        <ChevronUp className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Pop-up menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-3 right-3 mb-2 bg-card border border-border/70 rounded-xl shadow-lg shadow-black/10 overflow-hidden"
          >
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="flex items-center gap-2.5 w-full px-4 py-3 text-xs font-semibold text-destructive hover:bg-destructive/10 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
