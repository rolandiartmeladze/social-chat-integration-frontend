"use client";
import { useSocketEvents } from "@/hooks/useSocketEvents";

export default function SocketWrapper() {
  useSocketEvents();
  return null;
}
