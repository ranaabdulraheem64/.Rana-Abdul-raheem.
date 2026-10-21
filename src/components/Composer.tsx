import { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ComposerProps {
  onSend: (content: string) => void;
  isLoading: boolean;
}

export default function Composer({ onSend, isLoading }: ComposerProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
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
    <div className="p-4 bg-white border-t flex gap-2">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-2 border rounded-lg resize-none"
        placeholder="Ask Gemini anything..."
        rows={1}
        disabled={isLoading}
      />
      <button 
        onClick={handleSend}
        disabled={isLoading || !input.trim()}
        className="bg-indigo-600 text-white p-2 rounded-lg disabled:opacity-50"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
