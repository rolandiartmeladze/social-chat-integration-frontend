'use client';

import { useEffect, useState } from 'react';
import { FetchConversations } from "@/hooks/fetch-conversations"
import { Conversation } from '@/models/conversation.model';
import { Icons } from '../icons';
import SortConversations from './InboxSort';
import ConversationItem from './InboxItem';

export default function InboxList() {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const loadConversations = async () => {
      const ConvList = await FetchConversations();
      if (ConvList) {
        setConversations(ConvList);
      }
    };
    loadConversations();
  }, []);

  return (
    <div className="w-85 mx-auto border-l">
      <h2 className="text-xl  border-b-2 items-center flex gap-3 font-bold p-4">
        <Icons.panelLeft />
        <samp className="text-2xl">My Inbox</samp>
      </h2>
      <SortConversations />
      <ul className="px-3">
        {conversations.map((conv) => (
<ConversationItem key={conv.id} conv={conv} />
        ))}
      </ul>
    </div>
  );
}
