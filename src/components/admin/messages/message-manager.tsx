"use client";

import { MessageList } from './message-list';
import { MessageDetail } from './message-detail';
import { MessageHeader } from './message-header';
import { useMessageManager } from './use-message-manager';

export function MessageManager() {
  const {
    messages,
    loading,
    selectedMessage,
    setSelectedMessage,
    handleView,
    handleMarkRead,
    handleDelete,
  } = useMessageManager();

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-6">
      <MessageHeader
        totalCount={messages.length}
        unreadCount={unreadCount}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MessageList
            loading={loading}
            messages={messages}
            handleView={handleView}
            handleMarkRead={handleMarkRead}
            handleDelete={handleDelete}
          />
        </div>

        <div className="lg:col-span-1">
          <MessageDetail
            selectedMessage={selectedMessage}
            setSelectedMessage={setSelectedMessage}
            handleMarkRead={handleMarkRead}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
