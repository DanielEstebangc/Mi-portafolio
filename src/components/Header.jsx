import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

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
         <LanguageToggle />
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
};