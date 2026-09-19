import React from 'react';
import { CINEMATIC_BREAK_IMAGE } from '../data';

export const CinematicBreak: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 min-h-[460px] flex items-center justify-center overflow-hidden bg-inverse-surface text-surface">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-30 scale-100"
          alt="Dark dramatic monochrome photograph of Kerala backwaters silhouette with coconut palms reflected in serene still lake under moonlit evening, high contrast film grain"
          src={CINEMATIC_BREAK_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-transparent to-inverse-surface"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
          <span className="font-label-caps text-xs tracking-[0.3em] uppercase text-surface-container-highest">
            SHOT WITH INTENTION.
          </span>
        </div>

        <h2 className="font-display-hero text-[2.5rem] sm:text-[4rem] md:text-[5rem] uppercase font-bold tracking-tight text-surface leading-tight">
          EVERY FRAME<br />HAS A STORY.
        </h2>

        <p className="font-serif-accent text-lg sm:text-xl md:text-2xl italic text-surface-container mt-4 max-w-xl leading-relaxed">
          "We do not freeze reality; we awaken the emotions that were alive in that exact second."
        </p>

        <div className="w-16 h-0.5 bg-primary-container mt-6"></div>
      </div>
    </section>
  );
};
