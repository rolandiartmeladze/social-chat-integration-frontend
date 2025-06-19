"use client";

import { axiosInstance } from "./axiosInstance";
export async function OpenConversation({ activeConvId }: { activeConvId: string }) {
  try {
    const response = await axiosInstance.get(`/conversations/${activeConvId}/messages`);
    return { data: response.data };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
