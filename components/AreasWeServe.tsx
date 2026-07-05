import { siteConfig } from '@/lib/site-config';

export default function AreasWeServe() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-base-light">
      <div className="container-xl">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Areas We Serve</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Rooftop Solar Installation Across Uttarakhand
          </h2>
          <p className="text-slate-body">
            As a government-approved solar vendor, we install and service rooftop systems throughout the
            region &mdash; wherever your roof is, our team can reach it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.cities.map((city) => (
            <div key={city.name} className="card p-6">
              <h3 className="font-display font-bold text-base-dark mb-2">{city.name}</h3>
              <p className="text-sm text-slate-body leading-relaxed">{city.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
