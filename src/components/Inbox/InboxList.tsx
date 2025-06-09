'use client';

import { useEffect, useState } from 'react';
import { FetchConversations } from "@/hooks/fetch-conversations"
import { Conv } from '@/models/conversation.model';
import { Icons } from '../icons';
import SortConversations from './InboxSort';
import ConversationItem from './InboxItem';
import { useConversation } from "@/context/ConversationContext";
import InboxHeader from './InboxHeader';

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
    <div className="w-85 border-l">
      <InboxHeader className='border-b justify-start'>
        <Icons.panelLeft />
        <samp className="text-xl font-lg">My Inbox</samp>
      </InboxHeader>
      <SortConversations />
      <ul className="scroll px-3 flex flex-col gap-3 h-[calc(100vh-220px)] overflow-y-auto">
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
