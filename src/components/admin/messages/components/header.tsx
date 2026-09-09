"use client";

import { Mail, Inbox } from 'lucide-react';

interface MessageHeaderProps {
  totalCount?: number;
  unreadCount?: number;
}

export function MessageHeader({ totalCount = 0, unreadCount = 0 }: MessageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/40">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl lg:text-3xl font-bold font-heading text-foreground tracking-tight">
                Messages Inbox
              </h1>
              {unreadCount > 0 ? (
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-primary text-primary-foreground animate-pulse shadow-xs">
                  {unreadCount} New
                </span>
              ) : typeof totalCount === "number" && (
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-muted text-muted-foreground border border-border/50">
                  {totalCount} Total
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Review contact form submissions and inquiries from your portfolio visitors
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-xl border border-border/50 self-start sm:self-auto">
        <Inbox className="w-4 h-4 text-primary" />
        <span>{unreadCount} unread of {totalCount} messages</span>
      </div>
    </div>
  );
}
