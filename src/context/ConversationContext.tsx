"use client";

import React, { createContext, useContext, useState } from "react";
import { OpenConversation } from "@/components/Inbox/OpenConversation";
import { Conversation } from "@/models/conversation.model";
import { useEffect } from "react";

interface ConversationContextType {
  activeConvId: string | null;
  setActiveConvId: (id: string) => void;
  activeConvData: Conversation | null;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [activeConvData, setActiveConvData] = useState<Conversation | null>(null);

  const handleSetActiveConvId = (id: string) => {
    setActiveConvId(id);
  };

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
