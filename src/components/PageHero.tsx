import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Header block for inner pages. */
export function PageHero({ title, intro, aside }: { title: ReactNode; intro?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="border-b border-line">
      <div className="container-page grid gap-10 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-12 lg:items-end lg:pb-24 lg:pt-28">
        <Reveal className="lg:col-span-8">
          <h1 className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4rem]">
            {title}
          </h1>
          {intro && <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-muted sm:text-[1.1875rem]">{intro}</p>}
        </Reveal>
        {aside && (
          <Reveal delay={150} className="lg:col-span-4">
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
