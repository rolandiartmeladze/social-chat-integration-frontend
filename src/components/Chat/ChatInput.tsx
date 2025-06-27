"use client";

import axios from "axios";
import { useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useConversation } from "@/context/ConversationContext";

export default function ChatInput() {
  const { activeConvData } = useConversation();
  const [textMessage, setTextMessage] = useState("");

  if (!activeConvData) return <p>Need to select a conversation</p>;

  const recipientId = activeConvData.participants.user.id;
  const platform = activeConvData.platform;

  const sendMessage = async () => {
    if (!textMessage.trim()) return;

    try {
      const url =
        platform === "telegram"
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/telegram/send`
          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/messenger/send`;

      await axios.post(url, {
        recipientId: recipientId,
        text: textMessage,
      });

      setTextMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("შეტყობინების გაგზავნა ვერ მოხერხდა.");
    }
  };


  return (
    <div className="flex w-full py-1 px-3 gap-2 items-center bg-accent border-t-2">
      <Icons.add className="size-9" />
      <Input
        className="border-none outline-none"
        placeholder="Write your message..."
        value={textMessage}
        onChange={(e) => setTextMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <div className="flex gap-1 items-center">
        <Icons.smile />
        <Button
          onClick={sendMessage}
          className="bg-muted cursor-pointer rounded-sm text-foreground"
          variant="secondary"
          size="sm"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
