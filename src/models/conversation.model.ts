export type Platform = 'telegram' | 'messenger' | 'instagram';

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
    participants: Participants;
    messages: Message[];
    lastUpdated: string;
    platform: string;
    unreadCount?: number;
}

export interface Conv {
  id: string;
  customId: string;
  participants: Participants;
  platform: string;
  lastMessage: {
    _id: string;
    sender: {
      id: string;
      name: string;
      avatarUrl?: string;
    };
    text: string;
    timestamp: string;
  };
  lastUpdated: string;
  unreadCount?: number;
}


export interface Participants {
  user: User;
  page: User;
}