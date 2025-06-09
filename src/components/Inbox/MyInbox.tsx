"use client";

import { UserAvatar } from "../UserAvatar/avatar";
import { Icons } from "@/components/icons"
import InboxMenu from "./InboxMenu";

export default function MyInbox() {
const items = [
    {
      icon: <UserAvatar className="size-5" src="https://avatars.githubusercontent.com/u/13499054?v=4" alt="My_Inbox" />,
      label: "My Inbox",
      count: 4,
    },
    { icon: <Icons.users />, label: "All", count: 5 },
    { icon: <Icons.clock />, label: "Unassigned", count: 4 },
    { icon: <Icons.mention />, label: "Mentions", count: 0 },
    { icon: <Icons.pencil />, label: "My Outbox", count: 0 },
    { icon: <Icons.check />, label: "All Resolved", count: 4 },
  ]
    return (
        <div className="p-2">
            <InboxMenu items={items} />
        </div>
    )
}