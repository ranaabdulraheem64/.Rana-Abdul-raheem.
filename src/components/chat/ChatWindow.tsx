interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-4">
      {messages.length === 0 && (
        <div className="max-w-3xl mx-auto w-full text-center mt-20">
          <h1 className="text-4xl font-serif text-[var(--color-gold)] mb-4">Intelligence, Refined.</h1>
          <p className="text-[var(--color-text-secondary)]">A smarter space for ideas, creativity, and problem-solving.</p>
        </div>
      )}
      
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={`p-4 rounded-xl max-w-[80%] ${
            msg.role === 'user' 
              ? 'bg-[var(--color-gold)] text-black self-end' 
              : 'bg-[var(--color-card-bg)] text-[var(--color-text-primary)] self-start border border-[var(--color-border)]'
          }`}
        >
          {msg.content}
        </div>
      ))}

      {isLoading && (
        <div className="p-4 rounded-xl max-w-[80%] bg-[var(--color-card-bg)] text-[var(--color-text-secondary)] self-start border border-[var(--color-border)] animate-pulse">
          Generating response...
        </div>
      )}
    </div>
  );
}
