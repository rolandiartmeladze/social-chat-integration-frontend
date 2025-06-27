"use client";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full h-full overflow-hidden rounded-2xl border-2">
      <aside className="row-span-2 w-[220px] bg-secondary-foreground text-foreground flex flex-col border-r">
        <div className="flex-1 overflow-y-auto p-4">Aside content</div>
        <div className="flex-1 overflow-y-auto p-4">Aside navigation</div>
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
