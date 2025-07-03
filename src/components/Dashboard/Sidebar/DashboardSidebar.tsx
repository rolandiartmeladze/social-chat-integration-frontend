"use client";

import UserProfile from "@/components/Dashboard/UserProfile/UserProfile";
import AddIntegratonButton from "@/components/Dashboard/AddIntegrationButton";
import SidebarNavigation from "@/components/Dashboard/SidebarNavigation/SidebarNavigation";


export default function DashboardSidebar() {
    return (
        <aside className="row-span-2 p-4 w-auto max-w-lg bg-background/50 text-foreground flex flex-col border-r gap-3">
            <UserProfile />
            <SidebarNavigation />
            <AddIntegratonButton
                variant="secondary"
                className="bg-primary/60 hover:bg-primary/20"
            />
        </aside>
    )
}