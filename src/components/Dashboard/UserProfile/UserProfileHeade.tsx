"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/app/auth/useAuth/useAuth";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function UserProfileHeader() {
    const { user } = useAuth();

    return (
        <div className="w-full flex items-center justify-between mb-6 flex-wrap gap-4 p-2 px-4 border-b rounded-b-xl">
            <div className="flex items-center gap-4">
                <Avatar className="size-12">
                    <AvatarImage src={user?.avatarUrl} className="rounded-lg" />
                    <AvatarFallback className="text-lg rounded-lg">
                        {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold text-foreground">
                        {user?.name || "User Name"}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {user?.email || "user@example.com"}
                    </p>
                </div>
            </div>

            <Button
                asChild
                variant="secondary"
                size="icon"
                className="relative text-foreground bg-background hover:bg-primary"
            >
                <Link href="/dashboard/profile/edit">
                    <Icons.pencil className="size-5 sm:size-6" />
                </Link>
            </Button>
        </div>
    );
}
