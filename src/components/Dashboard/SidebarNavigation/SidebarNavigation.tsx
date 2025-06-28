"use client";

import { Card, CardContent } from "@/components/ui/card";
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
        <Card className="flex flex-col overflow-hidden p-1">
            <CardContent className="overflow-y-auto h-auto max-h-[220px] px-2 py-2 scroll">
                <div className="space-y-2">
                    {connectedPlatforms.map((platform) => (
                        <div
                            key={platform.id}
                            className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted hover:bg-muted/70 transition"
                        >
                            {platform.icon}
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">
                                    {platform.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
