"use client";

import { Icons } from "@/components/icons";
import ConversationItem from "./ConversationItem";

export default function ActivityCard() {
  const recentActivities = [
    { icon: <Icons.telegram />, label: "Telegram Group Chat", status: 'new', value: 376, time: '2 mins ago' },
    { icon: <Icons.instagram />, label: "Instagram DM - Support", status: 'pending', value: 12, time: '1 hour ago' },
    { icon: <Icons.facebook />, label: "Facebook Page - Query", status: 'done', value: 89, time: 'Yesterday' },
    { icon: <Icons.telegram />, label: "Telegram Bot - Inquiry", status: 'new', value: 5, time: '3 hours ago' },
    { icon: <Icons.chat1 />, label: "WhatsApp Client Chat", status: 'done', value: 210, time: '2 days ago' },
    { icon: <Icons.messenger />, label: "Messenger Chat - Sales", status: 'pending', value: 45, time: '4 hours ago' },
    { icon: <Icons.telegram />, label: "Telegram Broadcast", status: 'done', value: 678, time: 'Last week' },
    { icon: <Icons.instagram />, label: "Instagram Story Reply", status: 'new', value: 1, time: 'Now' },
    { icon: <Icons.facebook />, label: "Facebook Ad Comments", status: 'pending', value: 15, time: '5 hours ago' },
  ];

  return (
    <div className="flex flex-1 min-h-0 flex-col gap-1 overflow-y-auto p-1 pr-2 scroll">
      {recentActivities.map((activity, index) => (
        <ConversationItem
          key={index}
          icon={activity.icon}
          label={activity.label}
          status={activity.status}
          value={activity.value}
          time={activity.time}
        />
      ))}
    </div>
  );
}