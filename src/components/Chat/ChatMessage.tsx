"use client";

import { useConversation } from "@/context/ConversationContext";
import { Message } from "@/models/conversation.model";
import { ScrollArea } from "../ui/scroll-area";
import { UserAvatar } from "../UserAvatar/avatar";
import { cn } from "@/lib/utils";

export default function ChatMessages() {
  const { activeConvData } = useConversation();
  if (!activeConvData) return <p>No participant found</p>;

  return (
    <ScrollArea className="flex flex-col justify-end h-full px-4">
      <ul className="flex flex-col-reverse gap-3 overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
        {activeConvData?.messages?.map((msg: Message, index: number) => (
          <li key={index} className={cn(
            "flex gap-2",
            msg.sender.id === activeConvData.participants.page.id
              ? "flex-row-reverse items-end"
              : "flex-row items-start"
          )}>
            <UserAvatar className={cn(
              "size-7",
              msg.sender.id === activeConvData.participants.page.id
                ? "hidden" : "flex"
            )}
              src={msg.sender.avatarUrl}
              alt={msg.sender.name?.slice(0, 2).toUpperCase()}
            />

            <p className={cn(
              "p-2 text-sm max-w-[75%] break-words  bg-muted/60 rounded-2xl",
              msg.sender.id === activeConvData.participants.page.id
                ? "rounded-tr-none self-end"
                : "rounded-tl-none self-start bg-muted/15"
            )}>{msg.text}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
