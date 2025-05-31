import InboxList from "./InboxList";
import Messages from "../messages/messages";

export default function InboxContainer() {
    return (
        <div className="flex h-full flex-row bg-amber-600 border ">
            <Messages />
            <InboxList />
        </div>
    );
}
