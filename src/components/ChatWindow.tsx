import { Message } from '../hooks/useChat';
import { motion } from 'framer-motion';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map(msg => (
        <motion.div 
          key={msg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-indigo-600 text-white ml-auto' : 'bg-slate-200'}`}
        >
          {msg.content}
        </motion.div>
      ))}
      {isLoading && (
        <div className="p-4 bg-slate-200 rounded-lg max-w-[80%] animate-pulse">
          Thinking...
        </div>
      )}
    </div>
  );
}
