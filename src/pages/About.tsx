import { useSeo } from "@/lib/seo";
import { breadcrumbs, founderJsonLd } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { PrinciplesSection, ValuesSection } from "@/sections/HomeSections";
import { FounderSection, TeamSection } from "@/sections/People";

const ROLES = [
  {
    name: "Technology company",
    body: "We design, build and maintain the software, data systems and automation that organizations use day to day.",
  },
  {
    name: "Product studio",
    body: "We build our own products for specific industries: The Counsel for law firms and The Manifest for logistics operators.",
  },
  {
    name: "Training provider",
    body: "We run courses in data analytics, data science, AI and business analytics, and train teams inside companies.",
  },
  {
    name: "Consulting partner",
    body: "We help organizations work out where their data and processes need attention, and whether software is the right answer.",
  },
];

export default function About() {
  useSeo({
    title: "About CloudTech Analytics | Founded by John Adeleke",
    description:
      "CloudTech Analytics is a technology company, product studio and training provider in Lagos, Nigeria, founded by data analyst John Adeleke.",
    jsonLd: [founderJsonLd(), breadcrumbs([["Home", "/"], ["About", "/about"]])],
  });

  return (
    <>
      <PageHero
        title="From data to technology."
        intro="CloudTech Analytics is the company behind The Counsel and The Manifest, and a technology partner for organizations with complex operations."
      />

      <section aria-label="Our story" className="py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-serif text-[2.1rem] leading-[1.1] tracking-[-0.015em] sm:text-[2.6rem]">Our story</h2>
          </Reveal>
          <Reveal className="space-y-5 text-[1.125rem] leading-relaxed text-muted lg:col-span-7 lg:col-start-6">
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
        </div>
      </section>

      <FounderSection />

      <section aria-labelledby="roles-title" className="border-t border-line bg-paper py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <h2 id="roles-title" className="font-serif text-[2.1rem] leading-[1.1] tracking-[-0.015em] sm:text-[2.6rem]">
              What CloudTech does
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-10 border-t border-ink/80 md:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((r, i) => (
              <Reveal key={r.name} delay={i * 100} className="border-b border-line py-8 lg:border-b-0">
                <h3 className="font-serif text-[1.6rem] leading-tight">{r.name}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <PrinciplesSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
