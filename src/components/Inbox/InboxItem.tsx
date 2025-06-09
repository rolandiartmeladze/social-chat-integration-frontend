import { UserAvatar } from "../UserAvatar/avatar";
import { Conv } from "@/models/conversation.model";
import { Icons } from "../icons";
import { getTimeAgo } from "@/hooks/getTimeAgo";
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
  className={`flex items-center justify-between gap-4 p-3 border-b transition-all cursor-pointer
    ${isActive ? "bg-accent border rounded-lg" : "hover:bg-accent"}`}
  onClick={onClick}
>
  <div className="flex items-start gap-3 max-w-[80%]">
    <div className="relative">
      <UserAvatar
        className="size-8"
        src={conv?.participants?.user?.avatarUrl}
        alt={conv?.participants?.user?.name}
      />
      {PlatformIcon && (
        <div className="absolute -bottom-1 -right-1 rounded-full p-0.5 bg-white">
          <PlatformIcon className="size-3" />
        </div>
      )}
    </div>

    <div className="flex flex-col justify-center gap-1 overflow-hidden">
      <h3 className="text-base font-lg text-foreground truncate">
        {conv?.participants?.user?.name}
      </h3>
      <p className="text-sm text-muted-foreground truncate">
        {conv?.messages[0]?.text?.substr(0, 40) || "No messages yet."}
      </p>
    </div>
  </div>

  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground whitespace-nowrap">
    {isActive && <Icons.ellipsis className="mb-1 cursor-pointer hover:bg-background" />}
    <samp>{getTimeAgo(conv.lastUpdated)}</samp>
  </div>
</li>

  );
}
