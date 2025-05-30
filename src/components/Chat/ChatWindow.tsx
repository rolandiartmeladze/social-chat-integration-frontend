export default function ChatWindow() {
    return (
        <div className="flex w-full h-screen">
            <div className="flex flex-col w-1/4 bg-gray-200 p-4">
                <h2 className="text-xl font-bold mb-4">Chat List</h2>
            </div>
            <div className="flex flex-col w-3/4 bg-white p-4">
                <h2 className="text-xl font-bold mb-4">Chat Window</h2>
            </div>
        </div>
    );
}
