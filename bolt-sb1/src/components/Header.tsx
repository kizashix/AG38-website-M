import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-[#003B00]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-[#00FF00] flex items-center gap-2 glitch"
            data-text="AMMAR_ALSHEHRI"
          >
            <Shield className="text-[#00FF00]" />
            AMMAR_ALSHEHRI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#00FF00] hover:text-[#0066FF] transition-colors glitch"
                  data-text={item.name}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" className="text-[#00FF00] hover:text-[#0066FF] transition-colors">
                <Github className="glow" />
              </a>
              <a href="https://linkedin.com" className="text-[#00FF00] hover:text-[#0066FF] transition-colors">
                <Linkedin className="glow" />
              </a>
              <a href="mailto:contact@example.com" className="text-[#00FF00] hover:text-[#0066FF] transition-colors">
                <Mail className="glow" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#00FF00]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="glow" /> : <Menu className="glow" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 p-4 rounded border border-[#003B00]">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#00FF00] hover:text-[#0066FF] transition-colors glitch"
                  data-text={item.name}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://github.com" className="text-[#00FF00] hover:text-[#0066FF] transition-colors">
                <Github className="glow" />
              </a>
              <a href="https://linkedin.com" className="text-[#00FF00] hover:text-[#0066FF] transition-colors">
                <Linkedin className="glow" />
              </a>
              <a href="mailto:contact@example.com" className="text-[#00FF00] hover:text-[#0066FF] transition-colors">
                <Mail className="glow" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;