'use client';

import React, { useEffect, useState } from 'react';
import { MessengerMessageSender } from './send-message';

import axios from 'axios';

type Message = {
  sender: string;
  text: string;
};

const MessengerChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const backendUrl = "https://false-vintage-flea.glitch.me/";
      try {
        const res = await axios.get(`${backendUrl}/messenger/messages`);
        setMessages(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 25000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📩 Messenger Chat</h2>
      <div className="bg-white border rounded p-4 shadow">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">👤 {msg.sender}:</span>{' '}
              <span>{msg.text}</span>
              <button
                onClick={() => MessengerMessageSender(msg.sender, `'Thanks for your message! 🙌' + ${msg.sender}`)}
                className="ml-2 text-sm text-blue-500 hover:underline"
              >
                Send Reply
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessengerChat;
