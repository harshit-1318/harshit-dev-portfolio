"use client";

import { MessageSquare } from "lucide-react";
import { MessageRowItem } from "./message-row-item";

export interface IMessage {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface MessageListProps {
  loading: boolean;
  messages: IMessage[];
  handleView: (msg: IMessage) => void;
  handleMarkRead: (id: string, read: boolean) => void;
  handleDelete: (id: string) => void;
}

export function MessageList({
  loading,
  messages,
  handleView,
  handleMarkRead,
  handleDelete,
}: MessageListProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl p-4 border border-border/40 bg-card/40 animate-pulse h-20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-muted shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-muted rounded-md w-1/3" />
              <div className="h-3 bg-muted rounded-md w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="rounded-2xl p-12 text-center border border-dashed border-border/80 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-inner">
          <MessageSquare className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold font-heading text-foreground mb-1">
          Inbox is Empty
        </h3>
        <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
          You don&apos;t have any message submissions yet. When visitors fill out your contact form, they will appear here!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((msg, index) => (
        <MessageRowItem
          key={msg._id || index}
          msg={msg}
          index={index}
          handleView={handleView}
          handleMarkRead={handleMarkRead}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
