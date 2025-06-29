"use client";

import UserProfile from "./UserProfile/UserProfile";
import AddIntegratonButton from "./AddIntegrationButton";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full h-full overflow-hidden rounded-2xl border-3 dashboard-shadow">      
    <aside className="row-span-2 p-4 w-auto max-w-lg bg-background/50 text-foreground flex flex-col border-r gap-3">
      <UserProfile />
      <SidebarNavigation />
      <AddIntegratonButton
        variant="secondary"
        className="bg-primary/60 hover:bg-primary/20"
      />
    </aside>
      <header className="col-start-2 bg-secondary-foreground flex items-center p-6 z-10">
        <h1 className="text-xl font-bold text-foreground">Dashboard Header</h1>
      </header>
      <main className="col-start-2 overflow-y-auto bg-background p-6">
        <div className="flex-1 overflow-y-auto p-4">Main content</div>
      </main>
    </div>
  );
}
