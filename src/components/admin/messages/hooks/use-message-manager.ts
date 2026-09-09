"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { IMessage } from '../components/list';

export function useMessageManager() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null);

  useEffect(() => {
    let ignore = false;
    async function loadMessages() {
      try {
        const res = await fetch('/api/messages');
        if (res.ok) {
          const data = await res.json();
          if (!ignore) setMessages(data);
        }
      } catch (error) {
        if (!ignore) {
          console.error('Failed to fetch messages:', error);
          toast.error('Failed to fetch messages');
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadMessages();
    return () => {
      ignore = true;
    };
  }, []);

  const handleMarkRead = async (id: string, read: boolean) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read }),
      });

      if (res.ok) {
        setMessages((prev) =>
          prev.map((msg) => (msg._id === id ? { ...msg, read } : msg))
        );
        if (selectedMessage?._id === id) {
          setSelectedMessage((prev) => prev ? { ...prev, read } : null);
        }
        toast.success(read ? 'Marked as read' : 'Marked as unread');
      } else {
        toast.error('Failed to update message status');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const res = await fetch(`/api/messages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Message deleted!');
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
        if (selectedMessage?._id === id) {
          setSelectedMessage(null);
        }
      } else {
        toast.error('Failed to delete message');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const handleView = (msg: IMessage) => {
    setSelectedMessage(msg);
    if (!msg.read) {
      handleMarkRead(msg._id, true);
    }
  };

  return {
    messages,
    loading,
    selectedMessage,
    setSelectedMessage,
    handleView,
    handleMarkRead,
    handleDelete,
  };
}
