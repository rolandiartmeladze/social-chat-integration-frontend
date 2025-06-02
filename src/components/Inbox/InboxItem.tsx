import { Conversation } from "@/models/conversation.model";
import { Avatar, AvatarImage } from "../ui/avatar";
interface ConversationProps {
    conv: Conversation;
}

export default function ConversationItem({ conv }: ConversationProps) {

    return (
        <li
            key={conv.id}
            className="p-3 flex gap-1 border-b-2"
        >
            <Avatar className="size-7">
                <AvatarImage src={conv.participants[0].avatarUrl} alt={conv.participants[0].name} className="w-6 h-6 rounded-full" />
            </Avatar>
            <div className="flex flex-col gap-2">

            
            <div className="text-lg">{conv.participants[0].name}</div>
            <p className="text-foreground">
                {conv.messages.length > 0 ? ` ${conv.messages[0].content}` : 'No messages yet'}
            </p>
            </div>
        </li>
    )
}
