'use client';

import { useEffect } from 'react';
import { Icons } from '../icons';
import SortConversations from './InboxSort';
import ConversationItem from './InboxItem';
import { useConversation } from "@/context/ConversationContext";
import InboxHeader from './InboxHeader';

export default function InboxList() {
  const {
    allConversations,
    setActiveConvId,
    activeConvId,
    refreshConversations,
  } = useConversation();

  useEffect(() => {
    if (allConversations.length === 0) {
      refreshConversations();
    }

    if (!activeConvId && allConversations.length > 0) {
      setActiveConvId(allConversations[0].conversationId);
    }
  }, [allConversations]);

  return (
    <div className="w-85 border-l">
      <InboxHeader className='border-b justify-start'>
        <Icons.panelLeft />
        <samp className="text-xl font-lg">My Inbox</samp>
      </InboxHeader>
      <SortConversations />
      <ul className="scroll px-3 flex flex-col gap-3 h-[calc(100vh-220px)] overflow-y-auto">
        {allConversations.map((conv) => (
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
