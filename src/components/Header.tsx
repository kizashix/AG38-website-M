import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '#home', description: 'Main dashboard' },
    { name: 'EXPERIENCE', href: '#experience', description: 'Professional background' },
    { name: 'PORTFOLIO', href: '#portfolio', description: 'Project showcase' },
    { name: 'CONTACT', href: '#contact', description: 'Get in touch' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub',
      href: 'https://github.com/kizashix',
      icon: Github,
      color: 'text-[#FF3399]',
      hoverColor: 'hover:text-[#B026FF]',
      external: true
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ams38/',
      icon: Linkedin,
      color: 'text-[#00C2FF]',
      hoverColor: 'hover:text-[#B026FF]',
      external: true
    },
    {
      name: 'Email',
      href: 'mailto:ammar@ag38.me',
      icon: Mail,
      color: 'text-[#B026FF]',
      hoverColor: 'hover:text-[#FF3399]',
      external: true
    }
  ];

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-[#00C2FF]/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-[#00C2FF] flex items-center gap-2 transition-transform hover:scale-105"
            title="Return to homepage"
            aria-label="Homepage"
          >
            <Shield className="text-[#00C2FF]" />
            AMMAR
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#00C2FF] hover:text-[#B026FF] transition-all hover:scale-105 px-3 py-2"
                  title={item.description}
                  aria-label={item.description}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${link.color} ${link.hoverColor} transition-all hover:scale-110`}
                  title={link.name}
                  aria-label={link.name}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#00C2FF] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 p-4 rounded border border-[#00C2FF]/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#00C2FF] hover:text-[#B026FF] transition-all hover:scale-105 px-3 py-2"
                  title={item.description}
                  aria-label={item.description}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${link.color} ${link.hoverColor} transition-all hover:scale-110 p-2`}
                  title={link.name}
                  aria-label={link.name}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;