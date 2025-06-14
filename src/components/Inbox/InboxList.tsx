'use client';


import { useEffect, useRef } from "react";
import { Icons } from '../icons';
import SortConversations from './InboxSort';
import ConversationItem from './InboxItem';
import { useConversation } from "@/context/ConversationContext";
import InboxHeader from './InboxHeader';
import { Skeleton } from "@/components/ui/skeleton"
import { io, Socket } from "socket.io-client";

export default function InboxList() {

  const socketRef = useRef<Socket | null>(null);

  const {
    allConversations,
    setActiveConvId,
    activeConvId,
    refreshConversations,
    isFetchingAllConversations,
  } = useConversation();

  useEffect(() => {
    if (allConversations.length === 0) {
      refreshConversations();
    }

    if (!activeConvId && allConversations.length > 0) {
      setActiveConvId(allConversations[0].conversationId);
    }
  }, [allConversations]);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL!, {
      withCredentials: true,
    });
    socketRef.current = socket;
    socket.on("connect", () => {
      console.log("✅ Connected to socket.io:", socket.id);
    });
    socket.on("new_message", (msg) => {
      console.log("📩 New message received:", msg);
      refreshConversations();
    });
    socket.on("connect_error", (err) => {
      console.error("❌ Socket error:", err.message);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="w-85 border-l">
      <InboxHeader className="border-b justify-start">
        <Icons.panelLeft />
        <samp className="text-xl font-lg">My Inbox</samp>
      </InboxHeader>
      <SortConversations />

      <ul className="scroll px-3 flex flex-col gap-3 h-[calc(100vh-220px)] overflow-y-auto">
        {isFetchingAllConversations
          ? [...Array(6)].map((_, idx) => (
            <li key={idx} className="flex gap-3 items-center">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-col gap-2 w-full">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </li>
          ))
          : allConversations.map((conv) => (
            <ConversationItem
              isActive={conv.conversationId === activeConvId}
              key={conv.conversationId}
              conv={conv}
              onClick={() => setActiveConvId(conv.conversationId)}
            />
          ))}
      </ul>

    </div>
  );
}
