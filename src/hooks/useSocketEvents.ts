"use client";
import { useEffect } from "react";
import { getSocket } from "@/lib/socket";
import { useConversation } from "@/context/ConversationContext";
import { Conv } from "@/models/conversation.model";

export function useSocketEvents() {
  const { refreshConversations, activeConvId, refreshMessages } = useConversation();

  useEffect(() => {
    const socket = getSocket();

    const onUpdate = async (data: Conv) => {
      console.log("🔁 conversationUpdated:", data);
      await refreshConversations();
      if (data.customId === activeConvId) {
        await refreshMessages(data.customId);
      }
    };

    socket.on("conversationUpdated", onUpdate);

    return () => {
      socket.off("conversationUpdated", onUpdate);
    };
  }, [activeConvId]);
}
