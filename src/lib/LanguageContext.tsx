import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import hinglish from '../locales/hinglish.json';

export type LanguageType = 'hinglish' | 'en' | 'hi';
type TranslationTree = Record<string, any>;

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
  tObj: (namespace: string) => TranslationTree;
}

const translations: Record<LanguageType, TranslationTree> = { en, hi, hinglish };
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    try {
      const saved = localStorage.getItem('app-language');
      if (saved === 'en' || saved === 'hi' || saved === 'hinglish') return saved;
    } catch (error) {
      console.error('Failed to access localStorage for language:', error);
    }
    return 'hinglish';
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app-language', lang);
    } catch (error) {
      console.error('Failed to save language to localStorage:', error);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const t = (key: string): string => {
    const parts = key.split('.');
    let current: unknown = translations[language] ?? translations.hinglish;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = (current as TranslationTree)[part];
      } else {
        return key;
      }
    }
    return typeof current === 'string' ? current : key;
  };

  const tObj = (namespace: string): TranslationTree => {
    const localeData = translations[language] ?? translations.hinglish;
    const value = localeData[namespace];
    return value && typeof value === 'object' ? value : {};
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t, tObj }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
