import { ButtonLink } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { Reveal } from "@/components/Reveal";
import { CloudTechMark } from "@/components/CloudTechLogo";
import { PRODUCTS } from "@/lib/content";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mt-[-68px] overflow-hidden pt-[68px] lg:mt-[-80px] lg:pt-[80px]">
      <div className="container-page grid items-center gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-6">
          <Reveal>
            {/* Same headline pattern as The Counsel and The Manifest: tracked kicker, bold serif, one brass phrase. */}
            <p className="kicker flex items-center gap-2.5">
              <CloudTechMark tone="brass" className="h-4 w-4" />
              Data · Software · AI · Business solutions
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.08] tracking-[-0.015em] text-ink min-[400px]:text-[2.9rem] sm:text-[3.3rem] xl:text-[3.6rem]"
            >
              We build technology that makes complex work <span className="text-brass-accent">simpler.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-[1.1875rem]">
              CloudTech Analytics combines data, software and AI to help organizations understand their operations,
              automate work and make better decisions.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/products">Explore our products</ButtonLink>
              <ButtonLink to="/contact" variant="secondary" arrow={false}>
                Work with CloudTech
              </ButtonLink>
            </div>
            <p className="mt-5 text-[0.875rem] text-subtle">
              Makers of{" "}
              {PRODUCTS.map((p, i) => (
                <span key={p.slug}>
                  {i > 0 && " and "}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brass-dark underline decoration-brass/40 underline-offset-2 hover:decoration-brass"
                  >
                    {p.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </span>
              ))}
              .
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={200} className="mx-auto w-full max-w-[420px] sm:max-w-[500px]">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FACTS = [
  { value: "2", label: "Products live: The Counsel and The Manifest" },
  { value: "3", label: "Service lines: data, software, and AI & automation" },
  { value: "250", label: "Professionals trained in data and AI" },
  { value: "Lagos", label: "Where CloudTech is based" },
];

/** Factual company summary, laid out like the stats row on The Counsel. No invented numbers. */
export function FactsStrip() {
  return (
    <section aria-label="CloudTech at a glance" className="border-y border-line bg-paper">
      <dl className="container-page grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
        {FACTS.map((f) => (
          <div key={f.value} className="flex flex-col-reverse justify-end">
            <dt className="mt-1.5 text-[0.9rem] leading-snug text-muted">{f.label}</dt>
            <dd className="font-serif text-[1.9rem] font-medium [font-variant-numeric:lining-nums] leading-none text-brass-accent sm:text-[2.2rem]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
