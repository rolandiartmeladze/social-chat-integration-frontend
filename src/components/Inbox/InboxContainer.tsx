import InboxList from "./InboxList";
import Messages from "../messages/messages";

export default function InboxContainer() {
    return (
        <div className="flex h-full flex-row rounded-2xl bg-secondary">
            <Messages />
            <InboxList />
        </div>
    );
}
