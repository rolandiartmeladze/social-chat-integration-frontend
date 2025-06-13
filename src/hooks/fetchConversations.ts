import axios from "axios";
import { Conv } from "@/models/conversation.model";

export async function FetchConversations(): Promise<Conv[] | null> {
    try {
    const Backend_Url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await axios.get(`${Backend_Url}/conversations`);

    const rawConvs = response.data.conversations;
      console.log(rawConvs);
    
    return rawConvs;
    } catch (error) {
        console.error("Error fetching conversations:", error);
        return null;
    } finally {
        console.log("request end");
    }
}