'use client';

import React, { useEffect, useState } from 'react';
import { MessengerMessageSender } from './send-message';

import axios from 'axios';

type Message = {
  sender: string;
  text: string;
};

type Conversation = {
  id: string;
  updated_time: string;
  participants: {
    data: { name: string; email?: string }[];
  };
};

const backendUrl = "https://false-vintage-flea.glitch.me/messenger";

const MessengerChat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axios.get(`${backendUrl}/conversations`);
        setConversations(res.data);
        console.log(conversations);
        console.log('Conversations:', res.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${backendUrl}/messages`);
        setMessages(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchConversations();
    fetchMessages();
    const interval = setInterval(fetchMessages, 25000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📩 Messenger is connected</h2>
      <h2 className="text-lg font-semibold mb-2">Name: </h2>
      <h3 className="text-lg font-semibold mb-2">Conversations {conversations?.length}</h3>
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
