import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-intro" className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Text & Monolithic Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line !mb-0 !w-6"></span>
              <span className="font-label-caps text-xs tracking-[0.2em] text-primary uppercase font-bold">
                01 / ABOUT SNAPCREW
              </span>
            </div>

            <h2 className="font-headline-xl text-3xl sm:text-5xl lg:text-[3.25rem] text-on-surface uppercase tracking-tight leading-[1.08] mb-6 font-bold">
              NOT JUST PHOTOGRAPHS.<br />
              <span className="font-serif-accent italic text-primary font-normal lowercase tracking-tight">
                stories
              </span> FROZEN IN TIME.
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl mb-4 leading-relaxed">
              Snapcrew Studio creates photographs that preserve the atmosphere, emotion, and personality behind every moment. Rooted in Tirur, Malappuram, our team merges subtle documentary observation with classical photographic composition.
            </p>

            <p className="font-body-md text-sm sm:text-base text-secondary max-w-xl mb-8 leading-relaxed">
              From intimate ancestral home weddings draped in Kerala kasavu to contemporary cinematic ceremonies and commercial portraits, every frame is crafted with genuine intention. We do not manufacture artificial poses; we record memories you will feel decades later.
            </p>

            {/* Archival Metric Strip */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg bg-surface-container-low p-5 sm:p-6 border border-surface-container-highest/60 card-accent">
              <motion.div whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }}>
                <span className="font-headline-md text-2xl sm:text-3xl text-on-surface block font-bold">850+</span>
                <span className="font-label-caps text-[10px] sm:text-xs text-secondary uppercase tracking-wider">Weddings Stored</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }}>
                <span className="font-headline-md text-2xl sm:text-3xl text-primary block font-bold">12+</span>
                <span className="font-label-caps text-[10px] sm:text-xs text-secondary uppercase tracking-wider">Years Archiving</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }}>
                <span className="font-headline-md text-2xl sm:text-3xl text-tertiary block font-bold">100%</span>
                <span className="font-label-caps text-[10px] sm:text-xs text-secondary uppercase tracking-wider">Pure Emotion</span>
              </motion.div>
            </div>
            {/* Mobile Quote Card (Visible only on mobile) */}
            <div className="lg:hidden mt-8 border-l-4 border-primary pl-4 py-1">
              <p className="font-serif-accent text-base text-on-surface-variant italic leading-snug">
                "Preserving the rhythm of Kerala's soul through truthful lenses."
              </p>
            </div>
          </motion.div>

          {/* Right: Asymmetric Editorial Photo Canvas (Hidden on mobile to match design) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="hidden lg:block lg:col-span-5 relative mt-10 lg:mt-0"
          >
            <div className="relative bg-surface-container shadow-2xl overflow-hidden group border border-surface-container-highest card-hover-glow">
              <img
                className="w-full aspect-[4/5] object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                alt="Black and white high-contrast editorial portrait of an Indian bride adjusting traditional gold jhumka earrings, soft directional natural window light, vintage matte film look"
                src={ABOUT_IMAGE}
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-inverse-surface/90 text-inverse-on-surface px-3 py-1 font-label-caps text-[10px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span>PAYYANANGADI · TIRUR</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-surface text-on-surface px-4 py-1.5 font-label-editorial text-xs italic shadow-md border border-surface-container-high">
                Plate No. 048 // Kasavu & Gold
              </div>
            </div>

            {/* Decorative Offset Quote Card for Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-surface-container-highest p-5 max-w-xs shadow-xl border border-[#dbdad7] float-slow"
            >
              <p className="font-serif-accent text-sm sm:text-base text-on-surface-variant italic leading-snug">
                "Preserving the rhythm of Kerala's soul through truthful lenses."
              </p>
              <span className="font-label-caps text-[10px] text-tertiary block mt-2 tracking-widest uppercase font-semibold">
                — Studio Director
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
