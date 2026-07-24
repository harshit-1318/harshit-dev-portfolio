"use client";

import { MapPin, Clock, Globe } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { ContactEmailCard } from "./contact-email-card";

export function ContactDetailsCards() {
  return (
    <div className="space-y-2 pt-0.5">
      <ContactEmailCard />

      {/* Location Box */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200/90 dark:border-white/10 bg-linear-to-r from-slate-50/80 to-white dark:from-white/4 dark:to-white/2 p-2.5 text-xs backdrop-blur-md transition-all duration-200 hover:border-indigo-500/30">
        <div className="flex items-center gap-2.5">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-cyan-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <MapPin size={14} />
          </div>
          <div className="space-y-px">
            <p className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Location</p>
            <p className="font-bold text-slate-900 dark:text-white text-xs">{siteConfig.location}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-[9px] font-semibold text-indigo-600 dark:text-indigo-400">
          <Globe size={9} />
          <span>IST (UTC+5:30)</span>
        </span>
      </div>

      {/* Response Time Box */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200/90 dark:border-white/10 bg-linear-to-r from-slate-50/80 to-white dark:from-white/4 dark:to-white/2 p-2.5 text-xs backdrop-blur-md transition-all duration-200 hover:border-indigo-500/30">
        <div className="flex items-center gap-2.5">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-cyan-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Clock size={14} />
          </div>
          <div className="space-y-px">
            <p className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Response Time</p>
            <p className="font-bold text-slate-900 dark:text-white text-xs">Within 24 Hours</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Fast Reply</span>
        </span>
      </div>
    </div>
  );
}
