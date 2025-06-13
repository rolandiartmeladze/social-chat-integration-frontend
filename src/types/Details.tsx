"use client";
import { useAuth } from "@/app/auth/useAuth/useAuth";

export function useDetailsConfig() {
  const { user } = useAuth();

  return {
  General: [
    { label: "Status", icon: "progress", result: "In Progress" },
    { label: "Ticket/Conversation ID", icon: "ticket", result: "TG1789035" },
    { label: "Assignee", icon: "userAvatar", result: user?.displayName },
    { label: "Team Inbox", icon: "unassigned", result: "Unassigned" },
  ],
  Contact: [
    { label: "Name", icon: "userAvatar", result: "Alex Chachava" },
    { label: "E-Mail", icon: "mail", result: "user@example.com" },
    { label: "Phone", icon: "phone", result: "+995 599 123 456" },
    { label: "Social Handle", icon: "mention", result: "eidtsumnemlla" },
  ],
  Device: [
    { label: "IP Address", icon: "ip", result: "176.221.162.49" },
    { label: "Country", icon: "flag", result: "Georgia, Tbilisi" },
    { label: "Device", icon: "android", result: "Android" },
  ],
  Activity: [
    { label: "Last Login", icon: "clock", result: "Today, 11:00 AM" },
    { label: "Status", icon: "active", result: "Active" },
  ],
}
};
