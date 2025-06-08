import InboxList from "./InboxList";
import InBoxSidebar from "./InBoxSidebar";

export default function InboxContainer() {
    return (
        <div className="flex flex-row h-full rounded-2xl bg-secondary">
            <InBoxSidebar />
            <InboxList />
        </div>
    );
}
