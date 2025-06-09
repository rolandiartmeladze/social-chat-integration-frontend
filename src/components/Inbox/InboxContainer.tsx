import InboxList from "./InboxList";
import InboxSidebar from "./InboxSidebar";

export default function InboxContainer() {
    return (
        <div className="flex flex-row h-full rounded-sm bg-secondary">
            <InboxSidebar />
            <InboxList />
        </div>
    );
}
