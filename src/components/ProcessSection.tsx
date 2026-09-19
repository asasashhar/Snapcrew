import React from 'react';
import { PROCESS_STEPS } from '../data';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-label-caps text-[10px] tracking-widest text-primary uppercase font-bold">
              03 / THE PROCESS
            </span>
          </div>

          <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight md:hidden">
            THE EXPERIENCE
          </h2>
          <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight hidden md:block">
            FROM IDEA TO MEMORY.
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
            Based on your timeline and visual aspirations, we craft...
          </p>
        </div>

        {/* Desktop 4-Step Horizontal Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-low p-6 sm:p-7 flex flex-col justify-between h-full relative group border border-surface-container-highest/60 hover:bg-surface-container transition-colors"
            >
              <div>
                <div className={`w-8 h-1 ${step.accent} mb-6`}></div>
                <span className="font-headline-md text-2xl sm:text-3xl text-primary font-bold block mb-2">
                  {step.number}
                </span>
                <h3 className="font-headline-sm text-base sm:text-lg text-on-surface uppercase font-bold mb-3">
                  {step.title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-surface-container-highest/60 flex items-center gap-2 text-secondary font-label-caps text-[11px] uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {step.icon}
                </span>
                <span>{step.meta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical List */}
        <div className="md:hidden flex flex-col gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="w-3 h-3 bg-[#e0a811] shrink-0 mt-1"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-headline-sm text-primary text-sm font-bold">{step.number}</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <h3 className="font-headline-sm text-sm text-on-surface uppercase font-bold">
                    {step.title}
                  </h3>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
