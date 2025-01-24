import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import DigitalRain from './components/DigitalRain';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#00FF00] relative">
      <DigitalRain />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <footer className="bg-[#000000]/80 backdrop-blur-sm py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="glow">&copy; {new Date().getFullYear()} Ammar Alshehri. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;