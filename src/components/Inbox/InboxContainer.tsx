import InboxList from "./InboxList";
import Messages from "../messages/messages";

export default function InboxContainer() {
    return (
        <div className="flex flex-row h-full rounded-2xl bg-secondary">
            <Messages />
            <InboxList />
        </div>
    );
}
