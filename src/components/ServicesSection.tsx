import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
          <span className="font-label-caps text-xs tracking-widest text-primary uppercase font-bold">
            02 / WHAT WE DO
          </span>
        </div>

        <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight mb-12">
          MADE FOR YOUR MOMENTS.
        </h2>

        {/* Service Rows List with Hover Reveal */}
        <div className="flex flex-col gap-3">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                className="bg-surface-container-low hover:bg-surface-container transition-all duration-300 group border-b border-surface-container-highest/60 flex flex-col"
              >
                <div 
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start md:items-center gap-5 sm:gap-8">
                    <span className="font-headline-md text-2xl sm:text-3xl text-primary font-bold group-hover:text-primary-container transition-colors shrink-0">
                      {service.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface uppercase font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </div>
                      <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-xl mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    <span className="font-label-editorial text-xs italic text-secondary hidden lg:inline">
                      {service.tagline}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service.title);
                      }}
                      className="px-5 py-2 bg-surface-container-high group-hover:bg-primary-container group-hover:text-on-primary font-label-caps text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>INQUIRE</span>
                      <span className="material-symbols-outlined text-[14px]">
                        north_east
                      </span>
                    </button>
                  </div>
                </div>

                {/* Detailed Deliverables Drawer on expansion */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-1 md:pl-24 bg-surface-container-low/70 border-t border-surface-container-highest/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-200">
                    <div>
                      <span className="font-label-caps text-[11px] text-tertiary uppercase tracking-widest block mb-2 font-bold">
                        Archival Inclusions:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-body-sm text-xs text-on-surface-variant">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary inline-block"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="self-start sm:self-center text-xs font-label-caps text-primary underline underline-offset-4 tracking-wider uppercase font-bold hover:text-primary-container"
                    >
                      Book This Shoot →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
