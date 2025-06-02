import axios from "axios";
import { Conversation, Message, User } from "@/models/conversation.model";

export async function FetchConversations(): Promise<Conversation[] | null> {
    try {
    const Backend_Url = "https://false-vintage-flea.glitch.me";
    const response = await axios.get(`${Backend_Url}/messenger/conversations`);

    const rawConvs = response.data.conversations;

    if (!Array.isArray(rawConvs)) {
      console.error("Unexpected response format:", rawConvs);
      return null;
    }

    const conversations: Conversation[] = rawConvs.map((conv) => {
      const user: User = {
        id: conv.conversationId,
        name: conv.user,
        avatarUrl: conv.avatar,
      };

      const page: User = {
        id: conv.conversationId + "_page",
        name: conv.page,
        avatarUrl: "",
      };

      const lastMsg: Message = {
        id: conv.conversationId + "_msg",
        sender: user,
        content: conv.lastMessage,
        timestamp: new Date().toISOString(),
        read: true,
      };

      return {
        id: conv.conversationId,
        participants: [user, page],
        messages: [lastMsg],
        lastUpdated: new Date().toISOString(),
        unreadCount: 0,
      };
    });

    return conversations;
    } catch (error) {
        console.error("Error fetching conversations:", error);
        return null;
    } finally {
        console.log("request end");
    }
}