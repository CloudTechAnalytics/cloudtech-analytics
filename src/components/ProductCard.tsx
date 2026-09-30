import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/content";
import { CounselPreview, ManifestPreview } from "./ProductPreview";
import { ProductMark } from "./CloudTechLogo";

/**
 * Product cards share one light style, so the products read as a matching pair.
 * Each shows a small fragment of its own interface.
 */
export function ProductCard({ product }: { product: Product }) {
  const [before, accent, after] = product.headline;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-strong bg-paper text-ink transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_40px_70px_-45px_rgba(23,23,23,0.4)]">
      <div className="relative flex flex-1 flex-col p-7 sm:p-10">
        <div className="flex items-center gap-3.5">
          <ProductMark product={product.slug} className="h-11 w-11 shrink-0" />
          <div>
            <h3 className="font-serif text-[1.45rem] font-bold leading-none">{product.name}</h3>
            <p className="mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-brass-dark">
              {product.label}
            </p>
          </div>
        </div>

        <p className="mt-8 font-serif text-[1.9rem] font-medium leading-[1.12] tracking-[-0.01em] sm:text-[2.3rem]">
          {before}
          <span className="text-brass-accent">{accent}</span>
          {after}
        </p>
        <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-muted">{product.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${product.name} features`}>
          {product.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line-strong bg-ivory px-3 py-1 text-[0.75rem] text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mb-9 mt-9">{product.slug === "manifest" ? <ManifestPreview /> : <CounselPreview />}</div>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-6">
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold after:absolute after:inset-0 after:content-['']"
          >
            {product.cta}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brass text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

export function FutureProductCard({ className = "" }: { className?: string }) {
  return (
    <article
      className={`flex flex-col gap-5 rounded-2xl border border-dashed border-line-strong bg-paper p-7 sm:flex-row sm:items-center sm:p-9 ${className}`}
    >
      <span
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dashed border-brass/60 text-[1.4rem] leading-none text-brass-dark"
      >
        +
      </span>
      <div>
        <h3 className="font-serif text-[1.4rem] leading-tight">More products in development</h3>
        <p className="mt-1.5 max-w-2xl text-[0.975rem] leading-relaxed text-muted">
          CloudTech is continuously developing focused software for businesses with complex operational workflows.
        </p>
      </div>
    </article>
  );
}
