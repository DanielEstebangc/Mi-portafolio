import { createContext, useContext, useEffect, useState } from 'react';
import esTranslations from '../data/locales/es.json';
import enTranslations from '../data//locales/en.json';

const LanguageContext = createContext();

const LANG_KEY = 'portfolio_lang';

const translationsMap = {
  es: esTranslations,
  en: enTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // 1. Leer localStorage o definir 'es' por defecto
    const savedLang = localStorage.getItem(LANG_KEY);
    return savedLang === 'es' || savedLang === 'en' ? savedLang : 'es';
  });

  useEffect(() => {
    localStorage.setItem(LANG_KEY, language);
  }, [language]);

  // 2. Alternar entre 'es' y 'en'
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // 3. Cargar el JSON correspondiente para renderizar los textos
  const t = translationsMap[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};