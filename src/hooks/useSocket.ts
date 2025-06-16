import { useEffect } from "react";
import { io } from "socket.io-client";
import { useConversation } from "@/context/ConversationContext";

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL, {
  withCredentials: true,
});

export function useSocket() {
  const { refreshConversations, activeConvId, refreshMessages } = useConversation();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
    });

    socket.on("conversationUpdated", async (data) => {
      console.log("🔁 Conversation updated:", data);
      await refreshConversations();
      if (data.customId === activeConvId) {
        await refreshMessages(data.customId);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [activeConvId]);
}
