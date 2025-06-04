import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessage";

export default function ChatWindow() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] max-h-full bg-secondary rounded-2xl overflow-hidden">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
