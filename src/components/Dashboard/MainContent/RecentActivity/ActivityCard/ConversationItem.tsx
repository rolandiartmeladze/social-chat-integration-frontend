import React from 'react';
import { cn } from "@/lib/utils";

export type ConversationStatus = 'new' | 'pending' | 'done';

export interface ActivityItem {
  icon: React.ReactNode;
  label: string;
  status: ConversationStatus | string;
  value: number;
  time?: string;
}

export default function ConversationItem({ icon, label, value, status, time }: ActivityItem) {
    const statusClasses = cn(
        "px-2 py-0.5 rounded-full text-xs font-semibold",
        {
            "bg-green-100 text-green-700": status === 'done',
            "bg-blue-100 text-blue-700": status === 'new',
            "bg-yellow-100 text-yellow-700": status === 'pending',
        }
    );

    return (
        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary shadow-sm hover:bg-accent transition-colors cursor-pointer">
            <div className="flex items-center gap-3 flex-grow">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground text-secondary shrink-0">
                    {icon}
                </div>
                <span className="text-sm font-medium text-foreground truncate">{label}</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted/70 shrink-0">
                <span className={statusClasses}>{status.toUpperCase()}</span>
                <span className="font-semibold text-foreground">{value}</span>
                <samp>{status}</samp>
                {time && <span className="text-xs muted">{time}</span>}
            </div>
        </div>
    );
}