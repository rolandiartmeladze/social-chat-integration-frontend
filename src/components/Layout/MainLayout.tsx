import SidebarWrapper from "@/components/Layout/SidebarWrapper";
import { SidebarProvider } from "@/components/ui/sidebar";
import Topbar from "@/components/Layout/Topbar";
import InboxContainer from "../Inbox/InboxContainer";
import ChatWindow from "../Chat/ChatWindow";
import DetailsPanel from "../DetailsPanel/DetailsPanel";

export default function MainLayout() {
  return (
    <div className="flex bg-green-800 h-screen text-foreground overflow-hidden">
      <SidebarProvider>
        <SidebarWrapper />

        <div className="flex flex-col w-full h-full bg-red-700">
          {/* Topbar */}
          <Topbar />

          <div className="grid min-h-dvh grid-cols-[auto_1fr_auto]">
            <div className="overflow-auto"><InboxContainer /></div>
            <div className="overflow-auto"><ChatWindow /></div>
            <div className="overflow-auto"><DetailsPanel /></div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

