import { Icons } from "../icons";
import { Command, CommandGroup, CommandList, CommandItem, CommandSeparator } from "../ui/command";
import { CommandMenu } from "@/types/CommandMenu";
import { UserAvatar } from "../UserAvatar/avatar";

export default function InboxMenu() {
    const items: CommandMenu[] = [
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
        <Command className="p-2">
            <CommandList>
                <CommandGroup>
                    {items.map((item, index) => (
                        <CommandItem className="flex justify-between items-center text-lg font-xl" key={index} >
                            <div className="flex gap-3 items-center">
                                {item.icon}
                                <samp className="text-base font-lg">{item.label}</samp>
                            </div>
                            <samp>{item.count}</samp>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
            <CommandSeparator />
        </Command>
    )
}