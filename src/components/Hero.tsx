import React from 'react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onExploreWork: () => void;
  onBookShoot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onBookShoot }) => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] max-h-[1080px] -mt-20 overflow-hidden flex items-end">
      {/* Cinematic Full-Bleed Imagery with Dark Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          alt="Cinematic wide golden hour wedding couple in traditional Kerala kasavu attire in lush misty hill plantation, warm backlight flares, documentary emotional photography style by Snapcrew Studio"
          id="hero-img"
          src={HERO_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-inverse-surface/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/85 via-transparent to-inverse-surface/30"></div>
      </div>

      {/* Viewfinder Reticle Technical Overlays */}
      <div className="absolute top-28 left-6 sm:left-12 text-surface/50 pointer-events-none select-none font-label-caps text-xs hidden sm:block tracking-widest">
        <span>⌜ ISO 400 · 35MM · F/1.8 · 2.39:1 ⌝</span>
      </div>
      <div className="absolute top-28 right-6 sm:right-12 text-surface/50 pointer-events-none select-none font-label-caps text-xs hidden sm:block tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span>
        <span>REC ● [4K CINEMA ARCHIVE]</span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-10 sm:pb-14 pt-36 flex flex-col justify-between h-full">
        <div className="mt-auto">
          {/* Top Editorial Label with Signature Yellow Square */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block shadow-sm"></span>
            <span className="font-label-caps text-xs tracking-[0.25em] text-surface uppercase font-semibold">
              PHOTOGRAPHY • FILMS • STORIES
            </span>
          </div>

          {/* Monolithic Sculptural Headline */}
          <h1 className="font-display-hero text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.92] text-surface uppercase font-bold tracking-tight max-w-5xl">
            WE CAPTURE<br />
            THE MOMENTS<br />
            <span className="font-serif-accent italic font-light lowercase text-primary-fixed-dim tracking-normal">
              you'll
            </span> KEEP.
          </h1>

          {/* Subtext */}
          <p className="font-body-lg text-base sm:text-lg text-surface-container-high max-w-xl mt-4 sm:mt-6 font-light leading-relaxed">
            Photography that turns real moments into timeless stories. Documenting sacred rituals, unspoken smiles, and cinematic milestones in Kerala and worldwide.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
            <button
              onClick={onBookShoot}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-primary-container text-on-primary font-label-caps text-xs uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-2xl flex items-center gap-2 group cursor-pointer"
            >
              <span>BOOK A SHOOT</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                arrow_outward
              </span>
            </button>

            <button
              onClick={onExploreWork}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-surface/15 hover:bg-surface/25 text-surface border border-surface/20 backdrop-blur-md font-label-caps text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_downward
              </span>
            </button>
          </div>
        </div>

        {/* Hero Bottom Telemetry Bar */}
        <div className="pt-8 sm:pt-12 flex items-end justify-between text-surface-container-high font-label-caps text-xs tracking-widest uppercase border-t border-surface/10 mt-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
            <span>PAYYANANGADI · TIRUR · KERALA</span>
            <span className="hidden sm:inline text-surface-variant/60">
              • 10.9168° N, 75.9238° E
            </span>
          </div>

          <div 
            onClick={onExploreWork}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="hidden sm:inline text-surface-container-high text-[11px] group-hover:text-surface transition-colors">
              SCROLL TO EXPLORE
            </span>
            <div className="w-px h-8 bg-surface-container-highest/40 relative overflow-hidden">
              <div className="w-full h-1/2 bg-primary-container animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
