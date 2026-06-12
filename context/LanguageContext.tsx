'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('igano-lang');
    if (stored === 'en' || stored === 'gr') setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'gr' ? 'el' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLang(lang);
    localStorage.setItem('igano-lang', lang);
  };

  const toggleLanguage = () => setLanguage(language === 'en' ? 'gr' : 'en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
