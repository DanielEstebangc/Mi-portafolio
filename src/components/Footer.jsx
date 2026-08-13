import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      rights: "Todos los derechos reservados.",
      developedBy: "Diseñado y desarrollado por Daniel Galvis",
      contactHeading: "Contacto",
    },
    en: {
      rights: "All rights reserved.",
      developedBy: "Designed and developed by Daniel Galvis",
      contactHeading: "Contact",
    }
  };

  const t = content[language] || content.es;
  const currentYear = new Date().getFullYear();

  // Estilo reutilizable con fondo principal para mayor contraste sobre el footer
  const buttonStyle = "p-2.5 rounded-lg border border-brand-border bg-brand-bg-primary text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-accent transition-all cursor-pointer shadow-xs";

  return (
    <footer className="w-full bg-brand-bg-secondary border-t border-brand-border py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* BRAND / COPYRIGHT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a 
            href="#home" 
            className="text-lg font-bold text-brand-text-primary hover:text-brand-accent transition-colors"
          >
            {`<Daniel />`}
          </a>
          <p className="text-xs text-brand-text-secondary">
            © {currentYear} Daniel Esteban Galvis Cataño. {t.rights}
          </p>
        </div>

        {/* ENLACES DE CONTACTO / REDES */}
        <div className="flex items-center gap-4">
          
          {/* GitHub */}
          <a
            href="https://github.com/DanielEstebangc"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            aria-label="GitHub"
            title="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/daniel-galvis-b32242302"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          {/* Correo Electrónico */}
          <a
            href="mailto:danielgalvis.3107@gmail.com"
            className={buttonStyle}
            aria-label="Correo electrónico"
            title="Enviar correo"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573193230170"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
            aria-label="WhatsApp"
            title="Contactar por WhatsApp"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.015-5.111-3.298-6.126-6.126l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>

        </div>

      </div>
    </footer>
  );
};