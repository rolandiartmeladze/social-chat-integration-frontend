"use client";

import { useConversation } from "@/context/ConversationContext";
import { UserAvatar } from "../UserAvatar/avatar";
import { Icons } from "@/components/icons";

export default function ChatHeader() {
  const { activeConvData } = useConversation();
  const PlatformIcon = Icons[activeConvData?.platform as keyof typeof Icons];
  if (!activeConvData?.participants) return <p>No participant found</p>;
  const iconButtons = [
    { Icon: Icons.star, label: "Star" },
    { Icon: Icons.ellipsis, label: "More Options" },
    { Icon: Icons.pause, label: "Pause" },
    { Icon: Icons.inBox, label: "Inbox" },
  ];
  return (
    <div className="flex items-center justify-between w-full p-4 h-16 border-b">
      <div className="flex gap-4">
        <UserAvatar className="size-8"
          src={activeConvData?.participants.user.avatarUrl || ""}
          alt={activeConvData?.participants.user.name?.slice(0, 2).toUpperCase()}
        />
        <div className="flex flex-col">
          <h3 className="text-xl font-xl">{activeConvData?.participants.user.name || "User Is Unknown"}</h3>
          <div className="flex gap-1 items-center">
            <PlatformIcon className="size-5" />
            <samp className="text-base font-base">{activeConvData?.platform}</samp>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        {iconButtons.map(({ Icon, label }, index) => (
          <span
            key={index}
            className="bg-[#515151] flex items-center justify-center size-9 rounded-full p-2"
            title={label}
          >
            <Icon className="size-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
