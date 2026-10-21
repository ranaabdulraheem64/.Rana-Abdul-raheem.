import { Send } from 'lucide-react';
import { useState, KeyboardEvent } from 'react';

interface ComposerProps {
  onSend: (content: string) => void;
}

export default function Composer({ onSend }: ComposerProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-6 bg-[var(--color-main-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Luxury AI anything..."
          className="w-full bg-[var(--color-card-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] p-4 rounded-xl focus:border-[var(--color-gold)] focus:outline-none"
          rows={2}
        />
        <button 
          onClick={handleSend}
          className="absolute right-4 bottom-4 text-[var(--color-gold)] hover:text-[var(--color-gold-champagne)] disabled:opacity-50"
          disabled={!input.trim()}
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
}
