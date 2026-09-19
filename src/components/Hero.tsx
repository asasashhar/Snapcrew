import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onExploreWork: () => void;
  onBookShoot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onBookShoot }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 280]);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] max-h-[1080px] -mt-20 overflow-hidden flex items-end">
      {/* Cinematic Full-Bleed Imagery with proper scrims for text legibility */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <motion.img
          initial={{ scale: 1.0, opacity: 0.8 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 6, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center"
          alt="Cinematic wide golden hour wedding couple in traditional Kerala kasavu attire in lush misty hill plantation, warm backlight flares, documentary emotional photography style by Snapcrew Studio"
          id="hero-img"
          src={HERO_IMAGE}
          style={{ imageRendering: 'auto', willChange: 'transform' }}
        />
        {/* Dark gradient scrims for text legibility over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0905]/90 via-[#0a0905]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0905]/70 via-transparent to-transparent"></div>
      </motion.div>

      {/* Viewfinder corner brackets */}
      <div className="absolute top-[90px] left-8 pointer-events-none select-none hidden sm:block z-10">
        <div className="w-8 h-8 border-t-2 border-l-2 border-white/30"></div>
      </div>
      <div className="absolute top-[90px] right-8 pointer-events-none select-none hidden sm:block z-10">
        <div className="w-8 h-8 border-t-2 border-r-2 border-white/30"></div>
      </div>

      {/* Viewfinder Reticle Technical Overlays */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-28 left-6 sm:left-16 text-white/40 pointer-events-none select-none font-label-caps text-[10px] hidden sm:block tracking-widest z-10"
      >
        <span>⌜ ISO 400 · 35MM · F/1.8 · 2.39:1 ⌝</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-28 right-6 sm:right-16 text-white/40 pointer-events-none select-none font-label-caps text-[10px] hidden sm:flex items-center gap-2 tracking-widest z-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block"></span>
        <span>REC ● [4K CINEMA ARCHIVE]</span>
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-10 sm:pb-14 pt-36 flex flex-col justify-between h-full">
        <div className="mt-auto">

          {/* Animated section label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="section-line !mb-0 !w-6"></span>
            <span className="font-label-caps text-[11px] tracking-[0.28em] text-white/70 uppercase">
              PHOTOGRAPHY • FILMS • STORIES
            </span>
          </motion.div>

          {/* Monolithic Sculptural Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display-hero text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.92] text-white uppercase font-bold tracking-tight max-w-5xl"
            >
              WE CAPTURE<br />
              THE MOMENTS<br />
              <span className="font-serif-accent italic font-light lowercase text-[#d4af37] md:text-primary-fixed-dim tracking-normal">
                you'll
              </span>{' '}
              <span className="text-[#d4af37] md:text-gradient-red">KEEP.</span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="font-body-lg text-sm sm:text-lg text-white/75 max-w-xl mt-4 sm:mt-7 font-light leading-relaxed"
          >
            Photography that turns real moments into timeless stories. Documenting sacred rituals, unspoken smiles, and cinematic milestones in Kerala and worldwide.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="flex items-center gap-2 sm:gap-4 mt-6 sm:mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(174,0,18,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onBookShoot}
              className="relative px-4 sm:px-10 py-2.5 sm:py-4 bg-primary text-white font-label-caps text-[10px] sm:text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2 group cursor-pointer overflow-hidden rounded-sm"
            >
              {/* shine sweep */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></span>
              <span>BOOK A SHOOT</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.18)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreWork}
              className="px-4 sm:px-10 py-2.5 sm:py-4 bg-white/10 text-white border border-white/25 backdrop-blur-md font-label-caps text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer rounded-sm"
            >
              <span>EXPLORE WORK</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Hero Bottom Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="pt-8 sm:pt-10 flex items-end justify-between text-white/50 font-label-caps text-[10px] tracking-widest uppercase border-t border-white/10 mt-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="text-white/70">PAYYANANGADI · TIRUR · KERALA</span>
            <span className="hidden sm:inline">• 10.9168° N, 75.9238° E</span>
          </div>

          <div onClick={onExploreWork} className="flex items-center gap-3 cursor-pointer group">
            <span className="hidden sm:inline text-white/50 text-[10px] group-hover:text-white/80 transition-colors">SCROLL TO EXPLORE</span>
            <div className="w-px h-8 bg-white/20 relative overflow-hidden">
              <div className="w-full h-1/2 bg-primary animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
