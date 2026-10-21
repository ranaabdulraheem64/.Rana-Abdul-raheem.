import { Plus, MessageSquare, Trash2, Settings, Sun, Moon } from 'lucide-react';

interface SidebarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  return (
    <div className="w-72 bg-[var(--color-sidebar-bg)] border-r border-[var(--color-border)] p-4 flex flex-col h-full">
      <div className="text-2xl font-bold text-[var(--color-gold)] mb-8 flex items-center gap-2">
        Luxury AI
      </div>
      
      <button className="flex items-center gap-2 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black p-3 rounded-lg mb-6 w-full transition-all">
        <Plus size={20} /> New Conversation
      </button>

      <div className="flex-1 overflow-y-auto">
        {/* Placeholder for chat history */}
        <div className="text-[var(--color-text-secondary)] text-sm">No recent conversations</div>
      </div>

      <div className="pt-4 border-t border-[var(--color-border)]">
        <button onClick={onToggleTheme} className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] mb-4">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />} 
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-gold)]">
          <Settings size={20} /> Settings
        </button>
      </div>
    </div>
  );
}
