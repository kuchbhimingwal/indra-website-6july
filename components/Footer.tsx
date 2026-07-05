import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-base-dark text-white/70">
      <div className="container-xl py-16 grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logo.png"
              alt="Indra Solar Tech logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-display font-bold text-white">Indra Solar Tech</span>
          </div>
          <p className="text-sm">{siteConfig.tagline}</p>
          <p className="text-xs mt-4 text-white/40">Govt. Licensed Vendor &mdash; {siteConfig.licenseNumber}</p>
        </div>

        <div>
          <h3 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-amber transition-colors">Services</Link></li>
            <li><Link href="/plans" className="hover:text-amber transition-colors">Plans</Link></li>
            <li><Link href="/about" className="hover:text-amber transition-colors">About</Link></li>
            <li><Link href="/faq" className="hover:text-amber transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wide">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Site Survey & Design</li>
            <li>Subsidy Assistance</li>
            <li>Net-Metering Liaison</li>
            <li>Installation & Commissioning</li>
            <li>Maintenance & AMC</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              {siteConfig.address.city}, {siteConfig.address.state}, India
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-amber transition-colors">FACEBOOK</a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-amber transition-colors">INSTAGRAM</a>
            {/* <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-amber transition-colors">LI</a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Indra Solar Tech. All rights reserved.</p>
          <p>Government Licensed Vendor &mdash; subsidy figures subject to official scheme eligibility.</p>
        </div>
      </div>
    </footer>
  );
}
