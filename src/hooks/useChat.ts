import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
}

export function useChat() {
  const [chats, setChats] = useLocalStorage<Chat[]>('chats', []);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const activeChat = chats.find(c => c.id === activeChatId) || null;

  const createChat = () => {
    const newChat: Chat = { id: Date.now().toString(), title: 'New Chat', messages: [] };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  const addMessage = (chatId: string, message: Message) => {
    setChats(chats.map(c => c.id === chatId ? { ...c, messages: [...c.messages, message], title: c.messages.length === 0 ? message.content.slice(0, 30) : c.title } : c));
  };

  return { chats, activeChat, createChat, addMessage, setActiveChatId };
}
