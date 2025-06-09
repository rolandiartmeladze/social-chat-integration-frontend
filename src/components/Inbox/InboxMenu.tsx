import { Command, CommandGroup, CommandList, CommandItem, CommandSeparator } from "../ui/command";
import { CommandMenu } from "@/types/CommandMenu";

type InboxCommandMenuProps = {
    items: CommandMenu[];
};

export default function InboxMenu({ items }: InboxCommandMenuProps) {

    return (
        <Command className="p-2">
            <CommandList>
                <CommandGroup>
                    {items.map((item, index) => (
                        <CommandItem className="flex justify-between items-center text-lg font-xl" key={index} >
                            <div className="flex gap-3">
                                {item.icon}
                                <samp>{item.label}</samp>
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