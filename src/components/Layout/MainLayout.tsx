import SidebarWrapper from "@/components/Layout/SidebarWrapper";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import Sidebar from "@/components/Layout/SidebarWrapper";
import Topbar from "@/components/Layout/Topbar";
import InboxContainer from "../Inbox/InboxContainer";
// import ChatWindow from "../Chat/ChatWindow";
// import DetailsPanel from "../DetailsPanel/DetailsPanel";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-background text-foreground">
              {/* <SidebarProvider> */}
      <SidebarWrapper />
      <div className="flex flex-col flex-1">
         <Topbar />
        <div className="flex flex-1 overflow-hidden">
          <InboxContainer />
       {/*   <ChatWindow />
          <DetailsPanel /> */}
        </div> 
        this is the main content area
      </div>
      {/* </SidebarProvider> */}
    </div>
  );
}
