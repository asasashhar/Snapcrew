import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data';

interface LightboxModalProps {
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % PORTFOLIO_DATA.length);
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentItem = PORTFOLIO_DATA[currentIndex] || PORTFOLIO_DATA[0];
  const formattedCounter = `0${currentIndex + 1} / 0${PORTFOLIO_DATA.length}`;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % PORTFOLIO_DATA.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-inverse-surface/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 md:p-12 animate-in fade-in duration-200 select-none"
    >
      {/* Lightbox Top Controls */}
      <div className="flex items-center justify-between text-surface" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
          <span className="font-label-caps text-xs uppercase tracking-widest text-surface">
            {formattedCounter}
          </span>
          <span className="text-surface-variant/40 hidden sm:inline">•</span>
          <span className="font-label-caps text-xs uppercase tracking-widest text-primary-fixed-dim hidden sm:inline">
            {currentItem.category.toUpperCase()}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 hover:text-primary-fixed transition-colors flex items-center gap-1 font-label-caps text-xs uppercase tracking-widest cursor-pointer text-surface"
        >
          <span>CLOSE</span>
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Lightbox Main Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-2 sm:left-6 z-10 w-12 h-12 rounded-full bg-surface/15 hover:bg-surface/35 text-surface flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
        </button>

        {/* Active Image Container */}
        <div className="max-w-5xl max-h-[75vh] flex flex-col items-center justify-center p-2">
          <img
            className="max-h-[72vh] w-auto max-w-full object-contain shadow-2xl border border-surface/20"
            alt={currentItem.alt}
            src={currentItem.highResImage || currentItem.image}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-2 sm:right-6 z-10 w-12 h-12 rounded-full bg-surface/15 hover:bg-surface/35 text-surface flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_right</span>
        </button>
      </div>

      {/* Lightbox Bottom Caption */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between text-surface-container-high font-label-caps text-xs uppercase tracking-wider border-t border-surface/15 pt-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
          <span className="font-headline-sm text-sm sm:text-base text-surface font-semibold">
            {currentItem.title}
          </span>
          <span className="text-secondary hidden sm:inline">—</span>
          <span className="text-primary-fixed-dim text-[11px] lowercase italic font-serif-accent">
            {currentItem.location}
          </span>
        </div>

        <span className="text-secondary mt-1 sm:mt-0 font-label-editorial text-xs italic">
          Archival Master File · Snapcrew Tirur Lab
        </span>
      </div>
    </div>
  );
};
