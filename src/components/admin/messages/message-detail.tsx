"use client";

import { Calendar, Eye, Mail, Trash2, X, Send, User, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
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
      <div className="rounded-2xl p-10 sticky top-24 text-center border border-dashed border-border/80 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-muted/60 flex items-center justify-center text-muted-foreground mb-3">
          <Eye className="w-6 h-6 opacity-60" />
        </div>
        <h4 className="text-sm font-bold text-foreground mb-1">No Message Selected</h4>
        <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
          Select a message from your inbox on the left to read its full content and respond.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl p-6 sticky top-24 border border-border/80 bg-card/80 backdrop-blur-md shadow-xl space-y-5 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-blue-500 to-cyan-500" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-xs">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-heading text-foreground leading-tight">
              {selectedMessage.subject}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {new Date(selectedMessage.createdAt).toLocaleString()}
            </div>
          </div>
        </div>

        <button
          onClick={() => setSelectedMessage(null)}
          className="w-8 h-8 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-4.5 h-4.5" />
        </button>
      </div>

      {/* Sender metadata card */}
      <div className="p-3.5 bg-muted/40 rounded-xl space-y-1.5 text-xs border border-border/50">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <User className="w-3.5 h-3.5 text-primary" />
          <span>{selectedMessage.name}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="w-3.5 h-3.5 text-muted-foreground/70" />
          <a
            href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
            className="text-primary hover:underline font-mono"
          >
            {selectedMessage.email}
          </a>
        </div>
      </div>

      {/* Message content */}
      <div className="text-xs sm:text-sm text-foreground whitespace-pre-wrap leading-relaxed p-4 rounded-xl bg-background/50 border border-border/40 min-h-32">
        {selectedMessage.message}
      </div>

      {/* Bottom actions */}
      <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleMarkRead(selectedMessage._id, !selectedMessage.read)}
            className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-xl transition text-xs font-semibold cursor-pointer flex items-center gap-1.5"
          >
            <CheckCircle className="w-3.5 h-3.5 text-primary" />
            <span>Mark as {selectedMessage.read ? 'Unread' : 'Read'}</span>
          </button>
          <a
            href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
            className="px-3.5 py-2 bg-primary text-primary-foreground hover:shadow-md rounded-xl transition text-xs font-semibold cursor-pointer flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Reply Email</span>
          </a>
        </div>

        <button
          onClick={() => handleDelete(selectedMessage._id)}
          className="px-3 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-xl transition text-xs font-semibold cursor-pointer flex items-center gap-1.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Delete</span>
        </button>
      </div>
    </motion.div>
  );
}
