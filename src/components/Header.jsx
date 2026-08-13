import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  // Estilo base con el fondo principal (bg-brand-bg-primary) para contraste perfecto
  const headerBtnStyle = "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-brand-border bg-brand-bg-primary text-brand-text-primary hover:border-brand-accent transition-all cursor-pointer shadow-xs";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-bg-header border-b border-brand-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO / NOMBRE */}
        <a 
          href="#home" 
          className="text-lg font-bold text-brand-text-primary hover:text-brand-accent transition-colors"
        >
          {`<Daniel />`}
        </a>

        {/* CONTROLES DE ESTADO */}
        <div className="flex items-center gap-3">
          
          {/* BOTÓN DE IDIOMA */}
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

          {/* BOTÓN DE TEMA */}
          <button
            onClick={toggleTheme}
            className={`${headerBtnStyle} p-2.5`}
            aria-label="Cambiar tema"
            title={theme === 'dark' ? 'Activar Modo Claro' : 'Activar Modo Oscuro'}
          >
            {theme === 'dark' ? (
              // Ícono Sol
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-brand-star">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364 6.364l-1.591-1.591M6.758 6.758L5.167 5.167m12.728 0l-1.591 1.591M6.758 17.242l-1.591 1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
              </svg>
            ) : (
              // Ícono Luna
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-brand-text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

        </div>

      </div>
    </header>
  );
};