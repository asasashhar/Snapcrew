/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { CinematicBreak } from './components/CinematicBreak';
import { ProcessSection } from './components/ProcessSection';
import { StudioDetailsSection } from './components/StudioDetailsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [selectedShootType, setSelectedShootType] = useState<string>('');

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // When clicking "Inquire" on a service, scroll to booking and prefill
  const handleSelectService = (serviceTitle: string) => {
    setSelectedShootType(serviceTitle);
    scrollToSection('booking');
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about-intro', 'portfolio', 'services', 'process', 'location', 'booking'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col selection:bg-primary-container selection:text-white">
      {/* 1. Fixed Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Flow */}
      <main className="w-full pt-20 bg-surface flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('portfolio')}
          onBookShoot={() => scrollToSection('booking')}
        />

        {/* 3. About Snapcrew Section */}
        <AboutSection />

        {/* 4. Selected Work & Interactive Portfolio */}
        <PortfolioSection
          onOpenLightbox={handleOpenLightbox}
          onBookShoot={() => scrollToSection('booking')}
        />

        {/* 5. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Cinematic Visual Break */}
        <CinematicBreak />

        {/* 7. Process Section ("FROM IDEA TO MEMORY") */}
        <ProcessSection />

        {/* 8. Studio Details & Behind the Lens */}
        <StudioDetailsSection />

        {/* 9. Testimonials / Words of Trust */}
        <TestimonialsSection />

        {/* 10. Instagram Stories & Digital Dispatch */}
        <InstagramSection />

        {/* 11. Location & Studio Architecture (Find Us in Tirur) */}
        <LocationSection />

        {/* 12. Interactive Booking & Enquiry Form */}
        <BookingSection initialShootType={selectedShootType} />
      </main>

      {/* 13. Footer with Studio Coordinates & Floating WhatsApp Studio */}
      <Footer onNavigate={scrollToSection} />

      {/* 14. Fullscreen Interactive Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
