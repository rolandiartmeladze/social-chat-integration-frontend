import SidebarWrapper from "@/components/Layout/SidebarWrapper";
import { SidebarProvider } from "@/components/ui/sidebar";
import Topbar from "@/components/Layout/Topbar";
import InboxContainer from "../Inbox/InboxContainer";
import ChatWindow from "../Chat/ChatWindow";
import DetailsSection from "../DetailsPanel/DetailsSection";
import { ConversationProvider } from '@/context/ConversationContext';

export default function MainLayout() {
  return (
    <div className="flex h-screen relative bg-background text-foreground overflow-hidden">
      <SidebarProvider>
        <SidebarWrapper />
        <div className="flex flex-col relative w-full h-full">
          <Topbar />
          <ConversationProvider>
            <div className="grid gap-2 p-2 grid-cols-[auto_1fr_auto] h-full overflow-auto">
              <InboxContainer />
              <ChatWindow />
              <DetailsSection />
            </div>
          </ConversationProvider>
        </div>
      </SidebarProvider>
    </div>
  );
}

