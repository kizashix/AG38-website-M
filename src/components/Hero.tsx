import React from 'react';
import { Shield, Command } from 'lucide-react';
import Terminal from './Terminal';
import MatrixRain from './MatrixRain';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative pt-20 bg-[#0A0A12]">
      <MatrixRain />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield size={48} className="text-[#00C2FF]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 glitch" data-text="AMMAR ALSHEHRI">
              AMMAR ALSHEHRI
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#00C2FF] mb-8 glow-blue">
              CYBER SECURITY ANALYST
            </h2>
            <p className="text-lg text-[#00FF00]/90 mb-12 max-w-2xl mx-auto">
              A visionary in cybersecurity and IT systems with expertise in advanced security solutions,
              risk assessment, and infrastructure optimization.
            </p>
          </div>
          
          <div className="mb-12">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;