import axios from "axios";
import { Conv } from "@/models/conversation.model";

export async function FetchConversations(): Promise<Conv[] | null> {
  try {
    const Backend_Url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await axios.get<Conv[]>(`${Backend_Url}/conversations`);
    console.log("Fetched conversations:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return null;
  }
}
