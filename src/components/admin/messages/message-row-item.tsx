"use client";

import { CheckCircle, Trash2 } from "lucide-react";
import type { IMessage } from "./message-list";

interface MessageRowItemProps {
  msg: IMessage;
  handleView: (msg: IMessage) => void;
  handleMarkRead: (id: string, read: boolean) => void;
  handleDelete: (id: string) => void;
}

export function MessageRowItem({
  msg,
  handleView,
  handleMarkRead,
  handleDelete,
}: MessageRowItemProps) {
  return (
    <div
      onClick={() => handleView(msg)}
      className={`anime-card rounded-2xl p-4 cursor-pointer hover:border-primary/45 transition border flex items-center justify-between gap-4 ${
        !msg.read ? 'border-primary/30 bg-primary/5' : 'border-border/50'
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-foreground text-sm truncate">
            {msg.name}
          </span>
          {!msg.read && (
            <span className="px-1.5 py-0.5 text-[10px] bg-primary text-primary-foreground font-semibold rounded-full uppercase shrink-0">
              New
            </span>
          )}
        </div>
        <h4 className="text-sm font-medium text-foreground truncate">
          {msg.subject}
        </h4>
        <p className="text-xs text-muted-foreground truncate mt-1">
          {msg.message}
        </p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => handleMarkRead(msg._id, !msg.read)}
          title={msg.read ? 'Mark unread' : 'Mark read'}
          className={`p-1.5 rounded-lg transition cursor-pointer hover:bg-muted ${
            msg.read ? 'text-muted-foreground hover:text-primary' : 'text-primary'
          }`}
        >
          <CheckCircle className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={() => handleDelete(msg._id)}
          title="Delete message"
          className="p-1.5 rounded-lg transition cursor-pointer text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="w-4.5 h-4.5" />
        </button>
      </div>
    </div>
  );
}
