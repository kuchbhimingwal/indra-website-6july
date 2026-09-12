export const siteConfig = {
  name: 'Indra Solar Tech',
  tagline: 'conserve | sustain | flourish',
  domain: 'https://indrasolartech.in/', // TODO: replace with real production domain
  phone: '+91 88649 90963', // TODO: replace with real phone number
  whatsapp: 'https://wa.me/918864990963', // TODO: replace with real WhatsApp number
  email: 'contactindrasolartech@gmail.com', // TODO: replace with real email
  licenseNumber: '[PM Surya Ghar: Muft Bijli Yojana]',
  address: {
    street: '01 Shivalik view, jogiwala, nathanpur',
    city: 'Dehradun',
    state: 'Uttarakhand',
    postalCode: '248001',
    country: 'IN',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61570761295148',
    instagram: 'https://www.instagram.com/indrasolartech/',
    linkedin: '#',
    youtube: '#',
  },
  cities: [
    {
      name: 'Dehradun',
      blurb:
        'Rooftop solar for homes and businesses across Dehradun, from Rajpur Road to Sahastradhara, with local net-metering support.',
    },
    {
      name: 'Haridwar',
      blurb:
        'Licensed solar installation in Haridwar, including subsidy paperwork and DISCOM liaison for residential rooftops.',
    },
    {
      name: 'Rishikesh',
      blurb:
        'On-grid rooftop solar systems for Rishikesh homes and guesthouses, engineered for hill terrain and seasonal sun angles.',
    },
    {
      name: 'Haldwani',
      blurb:
        'End-to-end solar rooftop installation in Haldwani, from site survey to commissioning and after-sales AMC.',
    },
    {
      name: 'Roorkee',
      blurb:
        'Government-approved solar vendor services in Roorkee, covering system design, procurement, and installation.',
    },
    {
      name: 'Nainital',
      blurb:
        'Rooftop solar tailored to Nainital\u2019s hill-station homes, with structural assessments suited to local roof types.',
    },
    {
      name: 'Rudrapur',
      blurb: 'Solar panel installation and subsidy assistance for homes and industrial units in Rudrapur.',
    },
    {
      name: 'Kashipur',
      blurb: 'Trusted rooftop solar partner in Kashipur, with certified installation teams and warranty support.',
    },
  ],
  stats: [
    { label: 'Years of Experience', value: 5, suffix: '+' },
    { label: 'kW Installed', value: 50, suffix: '+' },
    { label: 'Installations Completed', value: 14, suffix: '+' },
    { label: 'Districts Served', value: 2, suffix: '+' },
  ],
  subsidyDeadline: '2027-03-31T23:59:59+05:30',
};

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    capacity: '3kW',
    price: 200000,
    popular: false,
    idealFor: 'Ideal for small households (2\u20133 BHK, average monthly bill up to \u20b93,000)',
    features: [
      'High-efficiency solar panels \u2014 Adani Solar or Waaree',
      'Premium wiring \u2014 Polycab or KEI',
      'Solar inverter \u2014 Havells or Microtek',
      'Heavy-duty GI hot-dip galvanized structure \u2014 Apollo APL',
      'Free site survey & load assessment',
      'Subsidy application assistance',
      'Standard warranty as per manufacturer terms',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    capacity: '4kW',
    price: 250000,
    popular: true,
    idealFor: 'Most popular \u2014 ideal for mid-size homes (3\u20134 BHK, average monthly bill up to \u20b94,500)',
    features: [
      'High-efficiency solar panels \u2014 Adani Solar or Waaree',
      'Premium wiring \u2014 Polycab, KEI, or Microtek',
      'Solar inverter \u2014 Luminous or Havells',
      'Heavy-duty GI hot-dip galvanized structure \u2014 Apollo APL',
      'Free site survey & load assessment',
      'End-to-end subsidy & net-metering assistance',
      'Standard warranty as per manufacturer terms',
      'Priority after-sales support',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    capacity: '5kW',
    price: 320000,
    popular: false,
    idealFor: 'Ideal for larger homes or homes with higher daytime consumption',
    features: [
      'High-efficiency solar panels \u2014 Adani Solar, Waaree, or Havells',
      'Premium wiring \u2014 Polycab, KEI, or Microtek',
      'Solar inverter \u2014 Havells, Luminous, Polycab, or Microtek',
      'Heavy-duty GI hot-dip galvanized structure \u2014 Apollo APL',
      'Free site survey & load assessment',
      'End-to-end subsidy & net-metering assistance',
      'Standard warranty as per manufacturer terms',
      'Priority after-sales support & annual health check',
    ],
  },
];

