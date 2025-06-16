"use client";

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useConversation } from "@/context/ConversationContext";

let socket: Socket;

export function useSocket() {
  const { refreshConversations, activeConvId, refreshMessages } = useConversation();

  useEffect(() => {
    if (!socket) {
      socket = io(process.env.NEXT_PUBLIC_BACKEND_URL!, {
        withCredentials: true,
      });

      socket.on("connect", () => {
        console.log("✅ Connected to socket:", socket.id);
      });

      socket.on("conversationUpdated", async (data) => {
        console.log("🔁 conversationUpdated:", data);
        await refreshConversations();
        if (data.customId === activeConvId) {
          await refreshMessages(data.customId);
        }
      });

      socket.on("connect_error", (err) => {
        console.error("❌ Socket connection error:", err.message);
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
        console.log("🔌 Socket disconnected");
      }
    };
  }, [activeConvId]);

  useEffect(() => {
  const socket = io("https://false-vintage-flea.glitch.me", {
    withCredentials: true,
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("✅ Connected to socket.io", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("❌ Disconnected from socket.io");
  });

  socket.on("conversationUpdated", (data) => {
    console.log("📬 Conversation updated:", data);
  });

  return () => {
    socket.disconnect();
  };
}, []);

}
