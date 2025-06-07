"use client";

import { useConversation } from "@/context/ConversationContext";
import { UserAvatar } from "../UserAvatar/avatar";

export default function ChatHeader() {
  const { activeConvData } = useConversation();
  console.log(activeConvData);

  if (!activeConvData?.participants) return <p>No participant found</p>;

  return (
    <div className="flex items-center w-full p-4 h-16 border-b">
      {activeConvData.participants.user &&
        <>
          <UserAvatar
            src={activeConvData?.participants.user.avatarUrl}
            alt={activeConvData?.participants.user.name?.slice(0, 2).toUpperCase()}
          />
          <h3 className="text-md font-medium">{activeConvData?.participants.user.name}</h3>
        </>
        }
    </div>
  );
}
