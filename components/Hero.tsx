'use client';

import { motion } from 'framer-motion';

const badges = ['Govt. Licensed Vendor', 'PM Surya Ghar Empanelled', '500+ Installations'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-base-light pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 bg-grid-lines bg-[size:80px_80px] animate-grid-pan opacity-60"
        aria-hidden="true"
      />
      {/* Sun-glow blobs */}
      <motion.div
        className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-amber/30 blur-[100px] animate-blob-slow"
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/3 left-[-15%] h-[380px] w-[380px] rounded-full bg-forest/20 blur-[110px] animate-blob-slow"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />

      <div className="container-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5"
            >
              Government-Licensed Solar Vendor &mdash; Uttarakhand
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[42px] leading-[1.05] sm:text-6xl md:text-[72px] font-extrabold tracking-tight text-base-dark"
            >
              Power Your Home with{' '}
              <span className="bg-sun-teal bg-clip-text text-transparent">Uttarakhand&rsquo;s</span> Trusted
              Solar Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-slate-body"
            >
              End-to-end rooftop solar installation for Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee and
              Nainital &mdash; from free site survey to subsidy paperwork, net-metering, and after-sales care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Get a Free Site Survey
              </a>
              <a href="#plans" className="btn-secondary">
                View Plans
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-pill border border-forest/20 bg-forest/5 px-4 py-2 text-xs font-semibold text-forest"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-card bg-sky-sun p-1 shadow-2xl">
              <div className="h-full w-full rounded-[12px] bg-base-dark/40 backdrop-blur-sm flex flex-col justify-end p-8">
                <p className="text-white/80 text-sm eyebrow !text-amber mb-2">On Every Rooftop</p>
                <p className="text-white text-2xl font-display font-bold leading-snug">
                  Solar panels engineered for Uttarakhand&rsquo;s sun, terrain and seasons.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
