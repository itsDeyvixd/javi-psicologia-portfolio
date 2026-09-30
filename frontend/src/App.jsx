import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone, Calendar, MapPin, Video, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      {/* Header / Hero Section */}
      <header className="relative bg-brand-green text-brand-cream overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <svg className="absolute -top-24 -right-24 text-white opacity-10 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,96.5,-3.1C96.2,11.9,89.5,26.5,80.1,38.8C70.6,51.1,58.3,61.1,44.6,67.6C30.9,74.1,15.5,77.1,0.5,76.2C-14.4,75.3,-28.9,70.5,-41.6,62.8C-54.3,55.1,-65.2,44.5,-73.2,31.8C-81.2,19.1,-86.3,4.4,-84.9,-9.8C-83.4,-24,-75.4,-37.6,-64.5,-47.9C-53.6,-58.2,-39.8,-65.2,-26.4,-70.5C-13,-75.8,-0,-79.4,14.2,-81.1C28.4,-82.8,42.8,-82.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
              Javier Correa
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-brand-cream/90">
              Psicólogo Clínico
            </h2>
            <p className="text-lg max-w-md mb-8 text-brand-cream/80">
              Especialista en Evaluación Clínica y Tratamiento de Trastornos Emocionales y Afectivos.
            </p>
            <a 
              href="https://wa.link/0n3b00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-cream text-brand-green px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2 min-h-[44px] min-w-[44px] shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Agendar cita por WhatsApp"
            >
              <Calendar size={20} aria-hidden="true" />
              <span>Agenda tu cita</span>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-cream/30 overflow-hidden shadow-2xl bg-brand-dark/20">
                <img 
                  src="/Javi.jpg" 
                  alt="Retrato profesional de Javier Correa, Psicólogo Clínico" 
                  className="w-full h-full object-cover"
                  width="320"
                  height="320"
                  fetchpriority="high"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-full border-2 border-brand-cream/40" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        
        {/* Services / Approaches Section */}
        <section className="mb-20" aria-labelledby="enfoque-heading">
          <div className="text-center mb-12">
            <h2 id="enfoque-heading" className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brand-dark">Mi Enfoque</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full" aria-hidden="true"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green" aria-hidden="true">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-dark">Psicoterapia Basada en Evidencia</h3>
              <p className="text-gray-700 leading-relaxed">
                Intervenciones respaldadas por la ciencia, incluyendo Terapia de Aceptación y Compromiso (ACT) y Psicoterapia Analítica Funcional (FAP).
              </p>
            </article>
            
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-dark">Atención a Adultos</h3>
              <p className="text-gray-700 leading-relaxed">
                Acompañamiento especializado para que puedas relacionarte de una manera distinta con tus emociones, clarificar tus valores y mejorar tu calidad de vida.
              </p>
            </article>
            
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green" aria-hidden="true">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-brand-dark">Trastornos Emocionales</h3>
              <p className="text-gray-700 leading-relaxed">
                Evaluación y tratamiento de ansiedad, depresión, estrés y otras dificultades emocionales y afectivas.
              </p>
            </article>
          </div>
        </section>

        {/* Modalities Section */}
        <section className="bg-brand-green/5 rounded-3xl p-8 md:p-12 mb-10 border border-brand-green/10" aria-labelledby="modalidades-heading">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 id="modalidades-heading" className="text-3xl font-serif font-bold mb-6 text-brand-dark">Modalidades de Consulta</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ofrezco un espacio seguro y confidencial adaptado a tus necesidades, ya sea que prefieras la cercanía presencial o la comodidad de tu hogar.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-brand-green/5">
                  <div className="bg-brand-green/10 p-3 rounded-full text-brand-green" aria-hidden="true">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-dark">Consulta Presencial</h4>
                    <p className="text-gray-600 text-sm">Bogotá, Colombia</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-brand-green/5">
                  <div className="bg-brand-green/10 p-3 rounded-full text-brand-green" aria-hidden="true">
                    <Video size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-dark">Consulta Virtual</h4>
                    <p className="text-gray-600 text-sm">Desde cualquier lugar del mundo</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 flex justify-center w-full">
              <div className="bg-brand-green text-white p-8 rounded-3xl max-w-md w-full shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none" aria-hidden="true">
                  <Phone size={120} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">¿Listo para dar el primer paso?</h3>
                <p className="mb-6 text-brand-cream/90 relative z-10">
                  Inicia tu proceso terapéutico agendando una cita hoy mismo.
                </p>
                <a 
                  href="https://wa.link/0n3b00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-brand-green w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-cream transition-colors relative z-10 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-brand-green/50"
                  aria-label="Contactar por WhatsApp para agendar cita"
                >
                  Contactar por WhatsApp
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <p className="mt-4 text-xs text-brand-cream/60 text-center relative z-10">
                  Tus datos serán tratados con estricta confidencialidad profesional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.link/0n3b00" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 z-50 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chatear en WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-cream py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif font-bold mb-2">Javier Correa</h2>
              <p className="text-brand-cream/70 mb-1">Psicólogo Clínico - UNAL</p>
              <p className="text-brand-cream/50 text-sm">Tarjeta Profesional N° [Número]</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/psic.javiercorrea/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-cream/10 p-3 rounded-full hover:bg-brand-cream/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-cream"
                  aria-label="Visitar perfil de Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-cream/10 pt-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-brand-cream/50 text-center md:text-left">
            <div>
              <p className="mb-2">
                <strong className="text-brand-cream/80">Aviso de Crisis:</strong> Si estás en una situación de crisis o emergencia, por favor comunícate a la <strong>Línea 106</strong> (en Bogotá) o al <strong>123</strong> de manera inmediata.
              </p>
              <p className="text-xs">
                La información compartida en este sitio web es de carácter informativo y no sustituye una consulta psicológica presencial o virtual formal.
              </p>
            </div>
            <div className="md:text-right flex flex-col justify-end">
              <p className="mb-2">
                <a href="#" className="hover:text-brand-cream underline decoration-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-cream rounded">Política de Privacidad y Tratamiento de Datos</a>
              </p>
              <p>© {new Date().getFullYear()} Javier Correa. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream items-center justify-center text-center px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-brand-green/10">
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green" aria-hidden="true">
          <MapPin size={40} />
        </div>
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Parece que te has perdido un poco. Está bien, a veces pasa. Volvamos juntos al inicio.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-colors focus:outline-none focus:ring-4 focus:ring-brand-green/50 min-h-[44px]"
        >
          Regresar al inicio
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
