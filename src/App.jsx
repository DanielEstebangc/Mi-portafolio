import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-bg-primary text-brand-text-primary transition-colors duration-300">
      {/* HEADER FIX-STICKY */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Mi Portafolio</h1>
        <div className="h-[150vh]">
          <p className="text-brand-text-secondary">
            Scrollea hacia abajo para verificar que el header se mantiene fijo arriba y el footer aparece al final...
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;