import { UserAvatar } from "../UserAvatar/avatar";
import { Conv } from "@/models/conversation.model";
import { Icons } from "../icons";

interface ConversationProps {
  conv: Conv;
  isActive: boolean;
  onClick: () => void;
}

export default function ConversationItem({ conv, onClick, isActive }: ConversationProps) {
  const PlatformIcon = Icons[conv.platform as keyof typeof Icons];
  return (
    <li
      key={conv.conversationId}
      className={`p-3 flex items-center gap-3 border-b cursor-pointer transition-all 
        ${isActive
          ? "bg-muted/20 border rounded-2xl font-semibold"
          : "hover:bg-muted hover:border hover:rounded-2xl"}`}
      onClick={onClick}
    >
      <div className="relative">
        <UserAvatar src={conv?.participants?.user?.avatarUrl} alt={conv?.participants?.user.name} />
        {PlatformIcon && (
          <div className="absolute bottom-0 right-1 rounded-full p-0.5">
            <PlatformIcon className="size-3" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-base font-xl">{conv?.participants?.user?.name}</h3>
        <p className="text-base font-basic text-muted-foreground max-w-full">
          {conv?.messages[0]?.text || "No messages yet."}
        </p>
      </div>
    </li>
  );
}
