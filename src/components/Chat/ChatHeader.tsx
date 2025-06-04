"use client";

import { useConversation } from "@/context/ConversationContext";
import { UserAvatar } from "../UserAvatar/avatar";
import { User } from "@/models/conversation.model";

export default function ChatHeader() {
  const { activeConvData } = useConversation();
console.log(activeConvData);
  const participant:User | undefined = activeConvData?.participants[1];

  if (!participant) return <p>No participant found</p>;

  return (
    <div className="flex items-center w-full p-4 h-16 border-b">
      <UserAvatar 
      src={participant.avatarUrl} 
      alt={participant.name?.slice(0, 2).toUpperCase()} 
      />
      <h3 className="text-md font-medium">{participant.name}</h3>
    </div>
  );
}
