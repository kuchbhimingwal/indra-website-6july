import { testimonials } from '@/lib/site-config';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-xl">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Customer Stories</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What Homeowners Say</h2>
          <p className="text-slate-body text-sm">
            
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 5).map((t) => (
            <div key={t.name} className="card p-7">
              <div className="flex gap-1 mb-4 text-amber" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < t.rating ? '\u2605' : '\u2606'}</span>
                ))}
              </div>
              <p className="text-sm text-slate-body leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-base-dark">{t.name}</p>
              <p className="text-xs text-slate-body/70">{t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
