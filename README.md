# Indra Solar Tech \u2014 Marketing Website

A modern, awwwards-style marketing website for Indra Solar Tech, a government-licensed rooftop solar
installation vendor serving Uttarakhand (Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee, Nainital and
nearby districts). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

Push this project to a Git repository and import it in Vercel \u2014 no extra configuration is required. Set
`domain` in `lib/site-config.ts` to your production URL before deploying so metadata, sitemap, and JSON-LD
are correct.

## Project Structure

```
app/                Route pages (App Router): /, /plans, /services, /about, /contact, /faq
  layout.tsx         Global metadata, fonts (next/font), JSON-LD LocalBusiness schema
  sitemap.ts          Generates sitemap.xml
  robots.ts           Generates robots.txt
components/          All UI sections and reusable components
lib/site-config.ts   Central content: contact details, cities, plans, services, FAQs, testimonials
public/              Logo, partner logo placeholders, static assets
```

## Things to Edit Before Launch

1. **Logo** \u2014 already placed at `public/logo.png` from the uploaded brand asset. Swap the file if you
   update your logo, keeping the filename or updating references in `components/Header.tsx` and
   `components/Footer.tsx`.

2. **Brand partner logos** \u2014 `components/PartnerLogo.tsx` currently renders text-based placeholder
   containers (and matching placeholder SVGs live in `public/partners/`) for Adani Solar, Waaree, ReNew,
   Havells, Luminous, Polycab, Microtek, KEI, and Apollo APL Steel. **Do not go live with any of these
   brand logos until you've confirmed an actual partnership or usage permission with each brand**, and
   have sourced the official logo file from their press/media kit page. Once approved, replace the text
   placeholder in `PartnerLogo.tsx` with a `next/image` referencing the licensed SVG/PNG.

3. **License / registration number** \u2014 set in `lib/site-config.ts` as `licenseNumber`. It currently
   shows `[Insert License/Registration No.]` in the footer and About page. Replace with your real
   government vendor license number.

4. **Contact form backend** \u2014 `components/ContactForm.tsx` is a working client-side form (with
   validation and a submit state) but does not currently send data anywhere. Wire it up by:
   - Creating an API route at `app/api/contact/route.ts` that accepts the POST body and forwards it via
     an email service such as [Resend](https://resend.com) or a form backend like
     [Formspree](https://formspree.io).
   - Updating the `handleSubmit` function in `ContactForm.tsx` to `fetch('/api/contact', { method: 'POST', body: ... })`
     instead of the current `setTimeout` stub.

5. **Contact details & office address** \u2014 update `phone`, `whatsapp`, `email`, and `address` in
   `lib/site-config.ts`.

6. **Google Maps embed** \u2014 `components/Contact.tsx` has a placeholder box marked `TODO`. Replace it
   with a real `<iframe>` embed for your office location.

7. **Subsidy figures & scheme language** \u2014 pricing in `lib/site-config.ts` (`plans`) is placeholder,
   pre-subsidy pricing. Subsidy language throughout the site is intentionally general
   (\u201Csubject to eligibility\u201D) and does not quote specific rupee subsidy amounts. Verify current
   PM Surya Ghar Yojana / Uttarakhand state scheme rules with official sources before publishing exact
   figures.

8. **OG / social share image** \u2014 metadata in `app/layout.tsx` references `/og-image.jpg`, which is not
   included. Add a 1200\u00d7630 image at `public/og-image.jpg` before launch.

9. **Testimonials** \u2014 all five testimonials in `lib/site-config.ts` are clearly marked as placeholder
   content. Replace with real customer reviews and ratings.

## SEO Notes

- Unique title/description per route, JSON-LD `HomeAndConstructionBusiness` schema in `app/layout.tsx`, and
  `FAQPage` schema in `components/FAQ.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt` automatically at build time.
- Target keyword clusters (solar installation Uttarakhand, PM Surya Ghar Yojana, city-specific subsidy
  terms, system pricing) are woven into headings, metadata, and the Areas We Serve section copy.

## Accessibility & Performance

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`).
- All images use `next/image` with descriptive alt text.
- Animations respect `prefers-reduced-motion` (see `app/globals.css`).
- Fonts loaded via `next/font/google` (Manrope for display, Inter for body) to avoid render-blocking
  requests \u2014 swap for self-hosted Fontshare faces (Clash Display / Satoshi) if you want an exact match
  to the original brief's typography suggestion.
