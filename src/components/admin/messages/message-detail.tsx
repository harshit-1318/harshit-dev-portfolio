"use client";

import { Calendar, Eye, Mail, Trash2, X } from "lucide-react";
import type { IMessage } from "./message-list";

interface MessageDetailProps {
  selectedMessage: IMessage | null;
  setSelectedMessage: (msg: IMessage | null) => void;
  handleMarkRead: (id: string, read: boolean) => void;
  handleDelete: (id: string) => void;
}

export function MessageDetail({
  selectedMessage,
  setSelectedMessage,
  handleMarkRead,
  handleDelete,
}: MessageDetailProps) {
  if (!selectedMessage) {
    return (
      <div className="anime-card rounded-2xl p-8 sticky top-28 text-center border border-dashed border-border/60">
        <Eye className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
        <p className="text-sm text-muted-foreground">Select a message from the list to view full details.</p>
      </div>
    );
  }

  return (
    <div className="anime-card rounded-2xl p-6 sticky top-28 space-y-4">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <button
          onClick={() => setSelectedMessage(null)}
          className="text-muted-foreground hover:text-foreground transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)]">
          {selectedMessage.subject}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(selectedMessage.createdAt).toLocaleString()}
        </div>
      </div>

      <div className="p-3 bg-muted/50 rounded-xl space-y-1 text-sm border border-border/30">
        <div className="text-muted-foreground">
          From: <span className="font-semibold text-foreground">{selectedMessage.name}</span>
        </div>
        <div className="text-muted-foreground">
          Email:{' '}
          <a
            href={`mailto:${selectedMessage.email}`}
            className="text-primary hover:underline"
          >
            {selectedMessage.email}
          </a>
        </div>
      </div>

      <div className="text-sm text-foreground whitespace-pre-wrap leading-relaxed pt-2">
        {selectedMessage.message}
      </div>

      <div className="pt-4 border-t border-border flex items-center justify-between">
        <button
          onClick={() => handleMarkRead(selectedMessage._id, !selectedMessage.read)}
          className="px-3.5 py-1.5 bg-muted text-foreground hover:bg-muted/80 rounded-xl transition text-xs font-semibold cursor-pointer"
        >
          Mark as {selectedMessage.read ? 'Unread' : 'Read'}
        </button>
        <button
          onClick={() => handleDelete(selectedMessage._id)}
          className="px-3.5 py-1.5 bg-destructive/15 text-destructive hover:bg-destructive/25 rounded-xl transition text-xs font-semibold cursor-pointer flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Delete
        </button>
      </div>
    </div>
  );
}
