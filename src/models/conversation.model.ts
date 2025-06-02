export interface User {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface Message {
    id: string;
    sender: User;
    content: string;
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