import { Icons } from "../icons";
import { Command, CommandGroup, CommandList, CommandItem } from "../ui/command";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CommandMenu } from "@/types/CommandMenu";
import { useState } from "react";
export default function TeamInboxMenu() {
    const items: CommandMenu[] = [
        { icon: <Icons.chat />, label: "Chats", count: 75 },
        { icon: <Icons.mail />, label: "Mail", count: 122 },
        { icon: <Icons.comments />, label: "Comments", count: 75 },
        { icon: <Icons.ticket />, label: "Tickets", count: 12 },
    ]

    const [checkedItems, setCheckedItems] = useState(
        items.map(() => true)
    );

    const handleCheckboxChange = (index: number) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <Command className="p-2">
            <CommandList>
                <Accordion type="single" collapsible={true} defaultValue="views" className="p-2 space-y-2">
                    <AccordionItem value="team-inbox">
                        <AccordionTrigger className="text-lg px-2 py-1 hover:bg-secondary rounded-md">
                            Team Inbox
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-muted">accordion content</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="views">
                        <AccordionTrigger className="text-lg px-2 py-1 hover:bg-secondary rounded-md">
                            Views
                        </AccordionTrigger>
                        <AccordionContent>
                            <CommandGroup className="space-y-2">
                                {items.map((item, index) => (
                                    <CommandItem
                                        key={index}
                                        className="flex justify-between items-center px-2 py-1 rounded-md hover:bg-accent/10 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems[index]}
                                                onChange={() => handleCheckboxChange(index)}
                                                className="size-4 accent-foreground border border-border rounded focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                            />
                                            {item.icon}
                                            <span className="text-base font-medium">{item.label}</span>
                                        </div>
                                        <span className="text-sm text-muted">{item.count}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </CommandList>
        </Command>
    )
}