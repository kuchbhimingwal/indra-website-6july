import type { Metadata } from 'next';
import WhyUs from '@/components/WhyUs';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us | Govt. Approved Solar Vendor, Uttarakhand',
  description:
    'Indra Solar Tech is a government-licensed rooftop solar installation vendor serving Uttarakhand with certified installers and premium branded components.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-16 pb-16 bg-base-light">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">About Indra Solar Tech</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
              A Government-Licensed Solar Partner for Uttarakhand
            </h1>
            <p className="text-slate-body mb-4">
              Indra Solar Tech installs on-grid rooftop solar systems for homes and small businesses across
              Uttarakhand, including Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee and Nainital. We operate
              as a government-licensed vendor ({siteConfig.licenseNumber}), managing site survey, system
              design, subsidy applications, procurement, installation, and after-sales support under one
              roof.
            </p>
            <p className="text-slate-body">
              Our approach favours premium, branded components &mdash; Adani Solar, Waaree, Havells,
              Luminous, Polycab, KEI and Microtek &mdash; installed by certified crews, so your system is
              built to perform for its full warranty life.
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
      <Partners />
      <Testimonials />
      <Contact />
    </>
  );
}
