import { useState, useEffect } from 'react';
import Sidebar from './components/chat/Sidebar';
import ChatWindow from './components/chat/ChatWindow';
import Composer from './components/chat/Composer';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleSend = async (content: string) => {
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Fetch error:', response.status, errorText);
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const text = await response.text();
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to send message: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[var(--color-main-bg)] text-[var(--color-text-primary)]' : 'bg-white text-black'}`}>
      <div className="flex h-screen">
        <Sidebar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main className="flex-1 flex flex-col">
          <ChatWindow messages={messages} isLoading={isLoading} />
          <Composer onSend={handleSend} />
        </main>
      </div>
    </div>
  );
}
