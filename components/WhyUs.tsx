import StatCounter from './StatCounter';
import { siteConfig } from '@/lib/site-config';

const points = [
  {
    title: 'Government Licensed Vendor',
    description: 'Operating under official licensing for solar rooftop installation in Uttarakhand.',
  },
  {
    title: 'End-to-End Subsidy Assistance',
    description: 'We manage applications under the government rooftop solar scheme on your behalf.',
  },
  {
    title: 'Certified Installation Team',
    description: 'Trained crews follow manufacturer specifications and electrical safety codes.',
  },
  {
    title: 'Premium Branded Components Only',
    description: 'Adani Solar, Waaree, Havells, Luminous, Polycab, KEI and Microtek \u2014 no unbranded parts.',
  },
  {
    title: 'Post-Installation Support & Monitoring',
    description: 'Ongoing maintenance, AMC options, and support long after commissioning.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-base-dark text-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-amber mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Built on Licensing, Not Just Promises
            </h2>
            <p className="text-white/60 mb-8">
              We&rsquo;re a government-licensed vendor with a track record across Uttarakhand &mdash; not a
              door-to-door reseller. Every installation follows the same certified process from survey to
              commissioning.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {siteConfig.stats.map((stat) => (
                <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-card border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <h3 className="font-display font-bold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-white/60">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
