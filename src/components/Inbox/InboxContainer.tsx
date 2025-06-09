import InboxList from "./InboxList";
import InboxSidebar from "./InboxSidebar";

export default function InboxContainer() {
    return (
        <div className="flex flex-row h-full rounded-2xl bg-secondary">
            <InboxSidebar />
            <InboxList />
        </div>
    );
}
