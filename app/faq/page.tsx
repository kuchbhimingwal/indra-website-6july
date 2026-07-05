import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Rooftop Solar FAQ | Subsidy, Net Metering & Warranty',
  description:
    'Answers to common questions about rooftop solar in Uttarakhand \u2014 subsidy eligibility, net metering, installation timelines, maintenance and warranty.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-16 pb-4 bg-base-light">
        <div className="container-xl">
          <p className="eyebrow mb-3">FAQ</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
        </div>
      </div>
      <FAQ />
      <Contact />
    </>
  );
}
