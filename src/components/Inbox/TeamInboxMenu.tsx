import { Icons } from "../icons";
import { Command, CommandGroup, CommandList, CommandItem } from "../ui/command";
import { CommandMenu } from "@/types/CommandMenu";
import { useState } from "react";
export default function TeamInboxMenu() {
    const items: CommandMenu[] = [
        { icon: <Icons.chat className="size-5" />, label: "Chats", count: 75 },
        { icon: <Icons.mail />, label: "Mail", count: 122 },
        { icon: <Icons.comments />, label: "Comments", count: 75 },
        { icon: <Icons.ticket />, label: "Tickets", count: 12 },
    ]

    const [checked, setChecked] = useState(true);
    return (
        <Command className="p-2">
            <CommandList>
                <CommandItem className="flex text-lg font-xl justify-between">
                    <samp>Team Inbox</samp> <Icons.arrowDown />
                </CommandItem>
                <CommandItem className="flex text-lg font-xl px-3 justify-between items-center">
                    <samp>Views</samp> <Icons.arrowUp />
                </CommandItem>
                <CommandGroup>
                    {items.map((item, index) => (
                        <CommandItem className="flex justify-between items-center text-lg font-xl" key={index} >
                            <div className="flex gap-3 items-center">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(e) => setChecked(e.target.checked)} className="size-5 accent-foreground border-2 border-gray-300 rounded focus:ring-2 focus:ring-offset-2 focus:ring-primary" />
                                {item.icon}
                                <samp className="text-base font-lg">{item.label}</samp>
                            </div>
                            <samp>{item.count}</samp>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}