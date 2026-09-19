import React, { useState, useEffect } from 'react';
import { BookingEnquiry } from '../types';

interface BookingSectionProps {
  initialShootType?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialShootType = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    shootType: initialShootType,
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<BookingEnquiry | null>(null);

  useEffect(() => {
    if (initialShootType) {
      setFormData((prev) => ({
        ...prev,
        shootType: initialShootType,
      }));
    }
  }, [initialShootType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiry: BookingEnquiry = {
      id: `enq_${Date.now()}`,
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      shootType: formData.shootType,
      preferredDate: formData.preferredDate,
      message: formData.message,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedEnquiry(enquiry);

      // Save to localStorage for client persistence
      try {
        const existing = JSON.parse(localStorage.getItem('snapcrew_enquiries') || '[]');
        localStorage.setItem('snapcrew_enquiries', JSON.stringify([enquiry, ...existing]));
      } catch {
        // ignore storage errors
      }

      // Reset fields
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        shootType: '',
        preferredDate: '',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="booking" className="w-full py-20 lg:py-28 bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-tertiary-fixed-dim inline-block"></span>
            <span className="font-label-caps text-xs tracking-[0.25em] text-tertiary-fixed-dim uppercase font-bold">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="font-display-hero text-[2.5rem] sm:text-[3.75rem] md:text-[4.5rem] leading-[1] uppercase font-bold tracking-tight text-surface">
            YOUR STORY STARTS HERE.
          </h2>

          <p className="font-body-lg text-sm sm:text-base text-surface-container-highest max-w-xl mx-auto mt-4 font-light">
            Planning a wedding, portrait session, event, or creative commercial shoot? Let's create something worth remembering.
          </p>
        </div>

        {/* Interactive Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest/5 border border-surface/10 p-6 sm:p-10 md:p-12 backdrop-blur-sm shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-xs uppercase tracking-wider text-surface-container-high" htmlFor="form-name">
                FULL NAME *
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Rahul & Priya"
                className="w-full bg-inverse-surface border border-surface/20 text-surface px-4 py-3 outline-none focus:border-primary-container transition-all font-body-md text-sm placeholder:text-secondary"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-xs uppercase tracking-wider text-surface-container-high" htmlFor="form-phone">
                PHONE NUMBER *
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 90000 00000"
                className="w-full bg-inverse-surface border border-surface/20 text-surface px-4 py-3 outline-none focus:border-primary-container transition-all font-body-md text-sm placeholder:text-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-xs uppercase tracking-wider text-surface-container-high" htmlFor="form-email">
                EMAIL ADDRESS
              </label>
              <input
                id="form-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rahul@example.com"
                className="w-full bg-inverse-surface border border-surface/20 text-surface px-4 py-3 outline-none focus:border-primary-container transition-all font-body-md text-sm placeholder:text-secondary"
              />
            </div>

            {/* Type of Shoot */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-xs uppercase tracking-wider text-surface-container-high" htmlFor="form-shoot-type">
                TYPE OF SHOOT *
              </label>
              <select
                id="form-shoot-type"
                required
                value={formData.shootType}
                onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                className="w-full bg-inverse-surface border border-surface/20 text-surface px-4 py-3 outline-none focus:border-primary-container transition-all font-body-md text-sm cursor-pointer"
              >
                <option value="" disabled>Select shoot category...</option>
                <option value="Wedding Photography & Films">Wedding Photography & Films</option>
                <option value="Pre-Wedding Narrative">Pre-Wedding Narrative</option>
                <option value="Editorial Portrait Session">Editorial Portrait Session</option>
                <option value="Family / Cultural Event">Family / Cultural Event</option>
                <option value="Commercial / Architecture">Commercial / Architecture</option>
                <option value="Other Bespoke Requirement">Other Bespoke Requirement</option>
              </select>
            </div>
          </div>

          {/* Preferred Date */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-xs uppercase tracking-wider text-surface-container-high" htmlFor="form-date">
              PREFERRED DATE OR TIMEFRAME
            </label>
            <input
              id="form-date"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-inverse-surface border border-surface/20 text-surface px-4 py-3 outline-none focus:border-primary-container transition-all font-body-md text-sm"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-xs uppercase tracking-wider text-surface-container-high" htmlFor="form-message">
              TELL US ABOUT YOUR VISION & VENUE *
            </label>
            <textarea
              id="form-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about the ceremonies, location, guest size, or the aesthetic style you love..."
              className="w-full bg-inverse-surface border border-surface/20 text-surface px-4 py-3 outline-none focus:border-primary-container transition-all font-body-md text-sm placeholder:text-secondary resize-none"
            ></textarea>
          </div>

          {/* Submit Button & Feedback */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              id="submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 sm:px-12 py-3.5 bg-primary-container text-on-primary hover:bg-primary font-label-caps text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT ENQUIRY'}</span>
              <span className="material-symbols-outlined text-[18px]">
                {isSubmitting ? 'sync' : 'send'}
              </span>
            </button>

            <div className="text-surface-container-high font-body-sm text-xs text-center sm:text-right">
              <span>Direct studio phone:</span>
              <a className="font-bold text-surface hover:text-tertiary-fixed-dim ml-1.5 underline" href="tel:+919072123011">
                +91 90721 23011
              </a>
            </div>
          </div>

          {/* Confirmation Response Banner */}
          {submittedEnquiry && (
            <div className="p-5 bg-surface text-on-surface border-l-4 border-primary mt-6 shadow-md animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-primary font-bold font-label-caps text-xs uppercase">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>THANK YOU. ENQUIRY RECEIVED FOR {submittedEnquiry.fullName.toUpperCase()}</span>
              </div>
              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Snapcrew Studio (Tirur) has recorded your request for <strong>{submittedEnquiry.shootType || 'your project'}</strong>. Our studio manager will verify date availability and reach out via WhatsApp at <strong>{submittedEnquiry.phone}</strong> shortly.
              </p>
            </div>
          )}
        </form>

        {/* Direct Contact Bar */}
        <div className="mt-12 p-4 bg-surface-container-lowest/5 border border-surface/10 flex flex-wrap items-center justify-around gap-4 font-label-caps text-xs uppercase tracking-widest text-surface-container-high">
          <a className="flex items-center gap-2 hover:text-surface transition-colors" href="tel:+919072123011">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
              phone_iphone
            </span>
            <span>+91 90721 23011</span>
          </a>
          <span className="text-surface/30">•</span>
          <a
            className="flex items-center gap-2 hover:text-surface transition-colors"
            href="https://www.instagram.com/snapcrew_studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
              photo_camera
            </span>
            <span>@SNAPCREW_STUDIO</span>
          </a>
          <span className="text-surface/30">•</span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
              place
            </span>
            <span>PAYYANANGADI · TIRUR</span>
          </span>
        </div>
      </div>
    </section>
  );
};
