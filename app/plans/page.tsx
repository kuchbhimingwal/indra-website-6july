import type { Metadata } from 'next';
import Plans from '@/components/Plans';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: '3kW, 4kW & 5kW Solar System Price in Uttarakhand',
  description:
    'Compare rooftop solar plans for Uttarakhand homes \u2014 3kW, 4kW and 5kW on-grid systems with premium components, subsidy assistance, and transparent pricing.',
  alternates: { canonical: '/plans' },
};

export default function PlansPage() {
  return (
    <>
      <div className="pt-16 pb-4 bg-base-light">
        <div className="container-xl">
          <p className="eyebrow mb-3">Rooftop Solar Plans</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Solar System Plans &amp; Pricing</h1>
          <p className="text-slate-body max-w-2xl">
            Transparent pre-subsidy pricing for 3kW, 4kW and 5kW on-grid rooftop solar systems, built with
            premium branded components and full government subsidy assistance.
          </p>
        </div>
      </div>
      <Plans />
      <Contact />
    </>
  );
}
