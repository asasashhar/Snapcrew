import React from 'react';
import { MAP_IMAGE } from '../data';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Studio Details & Visit Info */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
              <span className="font-label-caps text-xs tracking-widest text-primary uppercase font-bold">
                STUDIO ARCHITECTURE
              </span>
            </div>

            <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight mb-6">
              FIND US IN TIRUR
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Our physical darkroom and consultation atelier is located in Payyanangadi, Tirur. Drop by to preview physical archival album samples, discuss timelines, or plan a bespoke production over chai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-surface-container-low p-5 border border-surface-container-highest/60">
                <span className="font-label-caps text-xs text-primary block uppercase font-bold mb-2">
                  Studio Address
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface leading-relaxed">
                  Payyanangadi, Tirur,<br />
                  Malappuram District,<br />
                  Kerala 676101, India
                </p>
              </div>

              <div className="bg-surface-container-low p-5 border border-surface-container-highest/60">
                <span className="font-label-caps text-xs text-primary block uppercase font-bold mb-2">
                  Studio Hours & Line
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface leading-relaxed">
                  Mon – Sat: 9:30 AM – 7:30 PM<br />
                  Sunday: By Prior Appointment<br />
                  Direct:{' '}
                  <a className="font-bold text-primary hover:underline" href="tel:+919072123011">
                    +91 90721 23011
                  </a>
                </p>
              </div>
            </div>

            <a
              className="px-8 py-3.5 bg-inverse-surface text-inverse-on-surface hover:bg-primary-container font-label-caps text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2 shadow-lg"
              href="https://maps.google.com/?q=Payyanangadi+Tirur+Kerala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>VIEW ON GOOGLE MAPS</span>
              <span className="material-symbols-outlined text-[18px]">
                near_me
              </span>
            </a>
          </div>

          {/* Right: Map Component Container */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="bg-surface-container-high p-4 sm:p-5 shadow-2xl relative border border-surface-container-highest">
              <a
                href="https://maps.google.com/?q=Payyanangadi+Tirur+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden"
              >
                <div
                  className="w-full h-80 sm:h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-location="Payyanangadi, Tirur, Kerala, India"
                  style={{ backgroundImage: `url('${MAP_IMAGE}')` }}
                ></div>
                <div className="absolute inset-0 bg-inverse-surface/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="px-4 py-2 bg-surface text-on-surface font-label-caps text-xs uppercase tracking-wider shadow-lg opacity-90 group-hover:opacity-100 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-sm">pin_drop</span>
                    Open in Maps ↗
                  </span>
                </div>
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-between text-secondary font-label-caps text-[11px] uppercase">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    location_on
                  </span>
                  <span>Coordinates: 10.9168° N, 75.9238° E</span>
                </div>
                <span className="text-on-surface-variant font-semibold">Malabar Coast Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
