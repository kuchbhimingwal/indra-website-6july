import ContactForm from './ContactForm';
import { siteConfig } from '@/lib/site-config';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get a Free Site Survey &amp; Quote
          </h2>
          <p className="text-slate-body mb-8">
            Share a few details and our team will schedule a free rooftop assessment and walk you through
            subsidy eligibility, plan options, and next steps.
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-sm">
              <span className="font-semibold text-base-dark">Phone: </span>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-forest">{siteConfig.phone}</a>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-base-dark">Email: </span>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-forest">{siteConfig.email}</a>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-base-dark">Service Area: </span>
              Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee, Nainital &amp; nearby districts
            </p>
          </div>

          <a
            href={siteConfig.whatsapp}
            className="inline-flex items-center gap-2 rounded-pill bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-light transition-colors"
          >
            Chat on WhatsApp
          </a>

          <div className="mt-10 aspect-video w-full overflow-hidden rounded-card border border-black/[0.06]">
            {/* TODO: Replace with a real Google Maps embed for the office location */}
            <div className="flex h-full w-full items-center justify-center bg-base-light text-sm text-slate-body/60">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.4909732952217!2d78.06836880000002!3d30.289092500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390928e321fa8a11%3A0xe41db3a2f980c060!2s31%2C%20Massoori%20Bypass%20Ring%20Rd%2C%20Jogiwala%2C%20Dehradun%2C%20Uttarakhand%20248014!5e1!3m2!1sen!2sin!4v1783073229315!5m2!1sen!2sin" width="400" height="300"  loading="lazy"></iframe>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
