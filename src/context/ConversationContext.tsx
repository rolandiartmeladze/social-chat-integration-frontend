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
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [activeConvData, setActiveConvData] = useState<Conversation | null>(null);
  const [allConversations, setAllConversations] = useState<Conv[]>([]);

  const handleSetActiveConvId = (id: string) => {
    setActiveConvId(id);
  };

  const refreshConversations = async () => {
    const data = await FetchConversations();
    if (data) setAllConversations(data);
  };

  useEffect(() => {
    refreshConversations();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!activeConvId) return;
      try {
        const response = await OpenConversation({ activeConvId });
        setActiveConvData(response?.data?.conversation);
      } catch (err) {
        console.error("Failed to fetch conversation", err);
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
