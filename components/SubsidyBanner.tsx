import CountdownTimer from './CountdownTimer';
import { siteConfig } from '@/lib/site-config';

export default function SubsidyBanner() {
  return (
    <section className="relative overflow-hidden bg-sky-sun py-16 md:py-20">
      <div
        className="absolute inset-0 bg-grid-lines bg-[size:60px_60px] opacity-20"
        aria-hidden="true"
      />
      <div className="container-xl relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow !text-amber mb-3">Limited-Time Government Scheme</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Government Solar Subsidy Available
          </h2>
          <p className="text-white/70 max-w-xl mb-6">
            Homes across Uttarakhand can avail benefits under the government&rsquo;s rooftop solar subsidy
            scheme (PM Surya Ghar Yojana), subject to eligibility. Application windows and scheme terms are
            set by the government and may change &mdash; our team helps you check eligibility and apply before
            the current cycle closes.
          </p>
          <a href="#contact" className="btn-primary">
            Claim Your Subsidy Now
          </a>
        </div>
        <div className="lg:col-span-5">
          <CountdownTimer targetDate={siteConfig.subsidyDeadline} />
        </div>
      </div>
    </section>
  );
}
