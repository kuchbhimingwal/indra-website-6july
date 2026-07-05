import FAQItem from './FAQItem';
import { faqs } from '@/lib/site-config';

export default function FAQ() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-base-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Common Questions</h2>
          <p className="text-slate-body">
            Answers to what homeowners typically ask before going solar. For anything specific to your
            property, a free site survey is the best next step.
          </p>
        </div>
        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
