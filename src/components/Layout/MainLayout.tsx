import SidebarWrapper from "@/components/Layout/SidebarWrapper";
import { SidebarProvider } from "@/components/ui/sidebar";
import Topbar from "@/components/Layout/Topbar";
import InboxContainer from "../Inbox/InboxContainer";
import ChatWindow from "../Chat/ChatWindow";
import DetailsSection from "../DetailsPanel/DetailsSection";

export default function MainLayout() {
  return (
    <div className="flex bg-background h-screen text-foreground overflow-hidden">
      <SidebarProvider>
        <SidebarWrapper />
        <div className="flex pb-3 flex-col w-full h-full">
          <Topbar />
          <div className="grid min-h-dvh gap-2 p-3 grid-cols-[auto_1fr_auto]">
            <InboxContainer />
            <ChatWindow />
            <DetailsSection />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

