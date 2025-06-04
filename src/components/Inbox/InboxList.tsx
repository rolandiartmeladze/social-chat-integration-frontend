'use client';

import { useEffect, useState } from 'react';
import { FetchConversations } from "@/hooks/fetch-conversations"
import { Conversation } from '@/models/conversation.model';
import { Icons } from '../icons';
import SortConversations from './InboxSort';
import ConversationItem from './InboxItem';
import { useConversation } from "@/context/ConversationContext";

export default function InboxList() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const { setActiveConvId, activeConvId } = useConversation();

  useEffect(() => {
    const loadConversations = async () => {
      const ConvList = await FetchConversations();
      if (ConvList && ConvList.length > 0) {
        setConversations(ConvList);
        setActiveConvId(ConvList[0].id);
      }
    };
    loadConversations();
  }, []);

  return (
    <div className="w-85 mx-auto border-l">
      <h2 className="text-xl  border-b items-center flex gap-3 p-4">
        <Icons.panelLeft />
        <samp className="text-2xl">My Inbox</samp>
      </h2>
      <SortConversations />
      <ul className="px-3 flex flex-col gap-3">
        {conversations.map((conv) => (
          <ConversationItem
            isActive={conv.id === activeConvId}
            key={conv.id}
            conv={conv}
            onClick={() => {
              setActiveConvId(conv.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
