import { Icons } from "../icons"
export default function SortConversations() {
    return (
        <div className="p-3 text-2xl flex justify-between">
            <div className="flex gap-2 items-center">
                <samp>4 Open</samp><samp><Icons.arrowDown /></samp>
            </div>
            <div className="flex gap-2 items-center">
                <samp>Newest</samp><samp><Icons.arrowDown /></samp>
            </div>
        </div>
    );
};