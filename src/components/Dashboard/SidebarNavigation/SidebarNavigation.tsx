"use client";

import { Icons } from "@/components/icons";

export default function SidebarNavigation() {
    const connectedPlatforms = [
        {
            id: "1",
            name: "Telegram",
            icon: <Icons.telegram className="size-5 text-blue-500" />,
        },
        {
            id: "2",
            name: "Messenger",
            icon: <Icons.messenger className="size-5 text-blue-600" />,
        },
        {
            id: "3",
            name: "Instagram",
            icon: <Icons.instagram className="size-5 text-pink-500" />,
        },
    ];

    return (
        <div className="flex flex-col overflow-hidden p-1">
            <h1 className="p-1 pl-2 text-lg rounded-t-lg font-black bg-primary">
                Connected Platforms:
            </h1>
            <ul className="space-y-2 border border-t-0 p-4 rounded-xl rounded-t-none bg-background">
                {connectedPlatforms.map((platform) => (
                    <li
                        key={platform.id}
                        className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/40 cursor-pointer transition"
                    >
                        {platform.icon}
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">
                                {platform.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
