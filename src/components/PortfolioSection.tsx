import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onOpenLightbox: (index: number) => void;
  onBookShoot: () => void;
}

type FilterCategory = 'all' | 'weddings' | 'portraits' | 'events' | 'pre-wedding' | 'commercial';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenLightbox, onBookShoot }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterTabs: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: 'ALL ARCHIVES' },
    { key: 'weddings', label: 'WEDDINGS' },
    { key: 'portraits', label: 'PORTRAITS' },
    { key: 'events', label: 'EVENTS' },
    { key: 'pre-wedding', label: 'PRE-WEDDING' },
    { key: 'commercial', label: 'COMMERCIAL' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-20 lg:py-28 bg-surface-container-low border-y border-surface-container-highest/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
              <span className="font-label-caps text-xs tracking-widest text-primary uppercase font-bold">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight">
              SELECTED WORK
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
              A collection of moments, people and stories captured by Snapcrew.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 sm:px-5 py-2 font-label-caps text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-inverse-surface text-inverse-on-surface border-inverse-surface shadow-sm font-bold'
                      : 'bg-surface text-secondary hover:text-on-surface hover:bg-surface-container border-surface-container-highest/80'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredItems.map((item: PortfolioItem) => {
            // Calculate index in original dataset so lightbox navigates properly
            const origIndex = PORTFOLIO_DATA.findIndex((p) => p.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(origIndex >= 0 ? origIndex : 0)}
                className={`portfolio-item ${item.colSpan} group cursor-pointer flex flex-col`}
              >
                {/* Image Frame */}
                <div className={`relative overflow-hidden bg-surface-container ${item.aspect} shadow-md border border-surface-container-highest/60`}>
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt={item.alt}
                    src={item.image}
                  />

                  {/* High-Contrast Hover Reveal Scrim & Story Metadata */}
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2 px-3 py-1 bg-surface/90 backdrop-blur-sm text-on-surface font-label-caps text-[11px] uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim inline-block"></span>
                        {item.categoryLabel}
                      </span>
                      <span className="font-label-caps text-xs text-surface/85 tracking-widest hidden sm:inline">
                        {item.subcategory}
                      </span>
                    </div>

                    <div>
                      {item.subtitle && (
                        <span className="font-label-editorial text-xs italic text-tertiary-fixed-dim block mb-1">
                          {item.subtitle}
                        </span>
                      )}
                      <h3 className="font-headline-lg text-xl sm:text-2xl text-surface uppercase font-bold tracking-tight">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="font-body-sm text-xs sm:text-sm text-surface-container-high max-w-lg mt-2 leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {item.description}
                        </p>
                      )}
                      <div className="mt-4 inline-flex items-center gap-1 font-label-caps text-xs text-tertiary-fixed-dim uppercase tracking-wider group-hover:underline">
                        <span>VIEW STORY</span>
                        <span className="material-symbols-outlined text-[16px]">
                          north_east
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Architectural Metadata Strip */}
                <div className="mt-2.5 flex justify-between items-center text-secondary font-label-caps text-[11px] uppercase tracking-wider">
                  <span className="text-secondary/80">{item.archiveTag}</span>
                  <span className="text-primary font-semibold">{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            onClick={onBookShoot}
            className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 bg-inverse-surface text-inverse-on-surface hover:bg-primary-container font-label-caps text-xs uppercase tracking-widest transition-colors duration-300 shadow-md cursor-pointer"
          >
            <span>COMMISSION A BESPOKE GALLERY</span>
            <span className="material-symbols-outlined text-[18px]">
              north_east
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
