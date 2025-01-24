import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center grid-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield size={48} className="text-[#00FF00] glow" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch" data-text="AMMAR_ALSHEHRI">
            AMMAR_ALSHEHRI
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#0066FF] mb-8 glow-blue">
            CYBER_SECURITY_ANALYST.exe
          </h2>
          <div className="mb-12 p-4 bg-black/50 border border-[#003B00] rounded-lg backdrop-blur-sm">
            <p className="text-lg loading">
              INITIALIZING SYSTEM
            </p>
            <p className="text-lg mt-4">
              {'>'} SPECIALIZED_IN: ADVANCED_SECURITY_SOLUTIONS<br />
              {'>'} EXPERIENCE: 5_YEARS<br />
              {'>'} STATUS: OPERATIONAL
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-[#003B00] text-[#00FF00] rounded border border-[#00FF00] hover:bg-[#00FF00] hover:text-black transition-colors flex items-center gap-2 glitch"
              data-text="VIEW_PROJECTS"
            >
              VIEW_PROJECTS
              <ArrowRight className="glow" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[#00FF00] text-[#00FF00] rounded hover:bg-[#003B00] transition-colors glitch"
              data-text="ESTABLISH_CONNECTION"
            >
              ESTABLISH_CONNECTION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;