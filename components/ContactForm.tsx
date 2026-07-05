'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  // Redirects to WhatsApp with the form details pre-filled as a message.
  // TODO: replace this number with your real WhatsApp number (country code, no + or spaces).
  const WHATSAPP_NUMBER = '918864990963';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const city = data.get('city');
    const message = data.get('message');

    const text =
      `New quote request:%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Email: ${email}%0A` +
      `City: ${city}%0A` +
      `Message: ${message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center">
        <p className="font-display font-bold text-lg mb-2">Almost there &mdash; one tap to go!</p>
        <p className="text-sm text-slate-body">
          We&rsquo;ve opened WhatsApp with your details ready. Just hit send, and we&rsquo;ll be with you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-base-dark mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="w-full rounded-[10px] border border-black/10 bg-base-light px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-base-dark mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            className="w-full rounded-[10px] border border-black/10 bg-base-light px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
            placeholder="+91"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-base-dark mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-[10px] border border-black/10 bg-base-light px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-base-dark mb-1.5">
            City
          </label>
          <input
            id="city"
            name="city"
            required
            type="text"
            className="w-full rounded-[10px] border border-black/10 bg-base-light px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
            placeholder="Dehradun"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-base-dark mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-[10px] border border-black/10 bg-base-light px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
          placeholder="Tell us about your rooftop and average monthly electricity bill"
        />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
        {status === 'submitting' ? 'Sending...' : 'Get Free Quote'}
      </button>

      <div className="flex items-start gap-3 rounded-[10px] border border-forest/15 bg-forest/5 px-4 py-3.5">
        <svg
          className="mt-0.5 h-5 w-5 shrink-0 text-forest"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.7 4.28 3.79.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.28Z" />
        </svg>
        <p className="text-xs text-slate-body leading-relaxed">
          <span className="font-semibold text-forest">One tap and we&rsquo;re connected.</span> Hitting{' '}
          <span className="font-semibold">Get Free Quote</span> opens WhatsApp with all your details
          already typed out for us &mdash; just press send, and we&rsquo;ll reach out to you shortly. No
          long forms, no waiting on email.
        </p>
      </div>
    </form>
  );
}