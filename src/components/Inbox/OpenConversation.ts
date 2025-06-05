"use client";

export async function OpenConversation({ activeConvId }: { activeConvId: string }) {
    const Backend_Url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await fetch(`${Backend_Url}/messenger/conversation/${activeConvId}`);
    const data = await response.json();
    return { data };
};
