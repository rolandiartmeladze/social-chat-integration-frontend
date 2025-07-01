"use client";
import MainContetn from "./MainContent/MainContent";
import DashboardSidebar from "./Sidebar/DashboardSidebar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full h-full overflow-hidden rounded-2xl border-3 dashboard-shadow">
      <DashboardSidebar />
      <header className="col-start-2 bg-background flex items-center h-20 z-10 border-b">
        <h1>
          header
        </h1>
      </header>
      <MainContetn />
    </div>
  );
}
