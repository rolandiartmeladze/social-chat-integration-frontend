"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { OpenConversation } from "@/hooks/openConversation";
import { FetchConversations } from "@/hooks/fetchConversations";
import { Conversation, Conv } from "@/models/conversation.model";

interface ConversationContextType {
  activeConvId: string | null;
  setActiveConvId: (id: string) => void;
  activeConvData: Conversation | null;
  allConversations: Conv[];
  refreshConversations: () => Promise<void>;
  refreshMessages: (convId: string) => Promise<void>;
  isFetchingAllConversations: boolean;
  isFetchingActiveConversation: boolean;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [activeConvData, setActiveConvData] = useState<Conversation | null>(null);
  const [allConversations, setAllConversations] = useState<Conv[]>([]);

  const [isFetchingAllConversations, setIsFetchingAllConversations] = useState<boolean>(false);
  const [isFetchingActiveConversation, setIsFetchingActiveConversation] = useState<boolean>(false);

  const handleSetActiveConvId = (id: string) => {
    setActiveConvId(id);
  };

  const refreshConversations = async () => {
    setIsFetchingAllConversations(true);
    try {
      const data = await FetchConversations();
      if (data) setAllConversations(data);
    } catch (err) {
      console.error("Error fetching conversations", err);
    } finally {
      setIsFetchingAllConversations(false);
    }
  };

const refreshMessages = async (convId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/conversations/${convId}/messages`, {
    credentials: "include",
  });
  const data = await res.json();
  setActiveConvData(data);
};

  useEffect(() => {
    refreshConversations();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!activeConvId) return;
      setIsFetchingActiveConversation(true);
      try {
        const response = await OpenConversation({ activeConvId });
        setActiveConvData(response?.data as Conversation);
        console.log(response.data);
      } catch (err) {
        console.error("Failed to fetch conversation", err);
      } finally {
        setIsFetchingActiveConversation(false);
      }
    };

    fetchData();
  }, [activeConvId]);

  return (
    <ConversationContext.Provider
      value={{
        activeConvId,
        setActiveConvId: handleSetActiveConvId,
        activeConvData,
        allConversations,
        refreshConversations,
        refreshMessages,
        isFetchingAllConversations,
        isFetchingActiveConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) throw new Error("useConversation must be used within ConversationProvider");
  return context;
};
