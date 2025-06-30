"use client";

import { Icons } from "@/components/icons"

export default function ActivityHeader() {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">Recent Activity</h1>
            <ul className="flex gap-2 mt-2">
                <li className="flex items-center gap-1 rounded-md bg-muted/20 px-3 py-1 text-sm text-muted-foreground">
                    <Icons.settings className="size-4" />
                    {"Meleger"}
                </li>
                <li className="flex items-center gap-1 rounded-md bg-muted/20 px-3 py-1 text-sm text-muted-foreground">
                    <Icons.users className="size-4" />
                    {"0"}
                </li>
                <li className="flex items-center gap-1 rounded-md bg-muted/20 px-3 py-1 text-sm text-muted-foreground">
                    <Icons.userAvatar className="size-4" />
                    {"Alchey"}
                </li>
            </ul>
        </div>

    )
}