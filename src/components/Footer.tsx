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
      <aside className="fixed bottom-6 right-6 z-40 group flex items-center gap-2">
        <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 bg-inverse-surface text-inverse-on-surface font-label-caps text-[11px] px-3 py-1 shadow-lg uppercase tracking-wider hidden sm:block">
          Direct Studio Line
        </div>
        <a
          aria-label="Connect on WhatsApp"
          className="flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 shadow-2xl hover:bg-on-surface transition-all duration-200 border border-surface/20 hover:scale-105"
          href="https://wa.me/919072123011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">
            chat
          </span>
          <span className="font-label-caps text-xs tracking-wider uppercase font-semibold">
            WhatsApp Studio
          </span>
        </a>
      </aside>
    </>
  );
};
