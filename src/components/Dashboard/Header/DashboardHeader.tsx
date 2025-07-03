"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";

export default function DashboardHeader() {
    const navItems = [
        { href: "/user/messages", icon: <Icons.chat />, label: "Messages" },
        { href: "/users", icon: <Icons.chat />, label: "Staff" },
        { href: "/team/support", icon: <Icons.users />, label: "Support" },
        { href: "/create/task", icon: <Icons.settings />, label: "Create task" },
        { href: "/user/rating", icon: <Icons.settings />, label: "Rating" },
    ];

    return (
        <header className="col-start-2 bg-background flex  gap-1 items-center justify-end py-2 z-10 border-b px-5 pr-10">
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center border-l-2 border-t-2 rounded-tl-2xl gap-1 px-3 py-2 bg-secondary text-sm font-medium text-muted-foreground hover:bg-primary/30 hover:rounded-tl-md hover:text-foreground transition-all duration-300"
                    style={{
                        transform: "matrix(1, 0, -0.5, 1, 0, 0)",
                        borderColor: "var(--info)"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--danger)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--info)";
                    }}
                >
                    <div
                        style={{ transform: "matrix(1, 0, 0.5, 1, 0, 0)" }}
                        className="text-[color:var(--info)] group-hover:text-[color:var(--danger)] flex items-center gap-2"
                    >
                        {item.icon}
                        <span className="text-muted-foreground group-hover:text-foreground">{item.label}</span>
                    </div>

                </Link>
            ))}
        </header>
    );
}
