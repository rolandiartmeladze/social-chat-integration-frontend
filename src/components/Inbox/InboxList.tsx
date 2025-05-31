'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Conversation {
  conversationId: string;
  user: string;
  avatar?: string;
  lastMessage?: string;
  page: string;
}

export default function InboxList() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  const fbConversations = async () => {
    try {
      const response = await axios.get("https://false-vintage-flea.glitch.me/messenger/conversations");

      if (Array.isArray(response.data.conversations)) {
        setConversations(response.data.conversations);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching conversations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fbConversations();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📨 Conversations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : conversations.length === 0 ? (
        <p>No conversations found.</p>
      ) : (
        <ul>
          {conversations.map((convo) => (
            <li
              key={convo.conversationId}
              className="p-3 border rounded mb-2 shadow-sm hover:bg-gray-50"
            >
              <div className="font-semibold">👤 User-ID: {convo.conversationId}</div>
              <img src={convo.avatar} alt={convo.user} className="w-6 h-6 rounded-full" />
              <div className="font-semibold">👤 User: {convo.user}</div>
              <p className="text-gray-700">
                {convo.lastMessage ? `💬 Last Message: ${convo.lastMessage}` : 'No messages yet'}
                </p>
              <div className="text-sm text-gray-600">📄 Page: {convo.page}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
