import PartnerLogo from './PartnerLogo';
import { partners } from '@/lib/site-config';

export default function Partners() {
  const loop = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 md:py-20 bg-white border-y border-black/[0.06]">
      <div className="container-xl mb-10 text-center">
        <p className="eyebrow mb-2">Our Brand Partners</p>
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Proud to Work with India&rsquo;s Most Trusted Energy Brands
        </h2>
        <p className="text-xs text-slate-body/70 mt-3 max-w-xl mx-auto">
          
        </p>
      </div>

      <div className="relative overflow-hidden group">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((partner, i) => (
            <PartnerLogo key={`${partner.slug}-${i}`} name={partner.name} logo={partner.logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
