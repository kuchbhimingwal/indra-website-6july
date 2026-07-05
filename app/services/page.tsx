import type { Metadata } from 'next';
import Services from '@/components/Services';
import AreasWeServe from '@/components/AreasWeServe';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Solar Installation Services in Uttarakhand',
  description:
    'From free site survey to subsidy paperwork, net-metering liaison, installation, and after-sales AMC \u2014 explore our full rooftop solar service scope across Uttarakhand.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-16 pb-4 bg-base-light">
        <div className="container-xl">
          <p className="eyebrow mb-3">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Full-Scope Rooftop Solar Installation
          </h1>
          <p className="text-slate-body max-w-2xl">
            As a government-approved solar vendor, we manage every stage of your rooftop solar project so
            you don&rsquo;t have to coordinate multiple contractors or government portals yourself.
          </p>
        </div>
      </div>
      <Services />
      <AreasWeServe />
      <Contact />
    </>
  );
}
