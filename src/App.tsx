import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white relative">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <footer className="bg-black/80 backdrop-blur-sm py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[#00C2FF]">&copy; {new Date().getFullYear()} Ammar Alshehri. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;