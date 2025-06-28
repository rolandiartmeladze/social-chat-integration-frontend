"use client";

import { useAuth } from "@/app/auth/useAuth/useAuth";

import {
    ShieldCheckIcon,
    CalendarIcon,
    MapPinIcon,
} from "lucide-react";



export default function UserProfileDetails() {
    const { user } = useAuth();

    const profileFields = [
        {
            label: "Status",
            value: user?.status || "Inactive",
            icon: ShieldCheckIcon,
        },
        {
            label: "Location",
            value: "Tbilisi, Georgia",
            icon: MapPinIcon,
        },
        {
            label: "Joined",
            value: user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "Unknown",
            icon: CalendarIcon,
        },
    ];

    return (
        <div className="w-full max-w-xl space-y-2">
            {profileFields.map(({ label, value, icon: Icon }, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center gap-3 p-2 rounded-t-md border-b h-auto bg-muted/70"
                >
                    <Icon />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="text-sm text-muted-foreground">{label}:</span>
                        <span className="text-base font-medium text-foreground">{value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
