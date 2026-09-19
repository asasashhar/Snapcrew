import React, { useState } from 'react';
import { LOGO_URL } from '../data';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', target: 'portfolio' },
    { label: 'Services', target: 'services' },
    { label: 'Experience', target: 'process' },
    { label: 'About', target: 'about-intro' },
    { label: 'Contact', target: 'location' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fbf9f6]/90 backdrop-blur-xl border-b border-[#e4e2df]/80 shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-6">
          {/* Studio Brand / Official Logo */}
          <div 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              alt="Snapcrew Studio Official Logo" 
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              src={LOGO_URL} 
            />
            <div className="flex flex-col justify-center">
              <span className="font-headline-sm text-base sm:text-lg tracking-tight text-on-surface uppercase font-bold">
                SNAPCREW STUDIO
              </span>
              <span className="font-label-caps text-[10px] sm:text-xs text-on-surface-variant tracking-widest uppercase">
                TIRUR · KERALA
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.target)}
                  className={`font-label-caps text-xs uppercase tracking-widest transition-all py-1 cursor-pointer ${
                    isActive
                      ? 'text-primary font-bold underline underline-offset-8 decoration-2'
                      : 'text-secondary hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('booking')}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 bg-primary-container text-on-primary font-label-caps text-xs tracking-widest uppercase hover:bg-primary transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <span>BOOK A SHOOT ↗</span>
            </button>

            <a 
              href="tel:+919072123011"
              title="Direct Studio Line: +91 90721 23011"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-colors shadow-sm text-white"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                call
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-b border-surface-container-highest px-6 py-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.target)}
                className="text-left font-label-caps text-sm uppercase tracking-widest text-on-surface hover:text-primary py-2 border-b border-surface-container-high cursor-pointer flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <span className="font-label-caps text-[11px] uppercase tracking-wider text-secondary">
                Direct Inquiries: Payyanangadi, Tirur
              </span>
              <a 
                href="tel:+919072123011"
                className="font-body-md text-primary font-bold flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">phone</span>
                +91 90721 23011
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
