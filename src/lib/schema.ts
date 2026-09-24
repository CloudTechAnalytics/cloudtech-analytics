/**
 * schema.org structured data. It tells search engines what the site describes
 * (a company, its founder, its products and its courses) so results can show
 * the right name, logo, prices and links.
 */
import { SITE } from "./site";
import { PRODUCTS } from "./content";
import type { Course } from "./training";
import { FOUNDER } from "./team";

const ORG_ID = `${SITE.url}/#organization`;
const FOUNDER_ID = `${SITE.url}/about#founder`;

/** Included on every page. */
export function sitewideJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "EducationalOrganization"],
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: "CloudTech",
      url: `${SITE.url}/`,
      logo: `${SITE.url}/icon-512.png`,
      image: `${SITE.url}/og-image.png`,
      description:
        "CloudTech Analytics is a technology company, product studio and training provider in Lagos, Nigeria. It builds The Counsel and The Manifest, delivers data, software and AI services, and runs courses in data analytics, data science and AI.",
      email: SITE.email,
      telephone: SITE.phone,
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressRegion: "Lagos", addressCountry: "NG" },
      areaServed: "NG",
      founder: { "@id": FOUNDER_ID },
      sameAs: [SITE.linkedin],
      knowsAbout: ["Data analytics", "Business intelligence", "Power BI", "SQL", "Software development", "AI automation", "Legal technology", "Logistics software"],
      owns: PRODUCTS.map((p) => ({ "@type": "SoftwareApplication", name: p.name, url: p.href })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: `${SITE.url}/`,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-NG",
    },
  ];
}

export function breadcrumbs(items: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE.url}${path}`,
    })),
  };
}

export function productsJsonLd() {
  return PRODUCTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    url: p.href,
    description: `${p.description} ${p.longDescription}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: p.slug === "counsel" ? "Legal practice management" : "Freight and logistics management",
    operatingSystem: "Web",
    featureList: p.modules.map((m) => m.name),
    publisher: { "@id": ORG_ID },
    ...(p.slug === "counsel"
      ? { offers: { "@type": "Offer", price: "0", priceCurrency: "NGN", description: "30-day free trial, no card required" } }
      : {}),
  }));
}

const naira = (price: string) => price.replace(/[^\d]/g, "");
const months = (duration: string) => `P${duration.match(/\d+/)?.[0] ?? "1"}M`;

export function courseJsonLd(c: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.programme,
    description: `${c.tagline} ${c.overview}`,
    url: `${SITE.url}/training/${c.slug}`,
    provider: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, sameAs: `${SITE.url}/` },
    inLanguage: "en",
    teaches: c.learn,
    educationalCredentialAwarded: "Certificate of completion",
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: naira(c.price),
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/training/${c.slug}`,
    },
    timeRequired: months(c.duration),
    // Classes run live, online or in person ("Blended"). No schedule is given because none is published yet.
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      location: { "@type": "Place", name: "Lagos, Nigeria", address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" } },
    },
  };
}

export function coursesListJsonLd(courses: Course[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/training/${c.slug}`,
      name: c.programme,
    })),
  };
}

export function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER.name,
    jobTitle: "Founder",
    image: `${SITE.url}${FOUNDER.photo}`,
    worksFor: { "@id": ORG_ID },
    knowsAbout: FOUNDER.focus,
    sameAs: FOUNDER.links.map((l) => l.href),
    alumniOf: { "@type": "CollegeOrUniversity", name: "Ladoke Akintola University of Technology" },
  };
}
