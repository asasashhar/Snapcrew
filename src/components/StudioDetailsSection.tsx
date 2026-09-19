import React from 'react';
import { STUDIO_BEHIND_IMAGE, LOGO_URL } from '../data';

export const StudioDetailsSection: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-surface-container-low border-y border-surface-container-highest/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Visual: Camera Specifications & Studio Frame */}
          <div className="lg:col-span-6 relative">
            <div className="bg-surface-container p-4 sm:p-6 shadow-2xl border border-surface-container-highest">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Photographer holding professional mirrorless camera with prime lens in Tirur studio environment surrounded by photo prints, soft ambient mood"
                src={STUDIO_BEHIND_IMAGE}
              />
              <div className="mt-4 grid grid-cols-3 gap-2 text-secondary font-label-caps text-[10px] sm:text-xs uppercase text-center bg-surface p-3 border border-surface-container-high">
                <div>
                  <span className="text-on-surface block font-bold">35MM F/1.4</span>
                  <span className="text-[10px] text-secondary">Context & Space</span>
                </div>
                <div>
                  <span className="text-on-surface block font-bold">50MM F/1.2</span>
                  <span className="text-[10px] text-secondary">Human Truth</span>
                </div>
                <div>
                  <span className="text-on-surface block font-bold">85MM F/1.4</span>
                  <span className="text-[10px] text-secondary">Intimate Soul</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col items-start mt-8 lg:mt-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
              <span className="font-label-caps text-xs tracking-widest text-primary uppercase font-bold">
                THE CREATIVE CORE
              </span>
            </div>

            <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight mb-6">
              BEHIND THE LENS.
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface leading-relaxed mb-4">
              Snapcrew Studio is a creative photography space focused on capturing people, emotions, and moments with a distinctive visual approach. From carefully composed portraits to spontaneous celebrations, our goal is simple — create photographs that still feel meaningful years later.
            </p>

            <p className="font-body-md text-sm sm:text-base text-secondary leading-relaxed mb-8">
              Operating proudly out of Payyanangadi, Tirur, we travel all across Kerala and South India. Our photographers embrace a quiet presence, allowing genuine laughter and natural tears to unfold without directorial interference.
            </p>

            {/* Studio Identity Badge */}
            <div className="flex items-center gap-4 p-4 sm:p-5 bg-surface border border-surface-container-high w-full shadow-sm">
              <img
                alt="Snapcrew Studio Official Logo"
                className="h-12 w-12 object-contain bg-primary p-1 shrink-0"
                src={LOGO_URL}
              />
              <div>
                <span className="font-headline-sm text-base sm:text-lg text-on-surface uppercase tracking-tight block font-bold">
                  SNAPCREW STUDIO TIRUR
                </span>
                <span className="font-label-editorial text-xs sm:text-sm italic text-on-surface-variant">
                  Payyanangadi, Malappuram District, Kerala · Coordinates: 10.9168° N, 75.9238° E
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
