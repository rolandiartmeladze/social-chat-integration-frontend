import axios from "axios";
import { Conversation } from "@/models/conversation.model";

export async function FetchConversations(): Promise<Conversation[] | null> {
    try {
        const Backend_Url = "https://false-vintage-flea.glitch.me";
        const response = await axios.get(`${Backend_Url}/messenger/conversations`);

        if (Array.isArray(response.data.conversations)) {
            console.log(response.data.conversations);
            return response.data.conversations;
        } else {
            console.error("Unexpected data format:", response.data);
            return null;
        }
    } catch (error) {
        console.error("Error fetching conversations:", error);
        return null;
    } finally {
        console.log("request end");
    }
}