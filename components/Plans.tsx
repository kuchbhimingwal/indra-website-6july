import PricingCard from './PricingCard';
import { plans } from '@/lib/site-config';

export default function Plans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Rooftop Plans</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Solar Plans Built for Uttarakhand Homes
          </h2>
          <p className="text-slate-body">
            Every plan includes premium branded components and full subsidy assistance. Prices below are
            pre-subsidy placeholders &mdash; your final cost depends on your eligibility under the government
            scheme.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
