import ChatMessages from "./ChatMessage";

export default function ChatWindow() {
    return (
        <div className="flex h-full bg-secondary rounded-2xl p-7">
                <ChatMessages />
        </div>
    );
}
