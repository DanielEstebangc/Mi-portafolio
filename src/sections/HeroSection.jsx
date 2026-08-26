import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import es from '../data/locales/es.json'; // 👈 Ajusta la ruta a tu carpeta
import en from '../data/locales/en.json';

export const HeroSection = () => {
  const { language } = useLanguage();

  // Mapeamos las importaciones de los JSON
  const translations = { es, en };
  const t = translations[language]?.hero || es.hero;

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col items-center md:items-start gap-5">
        
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-text-primary tracking-tight">
          {t.title}
        </h1>

        {/* SUBTÍTULO / ROL */}
        <h2 className="text-xl sm:text-3xl font-bold text-brand-accent">
          {t.subtitle}
        </h2>

        {/* DESCRIPCIÓN (si la agregaste al JSON) */}
        {t.description && (
          <p className="text-base sm:text-lg text-brand-text-secondary max-w-2xl leading-relaxed">
            {t.description}
          </p>
        )}

        {/* BOTÓN DESCARGA CV */}
        <div className="pt-4">
          <a
            href="/hoja-de-vida.pdf" // 👈 Recuerda poner tu PDF en la carpeta public/
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-brand-bg-primary text-brand-text-primary hover:border-brand-accent hover:text-brand-accent transition-all shadow-xs cursor-pointer font-medium"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>{t.downloadCv}</span>
          </a>
        </div>

      </div>
    </section>
  );
};