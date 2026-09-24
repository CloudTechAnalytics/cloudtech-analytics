import { useSeo } from "@/lib/seo";
import { mailto } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";

const TOPICS = [
  { title: "Reporting and dashboards", body: "Getting reliable numbers out of the systems a business already runs on." },
  { title: "Legal practice software", body: "What we learn building The Counsel with the way law firms handle matters and hearings." },
  { title: "Logistics operations software", body: "What we learn building The Manifest, from quotation through customs to billing." },
  { title: "AI and automation", body: "Where automation has saved time in document-heavy work, and where it hasn't." },
];

export default function Insights() {
  useSeo({
    title: "Insights | CloudTech Analytics",
    description:
      "Writing from CloudTech Analytics on data, legal and logistics software, and automation. Nothing is published yet.",
  });

  return (
    <>
      <PageHero
        title="Insights"
        intro="We haven't published anything yet. When we do, it will be practical writing based on the products and client work we do."
      />

      <section aria-labelledby="topics-title" className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 id="topics-title" className="font-serif text-[1.9rem] leading-tight sm:text-[2.2rem]">
              What we plan to write about
            </h2>
            <div className="mt-8">
              <ButtonLink to={mailto("Tell me when CloudTech publishes")} variant="secondary">
                Email me when it's out
              </ButtonLink>
            </div>
          </Reveal>
          <ul className="border-t border-ink/80 lg:col-span-7 lg:col-start-6">
            {TOPICS.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 70} className="border-b border-line py-7">
                <h3 className="font-serif text-[1.5rem] leading-tight">{t.title}</h3>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">{t.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
