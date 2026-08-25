import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import hinglish from '../locales/hinglish.json';

export type LanguageType = 'hinglish' | 'en' | 'hi';

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
  tObj: (namespace: string) => any;
}

const translations: Record<LanguageType, any> = {
  en,
  hi,
  hinglish,
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Read saved language from localStorage, default to 'hinglish' as requested
  const [language, setLanguageState] = useState<LanguageType>(() => {
    try {
      const saved = localStorage.getItem('app-language');
      if (saved === 'en' || saved === 'hi' || saved === 'hinglish') {
        return saved;
      }
    } catch (e) {
      console.error('Failed to access localStorage for language:', e);
    }
    return 'hinglish';
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app-language', lang);
    } catch (e) {
      console.error('Failed to save language to localStorage:', e);
    }
  };

  const t = (key: string): string => {
    const localeData = translations[language] || translations['hinglish'];
    const parts = key.split('.');
    let current = localeData;
    
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return key;
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  const tObj = (namespace: string): any => {
    const localeData = translations[language] || translations['hinglish'];
    return localeData[namespace] || {};
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
