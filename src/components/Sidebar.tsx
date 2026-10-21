import { Plus, MessageSquare, Trash2 } from 'lucide-react';
import { Chat } from '../hooks/useChat';

interface SidebarProps {
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
  onCreateChat: () => void;
}

export default function Sidebar({ chats, activeChatId, onSelectChat, onCreateChat }: SidebarProps) {
  return (
    <div className="w-64 bg-slate-900 text-white p-4 flex flex-col h-full">
      <button 
        onClick={onCreateChat}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg mb-6 w-full"
      >
        <Plus size={20} /> New Chat
      </button>
      <div className="flex-1 overflow-y-auto">
        {chats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`flex items-center gap-2 p-3 rounded-lg w-full mb-2 text-left ${activeChatId === chat.id ? 'bg-slate-800' : 'hover:bg-slate-800'}`}
          >
            <MessageSquare size={18} />
            <span className="truncate">{chat.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
