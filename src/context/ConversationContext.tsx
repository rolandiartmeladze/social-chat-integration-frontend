"use client";

import React, { createContext, useContext, useState } from "react";
import { OpenConversation } from "@/components/Inbox/OpenConversation";
import { Conversation } from "@/models/conversation.model";

interface ConversationContextType {
  activeConvId: string | null;
  setActiveConvId: (id: string) => void;
  activeConvData: Conversation | null;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [activeConvData, setActiveConvData] = useState<Conversation | null>(null);

  const handleSetActiveConvId = async (id: string) => {
    setActiveConvId(id);
    const response = await OpenConversation({ activeConvId: id });
    setActiveConvData(response?.data?.conversation);
  };

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
