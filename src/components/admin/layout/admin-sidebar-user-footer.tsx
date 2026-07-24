"use client";

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export function AdminSidebarUserFooter() {
  return (
    <div className="p-3.5 border-t border-border shrink-0 space-y-2">
      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/60 border border-border/50">
        <div className="w-9 h-9 rounded-full bg-linear-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0">
          H
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs font-bold text-foreground truncate">Harshit</span>
          <span className="text-[10px] text-muted-foreground truncate">kumarharshit370@gmail.com</span>
        </div>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: '/admin/login' })}
        className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-xl text-xs font-semibold text-destructive bg-destructive/10 hover:bg-destructive/20 transition cursor-pointer"
      >
        <LogOut className="w-3.5 h-3.5" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}
