import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('appLang');
    return savedLang === 'en' || savedLang === 'id' ? savedLang : 'id';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (newLang) => {
    if (newLang !== 'en' && newLang !== 'id') return;
    localStorage.setItem('appLang', newLang);
    setLang(newLang);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
