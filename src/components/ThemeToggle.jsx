import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const headerBtnStyle = "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-brand-border bg-brand-bg-primary text-brand-text-primary hover:border-brand-accent transition-all cursor-pointer shadow-xs";

  return (
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
  );
};