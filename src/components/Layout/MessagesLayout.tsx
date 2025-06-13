"use client";

import InboxContainer from "../Inbox/InboxContainer";
import ChatWindow from "../Chat/ChatWindow";
import DetailsPanel from "../DetailsPanel/DetailsPanel";

export default function MessagesLayout() {
  return (
    <div className="grid gap-2 p-2 w-full grid-cols-[auto_1fr_auto] h-full overflow-auto">
      <InboxContainer />
      <ChatWindow />
      <DetailsPanel />
    </div>
  );
}

