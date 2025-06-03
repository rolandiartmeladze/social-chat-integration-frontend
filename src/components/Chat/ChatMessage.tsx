"use client";

import { useConversation } from "@/context/ConversationContext";
import { Message } from "@/models/conversation.model";
import { ScrollArea } from "../ui/scroll-area";

export default function ChatMessages() {
    const { activeConvData } = useConversation();
    console.log(activeConvData);
    if (!activeConvData) return <p>need selecte conversation</p>;
    return (
        <div className="flex flex-col gap-3 w-full  bg-muted/20">

            <h1 className="w-full">
                Chat Messages
            </h1>
            <ScrollArea>
                <ul className="flex flex-col gap-2">
                    {activeConvData.messages?.map((msg: Message, index: number) => (
                        <li className="text-sm mt-2 bg-accent border-b" key={index}>{msg?.text}</li>
                    ))}
                </ul>
            </ScrollArea>
        </div>
    );
}
