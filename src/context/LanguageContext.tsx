import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';
import type { TranslationDict } from '../data/translations';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends keyof TranslationDict>(key: K) => TranslationDict[K];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'es' || saved === 'en') return saved;
    
    // Auto-detect browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('en') ? 'en' : 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Safe type-safe translation selector
  const t = <K extends keyof TranslationDict>(key: K): TranslationDict[K] => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
