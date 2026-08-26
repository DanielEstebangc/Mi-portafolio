import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-bg-primary text-brand-text-primary transition-colors duration-300">
      {/* HEADER FIX-STICKY */}
      <Header />

      <main className="flex-grow">
        <HeroSection />
        {/* Aquí agregaremos las secciones de Stack y Proyectos */}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;