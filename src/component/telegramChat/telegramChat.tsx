'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Message = {
  sender: string;
  text: string;
  timestamp?: string;
};

type BotInfo = {
  id: number;
  is_bot: boolean;
  first_name: string;
  username: string;
};

const TelegramChat = () => {
  const [botInfo, setBotInfo] = useState<BotInfo | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const backendUrl = 'https://false-vintage-flea.glitch.me';

  const fetchBotInfo = async () => {
    try {
      const res = await axios.get(`${backendUrl}/telegram/status`);
      setBotInfo(res.data.bot);
      setError(null);
    } catch (err) {
      console.error('Bot not connected', err);
      setError('Bot is not connected');
      setBotInfo(null);
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backendUrl}/telegram/messages`);
      setMessages(res.data.messages || []);
      console.log(res.data)
      setLoading(false);
    } catch (err) {
      console.error('Failed to load messages', err);
      setError("Couldn't load messages");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBotInfo();
    fetchMessages();
    const interval = setInterval(fetchMessages, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white border rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-blue-600">📨 Telegram Chat Feed</h2>

      {botInfo ? (
        <div className="text-center text-green-600">
          ✅ Connected as <strong>@{botInfo.username}</strong> (ID: {botInfo.id})
        </div>
      ) : (
        <div className="text-center text-red-500">
          {error || '❌ Bot not connected'}
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">🔄 Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-400">No messages yet.</p>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-blue-50 p-4 rounded-lg border transition duration-200"
            >
              <div className="font-semibold text-blue-700">👤 {msg.sender}</div>
              <div className="text-gray-800 mt-1">{msg.text}</div>
              {msg.timestamp && (
                <div className="text-xs text-gray-500 mt-2 text-right">
                  {new Date(msg.timestamp).toLocaleString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => {
          fetchBotInfo();
          fetchMessages();
        }}
        className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        🔁 Refresh
      </button>
    </div>
  );
};

export default TelegramChat;
