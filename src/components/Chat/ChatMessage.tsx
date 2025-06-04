"use client";

import { useConversation } from "@/context/ConversationContext";
import { Message } from "@/models/conversation.model";
import { ScrollArea } from "../ui/scroll-area";
import { UserAvatar } from "../UserAvatar/avatar";

export default function ChatMessages() {
  const { activeConvData } = useConversation();
  console.log(activeConvData);

  if (!activeConvData) return <p>No participant found</p>;

  return (
    <ScrollArea className="h-full px-4 py-2">
      <ul className="flex flex-col gap-3">
        {activeConvData.messages?.messages?.map((msg: Message, index: number) => (
          <li key={index} className="flex gap-2 items-start bg-accent/30 p-2 rounded">
            <UserAvatar
              src={msg.sender.avatarUrl}
              alt={msg.sender.name?.slice(0, 2).toUpperCase()}
            />

            <p className="text-sm">{msg.text}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
