"use client";

import { useEffect, useState } from "react";
import { useConversation } from "@/context/ConversationContext";
import { Message } from "@/models/conversation.model";
import { UserAvatar } from "../UserAvatar/avatar";
import { cn } from "@/lib/utils";
import { getTimeAgo } from "@/hooks/getTimeAgo";
import { Skeleton } from "../ui/skeleton";

export default function ChatMessages() {
  const { activeConvData, isFetchingActiveConversation } = useConversation();
  const [messages, setMessages] = useState<Message[]>(activeConvData?.messages || []);
  useEffect(() => {
    setMessages(activeConvData?.messages || []);
  }, [activeConvData]);

  if (isFetchingActiveConversation) {
    return (
      <div className="scroll h-[calc(100vh-200px)] overflow-y-auto flex flex-col-reverse px-4">
        <ul className="flex flex-col-reverse gap-3 py-2">
          {[...Array(5)].map((_, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Skeleton className="size-7 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32 rounded-xl" />
                <Skeleton className="h-3 w-20" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!activeConvData) return <p>No participant found</p>;

  return (
    <div className="scroll h-[calc(100vh-200px)] overflow-y-auto flex flex-col-reverse px-4" >
      <ul className="flex flex-col-reverse gap-3 py-2">
        {messages?.map((msg: Message, index: number) => (
          <li key={index} className={cn(
            "flex gap-2",
            msg.sender.id === activeConvData.participants.page?.id
              ? "flex-row-reverse items-end"
              : "flex-row items-start"
          )}>
            <UserAvatar className={cn(
              "size-7",
              msg.sender.id === activeConvData.participants.page?.id
                ? "hidden" : "flex"
            )}
              src={msg.sender.avatarUrl}
              alt={msg.sender.name?.slice(0, 2).toUpperCase()}
            />

            <div className={cn(
              "flex flex-col p-2 text-sm w-auto max-w-[75%] break-words rounded-2xl",
              msg.sender.id === activeConvData.participants.page?.id
                ? "rounded-tr-none items-end bg-[#4E4E4E]"
                : "rounded-tl-none items-start bg-muted/30"
            )}><p>{msg.text}</p> <samp className="text-secondary-foreground">{getTimeAgo(msg.timestamp)}</samp>
            </div>
          </li>
        ))}
      </ul>
    </div>);
}
