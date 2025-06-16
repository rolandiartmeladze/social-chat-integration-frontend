"use client";

export async function OpenConversation({ activeConvId }: { activeConvId: string }) {
  const Backend_Url = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!Backend_Url) {
    throw new Error("Backend URL is not defined");
  }

  const response = await fetch(`${Backend_Url}/conversations/${activeConvId}/messages`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch conversation: ${response.status}`);
  }

  const data = await response.json();
  return { data };
}
