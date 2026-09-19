import React from 'react';
import { INSTAGRAM_POSTS } from '../data';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="w-full py-20 lg:py-28 bg-surface-container-low border-y border-surface-container-highest/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
              <span className="font-label-caps text-xs tracking-widest text-primary uppercase font-bold">
                DIGITAL DISPATCH
              </span>
            </div>
            <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase font-bold tracking-tight">
              FOLLOW THE STORIES
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
              Live dispatches and raw behind-the-scenes on Instagram{' '}
              <a
                className="text-primary underline font-semibold hover:text-primary-container"
                href="https://www.instagram.com/snapcrew_studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @snapcrew_studio
              </a>
            </p>
          </div>

          <a
            className="px-6 sm:px-8 py-3 bg-inverse-surface text-inverse-on-surface hover:bg-primary-container font-label-caps text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2 shadow-sm"
            href="https://www.instagram.com/snapcrew_studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>FOLLOW @SNAPCREW_STUDIO</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_outward
            </span>
          </a>
        </div>

        {/* 6-Column Curated Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              className="group relative aspect-square overflow-hidden bg-surface-container border border-surface-container-highest/60 shadow-sm"
              href="https://www.instagram.com/snapcrew_studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={post.alt}
                src={post.img}
              />
              <div className="absolute inset-0 bg-inverse-surface/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-surface gap-1.5 p-3 text-center">
                <span className="material-symbols-outlined text-[28px] text-tertiary-fixed-dim">
                  photo_camera
                </span>
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-surface-container-high">
                  {post.tag}
                </span>
                <span className="font-label-caps text-[9px] text-surface/75">
                  ❤️ {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
