import { Conversation } from "@/models/conversation.model";
import { UserAvatar } from "../UserAvatar/avatar";

interface ConversationProps {
    conv: Conversation;
    isActive: boolean;
    onClick: () => void;
}

export default function ConversationItem({ conv, onClick, isActive }: ConversationProps) {
    return (
        <li
            key={conv.id}
            className={`p-3 flex gap-1 border-b cursor-pointer hover:bg-muted hover:border hover:rounded-2xl 
                ${isActive ?
                     'bg-muted/20 border duration-300 transition-all rounded-2xl font-semibold'
                    : 'hover:bg-muted/70'}`}
            onClick={onClick}

        >

            <UserAvatar src={conv.participants[0].avatarUrl} alt={conv.participants[0].name} />
            <div className="flex flex-col gap-1">
                <h3 className="text-base">{conv.participants[0].name}</h3>
                <p className="text-foreground text-sm">{conv.messages[0].text.substring(0, 25)}
                </p>
            </div>
        </li>
    )
}
