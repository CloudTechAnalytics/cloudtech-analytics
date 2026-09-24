export const SITE = {
  name: "CloudTech Analytics",
  email: "cloudtechanalytics.consultant@gmail.com",
  phone: "+234 911 559 1877",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "2349115591877",
  location: "Lagos, Nigeria",
  /** Production domain, set via VITE_SITE_URL once a custom domain is connected. */
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "",
  /** Social profiles carried over from the previous CloudTech site. */
  linkedin: "https://www.linkedin.com/company/108231854/",
  twitter: "https://twitter.com/cloudtechanalytics",
  instagram: "https://instagram.com/cloudtechanalytics",
  tagline: "Technology, data and software built for the way businesses actually work.",
} as const;

export const mailto = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${SITE.email}${query ? `?${query}` : ""}`;
};

export const whatsapp = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const NAV_LINKS = [
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;
