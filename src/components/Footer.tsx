import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CloudTechLogo } from "./CloudTechLogo";
import { PRODUCTS } from "@/lib/content";
import { COURSES } from "@/lib/training";
import { SITE, mailto, whatsapp } from "@/lib/site";

const COMPANY = [
  { to: "/about", label: "About" },
  { to: "/about#founder", label: "Founder and team" },
  { to: "/services", label: "Services" },
  { to: "/partner", label: "Partnerships" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const SOCIAL = [
  { href: SITE.linkedin, label: "LinkedIn" },
  { href: SITE.twitter, label: "X (Twitter)" },
  { href: SITE.instagram, label: "Instagram" },
];

function ColumnTitle({ children }: { children: string }) {
  return <h2 className="mb-5 text-[0.875rem] font-medium text-cream/50">{children}</h2>;
}

const linkCls = "link-underline text-[0.9375rem] text-cream/75 transition-colors hover:text-cream";

function External({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-1.5`}>
      {children}
      <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-brass-light" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-night text-cream">
      <div className="container-page pb-10 pt-16 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <CloudTechLogo tone="reversed" size="lg" />
            <p className="mt-7 max-w-sm text-[0.975rem] leading-relaxed text-cream/70">
              CloudTech Analytics builds technology, data and software solutions for businesses that want to work
              smarter, and trains the people who work with data.
            </p>
            <ul className="mt-7 space-y-2 text-[0.9375rem]">
              <li>
                <a href={mailto()} className="break-all text-cream hover:text-brass-light">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-brass-light">
                  {SITE.phone} <span className="text-cream/50">(WhatsApp)</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li className="text-cream/60">{SITE.location}</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8 lg:pl-10">
            <nav aria-label="Products">
              <ColumnTitle>Products</ColumnTitle>
              <ul className="space-y-3.5">
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <External href={p.href}>{p.name}</External>
                  </li>
                ))}
                <li>
                  <Link to="/products" className={linkCls}>
                    All products
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Training">
              <ColumnTitle>Training</ColumnTitle>
              <ul className="space-y-3.5">
                {COURSES.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/training/${c.slug}`} className={linkCls}>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <ColumnTitle>Company</ColumnTitle>
              <ul className="space-y-3.5">
                {COMPANY.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <ColumnTitle>Follow</ColumnTitle>
              <ul className="space-y-3.5">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <External href={s.href}>{s.label}</External>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/12 pt-8 text-[0.8125rem] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CloudTech Analytics. All rights reserved.</p>
          <p>Products by CloudTech Analytics</p>
        </div>
      </div>
    </footer>
  );
}
