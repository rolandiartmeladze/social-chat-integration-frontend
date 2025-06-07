export interface User {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface Message {
    id: string;
    sender: User;
    text: string;
    timestamp: string;
    read: boolean;
}

export interface Conversation {
    id: string;
    participants: User[];
    messages: Message[];
    lastUpdated: string;
    unreadCount?: number;
}

export interface Conv {
  conversationId: string;
  participants: {
    user: User;
    page: User;
  };
  platform: string;
  messages: Message[];
  lastUpdated: string;
}