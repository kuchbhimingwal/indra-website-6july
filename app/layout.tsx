import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/site-config';

const display = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Govt. Licensed Solar Rooftop Installation, Uttarakhand`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Indra Solar Tech is a government-licensed rooftop solar installation vendor serving Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee & Nainital. Free site survey, subsidy assistance under PM Surya Ghar Yojana, and end-to-end installation.',
  keywords: [
    'solar panel installation Uttarakhand',
    'solar rooftop subsidy Uttarakhand',
    'govt approved solar vendor Uttarakhand',
    'PM Surya Ghar Yojana Uttarakhand',
    '3kW 4kW 5kW solar system price Uttarakhand',
    'solar panel installation cost India',
    'on-grid solar system Uttarakhand',
    'best solar company near me',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Govt. Licensed Solar Rooftop Installation, Uttarakhand`,
    description:
      'Government-licensed rooftop solar installation across Uttarakhand. Free site survey, subsidy assistance, and end-to-end service.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Govt. Licensed Solar Rooftop Installation, Uttarakhand`,
    description:
      'Government-licensed rooftop solar installation across Uttarakhand. Free site survey, subsidy assistance, and end-to-end service.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    description:
      'Government-licensed rooftop solar installation vendor serving Uttarakhand, India, including Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee and Nainital.',
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.domain}/logo.png`,
    priceRange: '\u20b9\u20b9',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      'Dehradun',
      'Haridwar',
      'Rishikesh',
      'Haldwani',
      'Roorkee',
      'Nainital',
      'Rudrapur',
      'Kashipur',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: '3kW Rooftop Solar System',
        priceCurrency: 'INR',
        price: '200000',
      },
      {
        '@type': 'Offer',
        name: '4kW Rooftop Solar System',
        priceCurrency: 'INR',
        price: '250000',
      },
      {
        '@type': 'Offer',
        name: '5kW Rooftop Solar System',
        priceCurrency: 'INR',
        price: '320000',
      },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
