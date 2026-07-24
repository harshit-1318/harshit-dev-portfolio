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
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="anime-card rounded-2xl p-5 animate-pulse h-20" />
        ))}
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="anime-card rounded-2xl p-12 text-center">
        <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Your inbox is empty. No messages yet!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <MessageRowItem
          key={msg._id}
          msg={msg}
          handleView={handleView}
          handleMarkRead={handleMarkRead}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
