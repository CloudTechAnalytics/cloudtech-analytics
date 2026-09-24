import { Link } from "react-router";
import { useSeo } from "@/lib/seo";
import { SERVICES } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { IndustriesSection } from "@/sections/HomeSections";

export default function Services() {
  useSeo({
    title: "Services | Data, Software Engineering & AI | CloudTech Analytics",
    description:
      "Data & analytics, software engineering, and AI & automation services from CloudTech Analytics, built around the way your organization actually works.",
  });

  return (
    <>
      <PageHero
        title="Technology built around your business."
        intro="Alongside our own products, we work with organizations on their reporting, their internal software and the manual work that slows them down."
      />

      <nav aria-label="Services on this page" className="sticky top-[68px] z-30 border-b border-line bg-ivory/95 backdrop-blur-md lg:top-[80px]">
        <ul className="container-page flex gap-6 overflow-x-auto py-3.5 text-[0.875rem] scrollbar-none sm:gap-10">
          {SERVICES.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="text-muted hover:text-ink">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-title`}
          className={`py-20 sm:py-28 ${i % 2 === 1 ? "bg-paper" : ""} ${i > 0 ? "border-t border-line" : ""}`}
        >
          <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-6">
              <h2 id={`${s.id}-title`} className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.2rem]">
                {s.title}
              </h2>
              <p className="mt-5 font-serif text-[1.3rem] leading-snug text-ink/85">{s.summary}</p>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">{s.detail}</p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <h3 className="text-[0.9375rem] font-medium text-muted">What this includes</h3>
              <ul className="mt-4 border-t border-ink/80">
                {s.capabilities.map((c) => (
                  <li key={c} className="border-b border-line py-3.5 text-[1rem]">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <IndustriesSection className="border-t border-line" />

      <section aria-label="Our products" className="border-t border-line bg-paper py-16">
        <Reveal className="container-page">
          <p className="max-w-3xl font-serif text-[1.5rem] leading-snug sm:text-[1.9rem]">
            The Counsel and The Manifest were built the same way we approach client work.{" "}
            <Link to="/products" className="text-brass-dark underline decoration-brass/50 underline-offset-4 hover:decoration-brass">
              See our products
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
