"use client";

import { useConversation } from "@/context/ConversationContext";
import { Message } from "@/models/conversation.model";
import { UserAvatar } from "../UserAvatar/avatar";
import { cn } from "@/lib/utils";
import { getTimeAgo } from "@/hooks/getTimeAgo";

export default function ChatMessages() {
  const { activeConvData } = useConversation();
  if (!activeConvData) return <p>No participant found</p>;
console.log(activeConvData);
  return (
    <div className="scroll h-[calc(100vh-200px)] overflow-y-auto flex flex-col-reverse px-4" >
      <ul className="flex flex-col-reverse gap-3 py-2">
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

            <div className={cn(
              "flex flex-col p-2 text-sm w-auto max-w-[75%] break-words rounded-2xl",
              msg.sender.id === activeConvData.participants.page.id
                ? "rounded-tr-none items-end bg-[#4E4E4E]"
                : "rounded-tl-none items-start bg-muted/30"
            )}><p>{msg.text}</p> <samp className="text-secondary-foreground">{getTimeAgo(msg.timestamp)}</samp>
</div>
          </li>
        ))}
      </ul>
</div>  );
}
