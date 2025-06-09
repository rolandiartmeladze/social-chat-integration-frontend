"use client";

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { UserAvatar } from "../UserAvatar/avatar"
import { Icons } from "@/components/icons"

export default function MyInboxCommand() {

    return (
        <div className="p-2">
            <Command className="h-full">
                <CommandList>
                    <CommandGroup>
                        {[
                            {
                                icon: <UserAvatar
                                    className="size-5"
                                    src="https://avatars.githubusercontent.com/u/13499054?v=4"
                                    alt="My_Inbox"
                                />,
                                label: "My Inbox",
                                count: 4,
                                customIcon: true,
                            },
                            { icon: <Icons.users />, label: "All", count: 5 },
                            { icon: <Icons.clock />, label: "Unassigned", count: 4 },
                            { icon: <Icons.mention />, label: "Mentions", count: 0 },
                            { icon: <Icons.pencil />, label: "My Outbox", count: 0 },
                            { icon: <Icons.check />, label: "All Resolved", count: 4 },
                        ].map(({ icon, label, count, customIcon }, i) => (
                            <CommandItem
                                key={i}
                                className="flex justify-between items-center"
                            >
                                <div className="flex items-center gap-2 cursor-pointer">
                                    {customIcon ? icon : icon}
                                    <samp>{label}</samp>
                                </div>
                                <samp>{count}</samp>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </Command>
        </div>
    )
}