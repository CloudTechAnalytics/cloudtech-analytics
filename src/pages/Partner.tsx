import { useSeo } from "@/lib/seo";
import { breadcrumbs } from "@/lib/schema";
import { mailto } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { PartnerLogos, WhatsAppButton } from "@/components/Training";

const ECOSYSTEM = [
  {
    name: "Academic partners",
    body: "Embed our analytics curriculum in your programmes, host joint bootcamps, or open internship pathways for your students.",
  },
  {
    name: "Corporate partners",
    body: "Upskill your workforce through tailored training, joint research or co-branded analytics labs.",
  },
  {
    name: "Community and NGO partners",
    body: "Widen access to tech education through scholarships and outreach for underrepresented groups.",
  },
];

const BENEFITS = [
  "Access to experienced instructors and data professionals",
  "Training and mentorship designed around your goals",
  "Brand exposure through CloudTech events and showcases",
  "A talent pipeline through internship partnerships",
  "Joint research, innovation challenges and data competitions",
  "Community engagement and knowledge exchange",
];

const STEPS = [
  { name: "Discovery call", body: "We learn about your goals and what you'd like to work on together." },
  { name: "Proposal", body: "We design a partnership framework that fits your organization." },
  { name: "Launch", body: "We run the programmes, events or training, with outcomes agreed up front." },
  { name: "Review", body: "We report on impact and adjust the partnership as it grows." },
];

const INITIATIVES = [
  { name: "University Data Fellowship Program", body: "Real-world analytics exposure for university students." },
  { name: "Corporate Data Academy", body: "Upskilling for company teams and executives." },
  { name: "Community Tech Drive", body: "Free bootcamps and hackathons to widen access to tech." },
];

const PARTNER_TYPES = ["Universities and colleges", "Corporations and startups", "NGOs and communities", "Government agencies"];

export default function Partner() {
  useSeo({
    title: "Partnerships | CloudTech Analytics",
    description:
      "Partner with CloudTech Analytics on data, AI and analytics education in Nigeria: university programmes, corporate training and community outreach.",
    jsonLd: breadcrumbs([["Home", "/"], ["Partnerships", "/partner"]]),
  });

  return (
    <>
      <PageHero
        title="Partner with CloudTech."
        intro="We work with universities, companies and communities to deliver data education, hands-on learning and workforce development programmes."
        aside={
          <div className="rounded-2xl border border-line bg-paper p-6">
            <p className="text-[0.9375rem] font-medium">We partner with</p>
            <ul className="mt-3 space-y-2 text-[0.9375rem] text-muted">
              {PARTNER_TYPES.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <ButtonLink to="/contact?topic=Partnership" className="mt-6 w-full">
              Start a partnership
            </ButtonLink>
          </div>
        }
      />

      <section aria-labelledby="current-title" className="border-b border-line bg-paper py-14">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 id="current-title" className="font-serif text-[1.5rem]">
            Current partners
          </h2>
          <PartnerLogos />
        </div>
      </section>

      <section aria-labelledby="ecosystem-title" className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading id="ecosystem-title" title="Ways to work with us" />
          <div className="mt-10 grid gap-x-10 border-t border-ink/80 md:grid-cols-3">
            {ECOSYSTEM.map((e, i) => (
              <Reveal key={e.name} delay={i * 90} className="border-b border-line py-8 md:border-b-0">
                <h3 className="font-serif text-[1.5rem] leading-tight">{e.name}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="benefits-title" className="border-t border-line bg-paper py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="benefits-title" title="What partners get" />
          </div>
          <Reveal className="lg:col-span-7">
            <ul className="border-t border-ink/80">
              {BENEFITS.map((b) => (
                <li key={b} className="border-b border-line py-4 text-[1.0625rem]">
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="how-title" className="border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="how-title" title="How a partnership starts" />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 80} className="border-t border-ink/80 pt-5">
                <h3 className="font-serif text-[1.35rem]">{s.name}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="initiatives-title" className="bg-night-2 py-20 text-cream sm:py-24">
        <div className="container-page">
          <h2 id="initiatives-title" className="font-serif text-[2.1rem] sm:text-[2.6rem]">
            Ongoing initiatives
          </h2>
          <div className="mt-10 grid gap-x-10 border-t border-cream/20 md:grid-cols-3">
            {INITIATIVES.map((it) => (
              <div key={it.name} className="border-b border-cream/10 py-7 md:border-b-0">
                <h3 className="font-serif text-[1.35rem] leading-tight">{it.name}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-cream/65">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-cta-title" className="border-t border-line bg-sand/50">
        <div className="container-page grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 id="partner-cta-title" className="font-serif text-[2.3rem] leading-[1.08] sm:text-[2.8rem]">
              Let's build data education together.
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
              Tell us about your organization and what you'd like to achieve.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <WhatsAppButton text="Hello CloudTech, I'd like to discuss a partnership." label="Chat on WhatsApp" />
            <ButtonLink to={mailto("Partnership enquiry")} variant="secondary" arrow={false}>
              Email us
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
