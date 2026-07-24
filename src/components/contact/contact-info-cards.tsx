"use client";

import { useState } from "react";
import { Mail, MapPin, Check, Copy, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ContactInfoCards() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2.5 pt-1">
      {/* Email Copy Box */}
      <div
        onClick={handleCopyEmail}
        className="group flex items-center justify-between rounded-xl border border-border/80 bg-background/60 p-2.5 text-xs backdrop-blur-sm transition hover:border-primary/40 hover:bg-background/90 cursor-pointer"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Mail size={15} />
          </div>
          <div className="min-w-0 space-y-px">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Email Address</p>
            <p className="font-medium text-foreground text-xs truncate">{siteConfig.email}</p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground group-hover:text-primary transition-colors"
        >
          {copied ? (
            <>
              <Check size={11} className="text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy size={11} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Location Box */}
      <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/60 p-2.5 text-xs backdrop-blur-sm">
        <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <MapPin size={15} />
        </div>
        <div className="space-y-px">
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Location</p>
          <p className="font-medium text-foreground text-xs">{siteConfig.location}</p>
        </div>
      </div>

      {/* Response Time Box */}
      <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/60 p-2.5 text-xs backdrop-blur-sm">
        <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Clock size={15} />
        </div>
        <div className="space-y-px">
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Response Time</p>
          <p className="font-medium text-foreground text-xs">Within 24 Hours</p>
        </div>
      </div>
    </div>
  );
}
