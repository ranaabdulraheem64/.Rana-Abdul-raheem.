import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialData: T) {
  const [data, setData] = useState<T>(() => {
    if (typeof window === 'undefined') return initialData;
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialData;
    } catch (err) {
      console.warn('Failed to load storage', err);
      return initialData;
    }
  });

  const save = (newData: T) => {
    setData(newData);
    try {
      window.localStorage.setItem(key, JSON.stringify(newData));
    } catch (e: any) {
      if (e.name === 'QuotaExceededError') {
        const truncated = Array.isArray(newData) ? (newData as any[]).slice(-20) : newData;
        window.localStorage.setItem(key, JSON.stringify(truncated));
      }
    }
  };

  return [data, save] as const;
}
