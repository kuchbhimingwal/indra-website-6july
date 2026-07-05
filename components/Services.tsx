import ServiceCard from './ServiceCard';
import { services } from '@/lib/site-config';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-base-light">
      <div className="container-xl">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            End-to-End Rooftop Solar Service
          </h2>
          <p className="text-slate-body">
            From your first site visit to years of after-sales support, Indra Solar Tech manages every step
            of your rooftop solar installation in Uttarakhand.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
