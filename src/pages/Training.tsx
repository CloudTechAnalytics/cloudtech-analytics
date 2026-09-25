import { Check } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { breadcrumbs, coursesListJsonLd } from "@/lib/schema";
import { COURSES, TRAINING_STATS } from "@/lib/training";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard, PartnerLogos, WhatsAppButton } from "@/components/Training";
import { ProductMark } from "@/components/CloudTechLogo";
import { SITE } from "@/lib/site";

const INCLUDED = [
  "Certification on completion",
  "Job assistance",
  "Live classes, online or in person",
  "Recorded sessions for revision",
  "Hands-on projects and a capstone",
  "Small batches of 15 to 25",
];

export function TrainingStats({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 ${className}`}>
      {TRAINING_STATS.map((s) => (
        <div key={s.label} className="flex flex-col-reverse justify-end">
          <dt className="mt-1.5 text-[0.9rem] text-muted">{s.label}</dt>
          <dd className="font-serif text-[2.2rem] font-medium leading-none text-brass-accent [font-variant-numeric:lining-nums]">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function Training() {
  useSeo({
    title: "Data Analytics, Data Science and AI Courses in Lagos | CloudTech Analytics",
    description:
      "Learn data analytics, data science, artificial intelligence or business analytics in Lagos. Live classes online or in person, projects, certification and job assistance. 250 professionals trained.",
    jsonLd: [coursesListJsonLd(COURSES), breadcrumbs([["Home", "/"], ["Training", "/training"]])],
  });

  return (
    <>
      <PageHero
        title="Training in data, analytics and AI."
        intro="Structured courses taught by working data professionals, from your first SQL query to deploying machine learning models. Classes run live, online or in person, in small batches."
        aside={
          <div className="rounded-2xl border border-line bg-paper p-6">
            <p className="text-[0.9375rem] text-muted">Questions about a course or the next batch?</p>
            <WhatsAppButton
              text="Hello CloudTech, I'd like to know more about your training courses."
              label="Chat on WhatsApp"
              className="mt-4 w-full"
            />
            <ButtonLink to="/contact?topic=Training" variant="ghost" arrow={false} className="mt-2 w-full">
              Or send us a message
            </ButtonLink>
          </div>
        }
      />

      <section aria-label="Training in numbers" className="border-b border-line bg-paper">
        <div className="container-page py-10 lg:py-12">
          <TrainingStats />
        </div>
      </section>

      <section aria-labelledby="courses-title" className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            id="courses-title"
            title="Courses"
            intro="Four programmes, each ending in a capstone project. The next batch for each is starting soon."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {COURSES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 100} className="h-full">
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="academy-title" className="border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="grid gap-8 rounded-2xl border border-line bg-paper p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="flex items-start gap-5 lg:col-span-8">
              <ProductMark product="academy" className="h-12 w-12 shrink-0" />
              <div>
                <h2 id="academy-title" className="font-serif text-[1.9rem] leading-[1.15] sm:text-[2.2rem]">
                  Learn at your own pace on CloudTech Academy
                </h2>
                <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
                  Free, self-paced courses in Data Analytics Foundations, Excel, SQL, Data Modelling and Power BI. Practise on
                  real datasets, take an assessment at the end of each course, and earn a certificate you can share.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <ButtonLink to={SITE.academyUrl} external className="w-full sm:w-auto">
                Start learning free
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="included-title" className="border-t border-line bg-paper py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="included-title" title="What every course includes" />
          </div>
          <Reveal className="lg:col-span-7">
            <ul className="grid gap-x-8 gap-y-4 border-t border-ink/80 pt-6 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1rem]">
                  <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="partners-title" className="border-t border-line py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              id="partners-title"
              title="Our partners"
              intro="We work with organizations that share our aim of making data skills accessible."
            />
          </div>
          <Reveal className="lg:col-span-7">
            <PartnerLogos />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="teams-title" className="bg-night-2 py-20 text-cream sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 id="teams-title" className="font-serif text-[2.2rem] leading-[1.1] sm:text-[2.8rem]">
              Training a team, or want to partner with us?
            </h2>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-cream/70">
              We run tailored training for companies, and work with universities, NGOs and communities on bootcamps,
              internships and outreach programmes.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ButtonLink to="/partner" variant="light">
              Partnerships
            </ButtonLink>
            <ButtonLink to="/contact?topic=Corporate%20training" variant="light" arrow={false}>
              Corporate training
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
