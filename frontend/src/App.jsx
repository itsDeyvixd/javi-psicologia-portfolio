import React from 'react';
import { Phone, Calendar, Mail, MapPin, Video, ArrowRight, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Hero Section */}
      <header className="relative bg-brand-green text-brand-cream overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <svg className="absolute -top-24 -right-24 text-white opacity-10 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,96.5,-3.1C96.2,11.9,89.5,26.5,80.1,38.8C70.6,51.1,58.3,61.1,44.6,67.6C30.9,74.1,15.5,77.1,0.5,76.2C-14.4,75.3,-28.9,70.5,-41.6,62.8C-54.3,55.1,-65.2,44.5,-73.2,31.8C-81.2,19.1,-86.3,4.4,-84.9,-9.8C-83.4,-24,-75.4,-37.6,-64.5,-47.9C-53.6,-58.2,-39.8,-65.2,-26.4,-70.5C-13,-75.8,-0,-79.4,14.2,-81.1C28.4,-82.8,42.8,-82.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Javier Correa</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-brand-cream/90">Psicólogo Clínico</h2>
            <p className="text-lg max-w-md mb-8">
              Especialista en Evaluación Clínica y Tratamiento de Trastornos Emocionales y Afectivos.
            </p>
            <a 
              href="https://wa.link/0n3b00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-cream text-brand-green px-8 py-3 rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2"
            >
              <Calendar size={20} />
              Agenda tu cita
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-cream/30 overflow-hidden shadow-2xl">
                <img 
                  src="/Javi.jpg" 
                  alt="Javier Correa, Psicólogo" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle behind */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-full border-2 border-brand-cream/40"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        
        {/* Services / Approaches Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brand-dark">Mi Enfoque</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Psicoterapia Basada en Evidencia</h3>
              <p className="text-gray-600">
                Intervenciones respaldadas por la ciencia, incluyendo Terapia de Aceptación y Compromiso (ACT) y Psicoterapia Analítica Funcional (FAP).
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Atención a Adultos</h3>
              <p className="text-gray-600">
                Acompañamiento especializado para adultos en la gestión de emociones, toma de decisiones y mejora de la calidad de vida.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Trastornos Emocionales</h3>
              <p className="text-gray-600">
                Evaluación y tratamiento de ansiedad, depresión, estrés y otras dificultades emocionales y afectivas.
              </p>
            </div>
          </div>
        </section>

        {/* Modalities Section */}
        <section className="bg-brand-green/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-brand-dark">Modalidades de Consulta</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ofrezco un espacio seguro y confidencial adaptado a tus necesidades, ya sea que prefieras la cercanía presencial o la comodidad de tu hogar.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Consulta Presencial</h4>
                    <p className="text-gray-500 text-sm">Bogotá, Colombia</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                    <Video size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Consulta Virtual</h4>
                    <p className="text-gray-500 text-sm">Desde cualquier lugar del mundo</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-brand-green text-white p-8 rounded-3xl max-w-sm w-full shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Phone size={100} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">¿Listo para dar el primer paso?</h3>
                <p className="mb-8 text-brand-cream/90 relative z-10">
                  Inicia tu proceso terapéutico agendando una cita hoy mismo.
                </p>
                <a 
                  href="https://wa.link/0n3b00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-brand-green w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-cream transition-colors relative z-10"
                >
                  Contactar por WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-cream py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Javier Correa</h3>
            <p className="text-brand-cream/60">Psicólogo Clínico - UNAL</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/psic.javiercorrea/" target="_blank" rel="noopener noreferrer" className="bg-brand-cream/10 p-3 rounded-full hover:bg-brand-cream/20 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.link/0n3b00" target="_blank" rel="noopener noreferrer" className="bg-brand-cream/10 p-3 rounded-full hover:bg-brand-cream/20 transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-8 border-t border-brand-cream/10 text-center text-sm text-brand-cream/40">
          <p>© {new Date().getFullYear()} Javier Correa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
