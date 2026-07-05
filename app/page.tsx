import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SubsidyBanner from '@/components/SubsidyBanner';
import Services from '@/components/Services';
import Plans from '@/components/Plans';
import WhyUs from '@/components/WhyUs';
import Partners from '@/components/Partners';
import AreasWeServe from '@/components/AreasWeServe';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Govt. Licensed Solar Rooftop Installation in Uttarakhand',
  description:
    'Free site survey, subsidy assistance under the government rooftop solar scheme, and end-to-end installation for homes in Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee & Nainital.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubsidyBanner />
      <Services />
      <Plans />
      <WhyUs />
      <Partners />
      <AreasWeServe />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
