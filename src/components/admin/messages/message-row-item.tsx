"use client";

import { CheckCircle, Trash2, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { IMessage } from "./message-list";

interface MessageRowItemProps {
  msg: IMessage;
  index?: number;
  handleView: (msg: IMessage) => void;
  handleMarkRead: (id: string, read: boolean) => void;
  handleDelete: (id: string) => void;
}

export function MessageRowItem({
  msg,
  index = 0,
  handleView,
  handleMarkRead,
  handleDelete,
}: MessageRowItemProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const formattedTime = new Date(msg.createdAt).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
    >
      <div
        onClick={() => handleView(msg)}
        className={`relative rounded-2xl p-4 cursor-pointer transition-all duration-200 border flex items-center justify-between gap-4 group hover:-translate-y-0.5 hover:shadow-md ${
          !msg.read
            ? 'border-primary/40 bg-primary/5 hover:border-primary/60'
            : 'border-border/60 bg-card/60 hover:border-border'
        }`}
      >
        {/* Unread indicator bar */}
        {!msg.read && (
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary rounded-l-2xl" />
        )}

        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          {/* Sender Avatar */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 border ${
            !msg.read
              ? 'bg-primary text-primary-foreground border-primary/30 shadow-xs'
              : 'bg-muted text-muted-foreground border-border/50'
          }`}>
            {getInitials(msg.name)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`text-sm truncate ${!msg.read ? 'font-bold text-foreground' : 'font-semibold text-foreground/90'}`}>
                  {msg.name}
                </span>
                {!msg.read && (
                  <span className="px-2 py-0.5 text-[10px] bg-primary text-primary-foreground font-bold rounded-full uppercase shrink-0 tracking-wider">
                    New
                  </span>
                )}
              </div>
              <span className="text-[11px] text-muted-foreground shrink-0 font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-muted-foreground/70" />
                {formattedTime}
              </span>
            </div>

            <h4 className={`text-xs truncate ${!msg.read ? 'font-semibold text-foreground' : 'text-foreground/80'}`}>
              {msg.subject}
            </h4>
            <p className="text-xs text-muted-foreground truncate mt-0.5 leading-relaxed">
              {msg.message}
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => handleMarkRead(msg._id, !msg.read)}
            title={msg.read ? 'Mark as unread' : 'Mark as read'}
            className={`p-2 rounded-xl transition cursor-pointer hover:bg-muted ${
              msg.read ? 'text-muted-foreground hover:text-primary' : 'text-primary bg-primary/10'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(msg._id)}
            title="Delete message"
            className="p-2 rounded-xl transition cursor-pointer text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
