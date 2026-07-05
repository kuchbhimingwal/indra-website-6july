'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Plans', href: '/#plans' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Partners', href: '/#partners' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-base-light/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,15,13,0.06)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Indra Solar Tech logo, government-licensed solar rooftop installation vendor"
            width={scrolled ? 40 : 48}
            height={scrolled ? 40 : 48}
            className="transition-all duration-300 object-contain"
            priority
          />
          <span className="font-display font-bold text-base-dark leading-tight hidden sm:block">
            Indra Solar Tech
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-body hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="/#contact" className="btn-primary">
            Get Free Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 bg-base-dark transition-transform ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`block h-0.5 w-6 bg-base-dark transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 bg-base-dark transition-transform ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-base-light border-t border-black/[0.06]"
          >
            <nav className="container-xl flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base font-medium text-base-dark border-b border-black/[0.04] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-4 w-full">
                Get Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