export const services = [
  {
    title: 'Free Site Survey & Load Assessment',
    description:
      'Our engineers visit your rooftop to assess shading, structural load, roof type, and your household\u2019s energy consumption before recommending a system size.',
  },
  {
    title: 'System Design & Engineering',
    description:
      'Custom system design matched to your roof geometry, sun exposure, and sanctioned load \u2014 sized to maximize generation and subsidy eligibility.',
  },
  {
    title: 'Government Subsidy & Paperwork Assistance',
    description:
      'We handle the application process under the government\u2019s rooftop solar subsidy scheme, subject to eligibility, so you don\u2019t have to navigate the forms alone.',
  },
  {
    title: 'Net-Metering & DISCOM Liaison',
    description:
      'We coordinate directly with your local electricity distribution company for net-metering approval and meter installation.',
  },
  {
    title: 'Procurement of Premium Components',
    description:
      'Panels, inverters, mounting structure, and wiring sourced from trusted brands \u2014 Adani Solar, Waaree, Havells, Polycab, KEI, Microtek, and Apollo APL.',
  },
  {
    title: 'Professional Installation',
    description:
      'Certified installation crews follow safety protocols and manufacturer specifications for a durable, code-compliant rooftop setup.',
  },
  {
    title: 'Testing & Commissioning',
    description:
      'Every system is tested end-to-end and commissioned with your DISCOM before we hand over the keys to your new solar plant.',
  },
  {
    title: 'After-Sales Maintenance & AMC',
    description:
      'Optional annual maintenance contracts keep panels clean, connections secure, and generation performance on track for years.',
  },
  {
    title: 'Warranty Support & Claims Assistance',
    description:
      'If something needs attention under manufacturer warranty, we manage the claims process on your behalf.',
  },
];

export const partners = [
  { name: 'Adani Solar', slug: 'adani-solar', logo: '/partners/adani-solar.png' },
  { name: 'Waaree', slug: 'waaree', logo: '/partners/waaree.png' },
  { name: 'ReNew', slug: 'renew', logo: '/partners/renew.png' },
  { name: 'Havells', slug: 'havells', logo: '/partners/havells.png' },
  { name: 'Luminous', slug: 'luminous', logo: '/partners/luminous.png' },
  { name: 'Polycab', slug: 'polycab', logo: '/partners/polycab.png' },
  { name: 'Microtek', slug: 'microtek', logo: '/partners/microtek.png' },
  { name: 'KEI', slug: 'kei', logo: '/partners/kei.png' },
  { name: 'Apollo APL Steel', slug: 'apollo-apl', logo: '/partners/apollo-apl.png' },
];

export const testimonials = [
  {
    name: 'Bir Singh Mingwal',
    city: 'Dehradun',
    rating: 5,
    quote:
      'The team handled our subsidy paperwork end-to-end and installation was finished in under a week. Our bill dropped noticeably from the first month.',
  },
  {
    name: 'Vivek Singh Bhandari',
    city: 'Dehradun',
    rating: 5,
    quote:
      'Professional site survey, clear pricing, and the crew was tidy and punctual. Would recommend to anyone considering rooftop solar.',
  },
  {
    name: 'Narayan Devi',
    city: 'Dehradun',
    rating: 4,
    quote:
      'Good after-sales support when we had a question about our inverter. Net metering approval took a bit of time but the team followed up with DISCOM for us.',
  },
  {
    name: 'Sarita Negi',
    city: 'Dehradun',
    rating: 5,
    quote:
      'Transparent about brand options for panels and inverters, and didn\u2019t push us toward the most expensive plan. Installation quality looks solid a year on.',
  },
  {
    name: 'Rajender Singh Bisht',
    city: 'Dehradun',
    rating: 5,
    quote:
      'Appreciated that they explained the government scheme clearly instead of promising exact subsidy figures. Everything they said matched what we later confirmed officially.',
  },
];

export const faqs = [
  {
    question: 'Am I eligible for the government rooftop solar subsidy?',
    answer:
      'Eligibility under the government\u2019s rooftop solar subsidy scheme depends on factors like your sanctioned electricity load, roof ownership, and whether you already have a solar system installed. Our team can assess your eligibility during the free site survey. Please verify current scheme rules on the official PM Surya Ghar Yojana portal before making a decision, as terms can change.',
  },
  {
    question: 'How does net metering work?',
    answer:
      'A net meter records both the electricity you draw from the grid and the surplus solar power you export back to it. Your monthly bill reflects the net difference between the two, so any extra solar units you generate can offset future consumption, subject to your DISCOM\u2019s policy.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Most residential rooftop systems (3\u20135kW) are installed within 3\u20137 days of material delivery, once the site survey, design approval, and any structural preparation are complete. Subsidy and net-metering approvals from government bodies can take longer and are outside our direct control.',
  },
  {
    question: 'What maintenance does a rooftop solar system need?',
    answer:
      'Rooftop systems are low-maintenance. We recommend periodic panel cleaning (especially after dust storms or monsoon), and an annual inspection of wiring, mounting structure, and inverter performance, which our optional AMC plans cover.',
  },
  {
    question: 'What happens on cloudy or rainy days?',
    answer:
      'Panels still generate power on cloudy days, though at reduced output compared to full sun. Because your system stays connected to the grid, you continue drawing normal power from DISCOM whenever solar generation is lower than your consumption.',
  },
  {
    question: 'Are financing or EMI options available?',
    answer:
      'We can connect you with financing partners and bank loan schemes commonly used for rooftop solar in India. Terms, interest rates, and eligibility are set by the respective lender, so we recommend comparing offers before committing.',
  },
  {
    question: 'What warranty comes with the system?',
    answer:
      'Warranty periods follow each component manufacturer\u2019s standard terms (panels, inverter, and structure each carry their own warranty duration). Ask our team for the specific warranty documentation for the brands included in your plan.',
  },
  {
    question: 'Do you handle the government paperwork for me?',
    answer:
      'Yes \u2014 subsidy application, DISCOM liaison, and net-metering paperwork are included as part of our end-to-end service, so you\u2019re not navigating multiple government portals on your own.',
  },
];
