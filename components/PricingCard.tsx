'use client';

import { motion } from 'framer-motion';

type Plan = {
  id: string;
  name: string;
  capacity: string;
  price: number;
  popular: boolean;
  idealFor: string;
  features: string[];
};

export default function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative rounded-card p-8 flex flex-col ${
        plan.popular
          ? 'bg-base-dark text-white border-2 border-amber shadow-[0_16px_48px_-12px_rgba(245,166,35,0.4)] lg:-translate-y-4'
          : 'card'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-amber px-4 py-1 text-xs font-bold text-base-dark">
          Most Popular
        </span>
      )}
      <p className={`eyebrow mb-2 ${plan.popular ? '!text-amber' : ''}`}>{plan.capacity} System</p>
      <h3 className={`text-2xl font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-base-dark'}`}>
        {plan.name}
      </h3>
      <p className={`text-sm mb-6 ${plan.popular ? 'text-white/60' : 'text-slate-body'}`}>{plan.idealFor}</p>

      <div className="mb-6">
        <span className={`text-4xl font-extrabold font-display ${plan.popular ? 'text-white' : 'text-base-dark'}`}>
          &#8377;{plan.price.toLocaleString('en-IN')}
        </span>
        <p className={`text-xs mt-1 ${plan.popular ? 'text-white/50' : 'text-slate-body/70'}`}>
          Pre-subsidy price &mdash; ₹85,800 subsidy applied separately based on eligibility
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm">
            <span className={plan.popular ? 'text-amber' : 'text-forest'}>&#10003;</span>
            <span className={plan.popular ? 'text-white/80' : 'text-slate-body'}>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#contact" className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
        Get This Plan
      </a>
    </motion.div>
  );
}
