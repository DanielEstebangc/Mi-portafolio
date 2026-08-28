import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const headerBtnStyle = "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-brand-border bg-brand-bg-primary text-brand-text-primary hover:border-brand-accent transition-all cursor-pointer shadow-xs";

  return (
    <button
      onClick={toggleLanguage}
      className={headerBtnStyle}
      aria-label="Cambiar idioma"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {language === 'es' ? (
        // Bandera Reino Unido
        <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 245 180L565 0h75v55L395 240l245 185v55h-75L320 300 75 480H0v-55l245-185L0 55V0h75z"/>
          <path fill="#C8102E" d="m424 281 216 163v36h-48L376 317l48-36zM216 199 0 36v-36h48l216 163-48 36zm0 82L0 444v36h48l216-163-48-36zm208-82L640 36V0h-48L376 163l48 36z"/>
          <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/>
          <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/>
        </svg>
      ) : (
        // Bandera España
        <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#c60b1e" d="M0 0h640v480H0z"/>
          <path fill="#ffc400" d="M0 120h640v240H0z"/>
        </svg>
      )}
      <span>{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};