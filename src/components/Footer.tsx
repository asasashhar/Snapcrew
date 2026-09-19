import React from 'react';
import { LOGO_URL } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <>
      <footer className="w-full bg-surface-container-low mt-20 sm:mt-28 border-t border-surface-container-highest/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-surface-container-highest/60">
            {/* Studio Identity */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div 
                onClick={() => onNavigate('hero')}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <img
                  alt="Snapcrew Studio Official Logo"
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                  src={LOGO_URL}
                />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-base tracking-tight text-on-surface uppercase font-bold">
                    SNAPCREW STUDIO
                  </span>
                  <span className="font-label-editorial text-xs italic text-on-surface-variant">
                    Payyanangadi, Tirur, Kerala
                  </span>
                </div>
              </div>

              <p className="font-serif-accent text-base italic text-on-surface-variant max-w-sm mt-1">
                PHOTOGRAPHY • FILMS • STORIES
              </p>

              <div className="mt-2 flex items-center gap-2 font-label-caps text-xs text-tertiary tracking-widest uppercase">
                <span className="material-symbols-outlined text-[16px]">
                  pin_drop
                </span>
                <span>10.9168° N, 75.9238° E · Darkroom Archive</span>
              </div>
            </div>

            {/* Studio Coordinates */}
            <div className="md:col-span-4 flex flex-col gap-2">
              <span className="font-label-caps text-xs text-on-surface tracking-widest uppercase font-bold">
                Studio Coordinates
              </span>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Payyanangadi, Tirur, Malappuram District<br />
                Kerala 676101, India
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  className="font-body-sm text-xs sm:text-sm text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-semibold"
                  href="tel:+919072123011"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                  +91 90721 23011
                </a>
                <a
                  className="font-body-sm text-xs sm:text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"
                  href="https://maps.google.com/?q=Payyanangadi+Tirur+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[16px]">near_me</span>
                  View on Google Maps ↗
                </a>
              </div>
            </div>

            {/* Digital Dispatch */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <span className="font-label-caps text-xs text-on-surface tracking-widest uppercase font-bold">
                Digital Dispatch
              </span>
              <div className="flex flex-col gap-2 pt-1 font-body-sm text-xs sm:text-sm">
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                  href="https://instagram.com/snapcrew_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                  @snapcrew_studio ↗
                </a>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Selected Portfolio
                </button>
                <button
                  onClick={() => onNavigate('booking')}
                  className="text-left text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Production Inquiries
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider text-center md:text-left">
            <p>© 2026 Snapcrew Studio. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <span className="text-tertiary font-semibold">Payyanangadi · Tirur · Kerala</span>
              <span className="hidden sm:inline">Monochrome & Cinema Masters</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Studio Widget */}
      <aside className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40 group flex items-center gap-2">
        <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 bg-inverse-surface text-inverse-on-surface font-label-caps text-[11px] px-3 py-1 shadow-lg uppercase tracking-wider hidden md:block">
          Direct Studio Line
        </div>
        <a
          aria-label="Connect on WhatsApp"
          className="flex items-center justify-center bg-primary text-white w-14 h-14 md:w-auto md:h-auto md:px-4 md:py-3 shadow-2xl md:hover:bg-primary-container md:hover:text-primary transition-all duration-200 border border-transparent md:border-surface/20 hover:scale-105 rounded-full md:rounded-sm"
          href="https://wa.me/919072123011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[24px] md:text-[20px] md:text-tertiary-fixed-dim">
            chat
          </span>
          <span className="hidden md:inline font-label-caps text-xs tracking-wider uppercase font-semibold ml-2.5">
            WhatsApp Studio
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 z-50 flex items-center justify-around px-2 pb-2">
        <button onClick={() => onNavigate('hero')} className="flex flex-col items-center gap-1 text-primary w-16">
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[9px] uppercase tracking-wider font-bold">Home</span>
        </button>
        <button onClick={() => onNavigate('portfolio')} className="flex flex-col items-center gap-1 text-gray-400 w-16">
          <span className="material-symbols-outlined text-[22px]">photo_library</span>
          <span className="text-[9px] uppercase tracking-wider font-bold">Gallery</span>
        </button>
        <button onClick={() => onNavigate('services')} className="flex flex-col items-center gap-1 text-gray-400 w-16">
          <span className="material-symbols-outlined text-[22px]">movie</span>
          <span className="text-[9px] uppercase tracking-wider font-bold">Films</span>
        </button>
        <button onClick={() => onNavigate('about-intro')} className="flex flex-col items-center gap-1 text-gray-400 w-16">
          <span className="material-symbols-outlined text-[22px]">store</span>
          <span className="text-[9px] uppercase tracking-wider font-bold">Studio</span>
        </button>
        <button onClick={() => onNavigate('location')} className="flex flex-col items-center gap-1 text-gray-400 w-16">
          <span className="material-symbols-outlined text-[22px]">call</span>
          <span className="text-[9px] uppercase tracking-wider font-bold">Contact</span>
        </button>
      </nav>
    </>
  );
};
