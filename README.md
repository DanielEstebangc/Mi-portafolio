# 🚀 Personal Portfolio — Daniel Esteban Galvis Cataño

Un portafolio web moderno, interactivo y totalmente responsive desarrollado con **React** y **Vite**. Diseñado con una arquitectura limpia, soporte multidioma y temas dinámicos adaptables.

---

## ✨ Características Principales

* 🌓 **Sistema de Temas Dinámico (Modo Oscuro / Claro):** 
  * Modo Oscuro: Paleta Verde Esmeralda (`#10B981`).
  * Modo Claro: Paleta Azul Cían (`#0284C7`).
* 🌐 **Soporte Multidioma (i18n):** Cambio instantáneo entre Español e Inglés mediante diccionarios en JSON.
* 🎠 **Carrusel de Proyectos Interactivo:** Muestra de proyectos con desglose de lenguajes y tecnologías utilizadas al estilo de GitHub.
* 🌌 **Fondo Animado e Interactivo:** Canvas interactivo con efecto de partículas/estrellas adaptables al tema activo.
* 📱 **Diseño Responsive:** Optimizado para pantallas de móviles, tablets y escritorios.
* ⚡ **Rendimiento Excepcional:** Construido sobre Vite para tiempos de carga ultrarrápidos y bundle optimizado.

---

## 🛠️ Tecnologías Utilizadas

* **Core:** React, JavaScript (ES6+), HTML5, CSS3 (Variables CSS dinámicas)
* **Bundler & Tooling:** Vite
* **Animaciones & UI:** Framer Motion, Lucide React, React Icons
* **Control de Versiones:** Git & GitHub

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/          # Recursos estáticos (imágenes, logos, CV en PDF)
├── components/      # Componentes UI reutilizables
├── context/         # Proveedores de estado global (ThemeContext, LanguageContext)
├── data/            # Archivos JSON locales (proyectos, stack y traducciones)
│   └── locales/     # Diccionarios de idiomas (es.json, en.json)
├── sections/        # Secciones principales del sitio (Hero, Projects, TechStack, Footer)
└── styles/          # Estilos CSS globales y variables de color