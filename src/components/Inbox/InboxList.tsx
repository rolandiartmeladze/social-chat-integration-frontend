'use client';

import { useEffect, useState } from 'react';
import { FetchConversations } from "@/hooks/fetch-conversations"
import { Conv } from '@/models/conversation.model';
import { Icons } from '../icons';
import SortConversations from './InboxSort';
import ConversationItem from './InboxItem';
import { useConversation } from "@/context/ConversationContext";

export default function InboxList() {
  const [conversations, setConversations] = useState<Conv[]>([]);
  const { setActiveConvId, activeConvId } = useConversation();

  useEffect(() => {
    const loadConversations = async () => {
      const ConvList = await FetchConversations();
      if (ConvList && ConvList.length > 0) {
        setConversations(ConvList);
        setActiveConvId(ConvList[0].conversationId);
      }
    };
    loadConversations();
  }, []);
console.log(conversations);
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
            isActive={conv.conversationId === activeConvId}
            key={conv.conversationId}
            conv={conv}
            onClick={() => {
              setActiveConvId(conv.conversationId);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
