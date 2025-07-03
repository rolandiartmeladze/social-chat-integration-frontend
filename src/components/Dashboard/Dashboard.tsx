"use client";
import MainContetn from "./MainContent/MainContent";
import DashboardSidebar from "./Sidebar/DashboardSidebar";
import DashboardHeader from "./Header/DashboardHeader";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full h-full overflow-hidden rounded-2xl border-3 dashboard-shadow">
      <DashboardSidebar />
      <DashboardHeader />
      <MainContetn />
    </div>
  );
}
