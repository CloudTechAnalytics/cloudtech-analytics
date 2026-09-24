import { ArrowUpRight, Check } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { breadcrumbs, productsJsonLd } from "@/lib/schema";
import { PRODUCTS, type Product } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { CloudTechLogo, ProductMark } from "@/components/CloudTechLogo";
import { FutureProductCard } from "@/components/ProductCard";
import { CounselPreview, ManifestPreview } from "@/components/ProductPreview";
import { CTASection } from "@/components/CTASection";

/** Parent → product relationship, drawn as a simple family tree. */
function BrandFamily() {
  return (
    <div aria-hidden className="rounded-2xl border border-line bg-paper p-6 shadow-[0_24px_48px_-36px_rgba(23,23,23,0.35)]">
      <div className="flex justify-center">
        <CloudTechLogo size="sm" />
      </div>
      <div className="relative mx-auto mt-4 h-8 w-1/2">
        <span className="absolute left-1/2 top-0 h-4 w-px bg-brass" />
        <span className="absolute inset-x-0 top-4 h-px bg-brass" />
        <span className="absolute left-0 top-4 h-4 w-px bg-brass" />
        <span className="absolute right-0 top-4 h-4 w-px bg-brass" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {PRODUCTS.map((p) => (
          <div key={p.slug} className="flex items-center gap-2.5 rounded-xl border border-line bg-ivory p-2.5">
            <ProductMark product={p.slug} className="h-8 w-8 shrink-0" />
            <span className="font-serif text-[0.95rem] font-bold leading-tight">{p.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 rounded-xl border border-dashed border-line-strong py-2 text-center text-[0.75rem] text-subtle">
        Future CloudTech products
      </p>
    </div>
  );
}

/** The Counsel is presented light and The Manifest dark, as on their own sites. */
function ProductFeature({ product }: { product: Product }) {
  const dark = product.slug === "manifest";
  const [before, accent, after] = product.headline;
  return (
    <section
      id={product.slug}
      aria-labelledby={`${product.slug}-title`}
      className={`py-24 sm:py-32 ${dark ? "bg-night-2 text-cream" : "border-t border-line"}`}
    >
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3.5">
              <ProductMark product={product.slug} className="h-12 w-12 shrink-0" />
              <div>
                <h2 id={`${product.slug}-title`} className="font-serif text-[1.75rem] leading-none">
                  {product.name}
                </h2>
                <p
                  className={`mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] ${
                    dark ? "text-brass-light" : "text-brass-dark"
                  }`}
                >
                  {product.label}
                </p>
              </div>
            </div>
            <p className="mt-9 font-serif text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">
              {before}
              <span className={dark ? "text-brass-light" : "text-brass-accent"}>{accent}</span>
              {after}
            </p>
            <p className={`mt-6 max-w-xl text-[1.0625rem] leading-relaxed ${dark ? "text-cream/70" : "text-muted"}`}>
              {product.longDescription}
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.facts.map((f) => (
                <li key={f} className={`flex items-start gap-2.5 text-[0.9375rem] ${dark ? "text-cream/85" : "text-ink/85"}`}>
                  <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink to={product.href} external>
                {product.cta}
              </ButtonLink>
              <p className={`text-[0.875rem] ${dark ? "text-cream/55" : "text-subtle"}`}>Built for {product.audience.toLowerCase()}.</p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <div className="mx-auto max-w-md lg:mr-0">{dark ? <ManifestPreview /> : <CounselPreview />}</div>
          </Reveal>
          <Reveal delay={160}>
            <h3 className={`mt-14 text-[0.9375rem] font-medium ${dark ? "text-cream/60" : "text-muted"}`}>What it covers</h3>
            <ul className={`mt-4 border-t ${dark ? "border-cream/20" : "border-ink/70"}`}>
              {product.modules.map((m) => (
                <li
                  key={m.name}
                  className={`grid gap-1 border-b py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 ${dark ? "border-cream/10" : "border-line"}`}
                >
                  <span className="font-serif text-[1.1rem] leading-snug">{m.name}</span>
                  <span className={`text-[0.9375rem] leading-relaxed ${dark ? "text-cream/65" : "text-muted"}`}>{m.detail}</span>
                </li>
              ))}
            </ul>
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex items-center gap-1.5 text-[0.875rem] ${
                dark ? "text-cream/70 hover:text-brass-light" : "text-muted hover:text-ink"
              }`}
            >
              {product.href.replace(/^https:\/\//, "").split("/")[0]}
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  useSeo({
    title: "The Counsel and The Manifest | Software by CloudTech Analytics",
    description:
      "The Counsel is legal practice management software for law firms in Nigeria. The Manifest is operations software for freight forwarders. Both are built by CloudTech Analytics.",
    jsonLd: [...productsJsonLd(), breadcrumbs([["Home", "/"], ["Products", "/products"]])],
  });

  return (
    <>
      <PageHero
        title="Software for industries with complex workflows."
        intro="Each product is built for one industry and has its own name and look. All of them are designed, built and supported by CloudTech."
        aside={<BrandFamily />}
      />
      {PRODUCTS.map((p) => (
        <ProductFeature key={p.slug} product={p} />
      ))}
      <section aria-label="Future products" className="border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <FutureProductCard />
          </Reveal>
        </div>
      </section>
      <CTASection
        title="Need software shaped around your own workflow?"
        body="We build custom software for client workflows too. Tell us what you're trying to improve."
      />
    </>
  );
}
