import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FutureProductCard, ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { INDUSTRIES, PRINCIPLES, PRODUCTS, SERVICES, VALUES } from "@/lib/content";
import { COURSES } from "@/lib/training";
import { PartnerLogos } from "@/components/Training";
import { FOUNDER } from "@/lib/team";

function TextLink({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink hover:text-brass-dark">
      {children}
      <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function ProductsSection() {
  return (
    <section aria-labelledby="products-title" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="products-title"
            title="Products built for real work."
            intro="CloudTech builds focused software for businesses and industries with complex workflows."
          />
          <Reveal>
            <TextLink to="/products">View all products</TextLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
          <Reveal className="lg:col-span-2">
            <FutureProductCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="border-t border-line bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          title="Technology built around your business."
          intro="We also take on client work: reporting and analytics, custom software, and automation."
        />
        <div className="mt-16 grid gap-14 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 120} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrainingSection() {
  return (
    <section aria-labelledby="training-title" className="border-t border-line py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            id="training-title"
            title="Training in data and AI."
            intro="We also teach the skills we use every day. Our courses run live, in small batches, and end with a real project."
          />
          <Reveal delay={100} className="mt-8">
            <TextLink to="/training">See all courses</TextLink>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <ul className="border-t border-ink/80">
            {COURSES.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 60} className="border-b border-line">
                <Link
                  to={`/training/${c.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5 sm:grid-cols-[1fr_auto_auto]"
                >
                  <span className="font-serif text-[1.4rem] leading-tight group-hover:text-brass-dark sm:text-[1.6rem]">
                    {c.title}
                  </span>
                  <span className="text-right text-[0.875rem] text-muted sm:order-none">{c.duration}</span>
                  <span className="col-span-2 text-[0.9375rem] text-ink/80 [font-variant-numeric:lining-nums] sm:col-span-1 sm:text-right">
                    {c.price}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="mt-10">
            <p className="text-[0.875rem] text-muted">Training partners</p>
            <PartnerLogos className="mt-4" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  return (
    <section aria-labelledby="principles-title" className="bg-night py-24 text-cream sm:py-32 lg:py-36">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2
              id="principles-title"
              className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.02em] sm:text-[3rem] lg:text-[3.3rem]"
            >
              Built from the problem outward.
            </h2>
            <p className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-cream/70">
              We start by understanding the workflow, the people, the data and the problem. Then we build the technology
              around it.
            </p>
          </div>
        </Reveal>

        <ol className="lg:col-span-7">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              as="li"
              key={p.index}
              delay={i * 100}
              className="grid grid-cols-[3rem_1fr] gap-4 border-t border-cream/15 py-10 last:border-b sm:grid-cols-[4.5rem_1fr] sm:py-12"
            >
              <span aria-hidden className="pt-2 font-serif text-[1.25rem] text-brass-light sm:pt-3">
                {p.index}
              </span>
              <div>
                <h3 className="font-serif text-[1.75rem] leading-tight sm:text-[2.25rem]">{p.title}</h3>
                <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-cream/65 sm:text-[1.0625rem]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function IndustriesSection({ className = "" }: { className?: string }) {
  return (
    <section aria-labelledby="industries-title" className={`py-24 sm:py-32 ${className}`}>
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading
            id="industries-title"
            title="Where we work"
            intro="The sectors our products and services are built for."
          />
        </div>
        <ul className="border-t border-ink/80 lg:col-span-8">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              as="li"
              key={ind.name}
              delay={i * 60}
              className="grid gap-1 border-b border-line py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6 sm:py-7"
            >
              <span className="font-serif text-[1.5rem] leading-tight text-ink sm:text-[2rem]">{ind.name}</span>
              <span className="text-[0.875rem] text-muted sm:text-right">{ind.note}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutSection({ withLink = true }: { withLink?: boolean }) {
  return (
    <section aria-labelledby="about-title" className="border-t border-line bg-paper py-24 sm:py-32">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading id="about-title" title="From data to technology." />
        </div>
        <div className="lg:col-span-7">
          <Reveal className="space-y-5 text-[1.0625rem] leading-relaxed text-muted">
            <p>
              CloudTech Analytics began with a foundation in data and analytics, helping organizations understand their
              information and make better decisions.
            </p>
            <p>
              That foundation has grown into something broader: building software, automation and technology solutions
              around the operational problems businesses face every day.
            </p>
            <p className="text-ink">
              Today, CloudTech is a technology company, product studio, training provider and consulting partner, based in
              Lagos, Nigeria.
            </p>
          </Reveal>
          {withLink && (
            <Reveal delay={120} className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <Link to="/about#founder" className="group flex items-center gap-4">
                <img
                  src={FOUNDER.photo}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full border border-line-strong object-cover object-top"
                />
                <span>
                  <span className="block font-serif text-[1.15rem] group-hover:text-brass-dark">{FOUNDER.name}</span>
                  <span className="text-[0.875rem] text-muted">Meet the founder</span>
                </span>
              </Link>
              <TextLink to="/about">More about CloudTech</TextLink>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export function ValuesSection({ className = "" }: { className?: string }) {
  return (
    <section aria-labelledby="values-title" className={`py-24 sm:py-28 ${className}`}>
      <div className="container-page">
        <Reveal>
          <h2 id="values-title" className="font-serif text-[1.9rem] leading-tight sm:text-[2.2rem]">
            What we value
          </h2>
        </Reveal>
        <dl className="mt-10 grid gap-x-10 border-t border-ink/80 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.name} delay={i * 80} className="border-b border-line py-7 lg:border-b-0 lg:py-9">
              <dt className="font-serif text-[1.6rem] leading-none">{v.name}</dt>
              <dd className="mt-3 text-[0.975rem] leading-relaxed text-muted">{v.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
