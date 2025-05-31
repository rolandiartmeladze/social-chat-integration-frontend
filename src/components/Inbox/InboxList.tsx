"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Conversation {
    conversationId: string;
    userName: string;
    pageName: string;
}

export default function InboxList() {
    const [conversations, setConversations] = useState<Conversation[]>([]);

  const fbConversations = async () => {
    try {
        const response = await axios.get("https://false-vintage-flea.glitch.me/messenger/conversations");
        console.log("Fetched:", response.data);
        setConversations(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


    useEffect(() => {
       const resp = async () =>  await fbConversations();
         resp();
    }, []);

    return (
            <div className="flex items-start p-9 border-y-emerald-700">
                Inbox
                <ul>
                    {conversations.map((con) => (
                        <li key={con.conversationId} className="flex items-center p-2 hover:bg-gray-100">
                            <div className="flex flex-col">
                                <span className="font-semibold">{con.userName}</span>
                                <span className="text-sm text-gray-500">{con.pageName}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    );
}
