"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";

export default function DashboardHeader() {
  const navItems = [
    { href: "/dashboard", icon: <Icons.userAvatar />, label: "Dashboard" },
    { href: "/user/messages", icon: <Icons.chat />, label: "Messages" },
    { href: "/user/conversations", icon: <Icons.chat />, label: "Conversations" },
    { href: "/user/contacts", icon: <Icons.users />, label: "Contacts" },
    { href: "/settings", icon: <Icons.settings />, label: "Settings" },
  ];

  return (
    <header className="col-start-2 bg-background flex  gap-1 items-center py-2 z-10 border-b px-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 bg-secondary text-sm font-medium text-muted-foreground hover:bg-primary/30 hover:text-foreground transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
    </header>
  );
}
