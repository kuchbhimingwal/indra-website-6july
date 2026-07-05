import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Free Solar Site Survey, Uttarakhand',
  description:
    'Get in touch with Indra Solar Tech for a free rooftop solar site survey and quote. Serving Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee and Nainital.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-16 pb-4 bg-base-light">
        <div className="container-xl">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Talk to Our Solar Team</h1>
          <p className="text-slate-body max-w-2xl">
            Request a free site survey, ask about subsidy eligibility, or get a quote for your rooftop.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
