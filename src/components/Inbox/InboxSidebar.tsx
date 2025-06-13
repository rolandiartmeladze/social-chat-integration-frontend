import InboxHeader from "./InboxHeader";
import { Icons } from "@/components/icons";
import MyInbox from "./MyInbox";

export default function InboxSidebar() {

    return (
        <div className="w-72 mx-auto h-full">
            <InboxHeader>
                <h2 className="text-xl">Messages</h2>
                <div className="flex gap-2">
                    <samp className="bg-[#515151] flex items-center justify-center size-9 rounded-full p-2"><Icons.search className="size-4" /></samp>
                    <samp className="bg-[#515151] flex items-center justify-center size-9 rounded-full p-2"><Icons.add className="size-4" /></samp>
                </div>
            </InboxHeader>
            <div className="scroll h-[calc(100vh-200px)] overflow-y-auto">
                <MyInbox />
            </div>
        </div>
    )
}