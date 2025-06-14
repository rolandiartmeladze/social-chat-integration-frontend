import { useEffect } from "react";
import { io } from "socket.io-client";
import { Message } from "@/models/conversation.model";

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL!, {
  withCredentials: true,
});

export function useSocket(onNewMessage: (msg: Message) => void) {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("🟢 Connected to socket.io:", socket.id);
    });

    socket.on("new_message", (message: Message) => {
      console.log("📩 New message received:", message);
      onNewMessage(message); 
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    return () => {
      socket.off("new_message");
      socket.disconnect();
    };
  }, [onNewMessage]);
}
