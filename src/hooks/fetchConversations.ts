import { Conv } from "@/models/conversation.model";
import { axiosInstance } from "./axiosInstance";

export async function FetchConversations(): Promise<Conv[] | null> {
  try {
    const response = await axiosInstance.get<Conv[]>(`/conversations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return null;
  }
}
