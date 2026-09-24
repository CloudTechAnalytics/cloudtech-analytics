# CloudTech Analytics — website

The official website for CloudTech Analytics, the parent company of The Counsel and The Manifest.

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · Lucide icons.

## Commands

```bash
npm install
npm run dev            # local development
npm run build          # typecheck + production build into dist/
npm run preview        # serve the production build
npm run brand:assets   # regenerate favicon PNGs, OG image and social profile image
```

## Before connecting the custom domain

1. Set `VITE_SITE_URL` (see `.env.example`) in your hosting provider, e.g. `https://www.your-domain.com`.
   This drives canonical URLs, Open Graph URLs and `sitemap.xml`. Without it, canonicals fall back to the
   current origin and no sitemap is generated.
2. Contact details and social links live in `src/lib/site.ts` (email, phone/WhatsApp, location, LinkedIn,
   X, Instagram).
3. `vercel.json` already rewrites all routes to `index.html` for client-side routing.

## Structure

```
src/
  components/   Navbar, Footer, CloudTechLogo, ProductCard, ServiceCard, SectionHeading,
                CTASection, PageHero, Reveal, HeroVisual, ProductPreview, Button, Layout
  sections/     Homepage sections (also reused on inner pages)
  pages/        Home, Products, Services, About, Insights, Contact, NotFound
  lib/          content.ts (all product/service copy), site.ts (email, links), seo.ts (per-route metadata)
public/
  brand/        Logo files: full lockup, mark, reversed, mono, brass, social profile PNG
```

Copy for products, services, industries and values lives in `src/lib/content.ts`. Training courses
(prices, durations, curricula), training numbers and partners live in `src/lib/training.ts`; they were carried
over from the previous site (github.com/CloudTechAnalytics/cloudtech-website). Partner logos are in
`public/partners/`.

## Contact form

The form has no backend. It validates the fields, then opens either a WhatsApp chat or an email draft with
the message pre-filled; the page says clearly that nothing is sent until the visitor sends it. Links like
`/contact?topic=Data%20Science%20course` pre-select the topic (used by the course pages).

## Brand

CloudTech shares its visual system with The Counsel and The Manifest:

- Type: Playfair Display at 600–700 for headlines, Inter for everything else (self-hosted via Fontsource).
- Colors: ivory `#F8F5EF`, ink `#171717`, brass `#B38A3E`. Buttons use brass-dark `#8C6A2C` so white text
  passes WCAG AA; large brass text uses `#A67E35`.
- Logo: the CloudTech mark (an open "C" with a data line to a connected node) set in a brass rounded tile, the same
  app-icon format the products use. Files are in `public/brand/`. The SVG lockups set their text in Playfair
  Display/Inter; for print or design tools, install those fonts or convert the text to outlines.
- Product pages follow each product's own look: The Counsel light, The Manifest dark.
