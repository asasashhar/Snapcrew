import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonial = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Show 3 testimonials on desktop with wraparound
  const visibleTestimonials = [
    TESTIMONIALS_DATA[startIndex],
    TESTIMONIALS_DATA[(startIndex + 1) % TESTIMONIALS_DATA.length],
    TESTIMONIALS_DATA[(startIndex + 2) % TESTIMONIALS_DATA.length],
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
              <span className="font-label-caps text-xs tracking-widest text-primary uppercase font-bold">
                WORDS OF TRUST
              </span>
            </div>
            <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight">
              WHAT PEOPLE SAY
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonials"
              className="w-10 h-10 bg-surface-container flex items-center justify-center hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors cursor-pointer border border-surface-container-highest"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonials"
              className="w-10 h-10 bg-surface-container flex items-center justify-center hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors cursor-pointer border border-surface-container-highest"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-low p-7 sm:p-8 flex flex-col justify-between relative border border-surface-container-highest/60 hover:bg-surface-container transition-colors"
            >
              <span className="font-serif-accent text-5xl text-primary/30 leading-none select-none">
                “
              </span>
              <p className="font-serif-accent text-base sm:text-lg italic text-on-surface leading-relaxed my-6">
                {item.quote}
              </p>
              <div className="pt-4 border-t border-surface-container-highest/60">
                <h3 className="font-headline-sm text-base sm:text-lg text-on-surface font-bold uppercase">
                  {item.author}
                </h3>
                <span className="font-label-caps text-[11px] text-primary uppercase tracking-wider block mt-0.5">
                  {item.category} · {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
