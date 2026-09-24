import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { breadcrumbs, courseJsonLd } from "@/lib/schema";
import { COURSES, findCourse, type Course as CourseType } from "@/lib/training";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { WhatsAppButton } from "@/components/Training";
import NotFound from "./NotFound";

function EnrolCard({ course }: { course: CourseType }) {
  return (
    <div className="rounded-2xl border border-line-strong bg-paper p-6 shadow-[0_30px_60px_-45px_rgba(23,23,23,0.45)] sm:p-7">
      <p className="text-[0.875rem] text-muted">Course fee</p>
      <p className="mt-1 font-serif text-[2.4rem] font-medium leading-none text-ink [font-variant-numeric:lining-nums]">
        {course.price}
      </p>
      <dl className="mt-6 divide-y divide-line border-y border-line text-[0.9375rem]">
        {[
          ["Duration", course.duration],
          ["Batch size", course.batch],
          ["Next batch", "Starting soon"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between py-3">
            <dt className="text-muted">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-5 space-y-2.5">
        {course.includes.map((i) => (
          <li key={i} className="flex items-start gap-2.5 text-[0.9375rem]">
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={2.5} />
            {i}
          </li>
        ))}
      </ul>
      <WhatsAppButton
        text={`Hello CloudTech, I'd like to enroll in the ${course.programme}.`}
        label="Enroll on WhatsApp"
        className="mt-7 w-full"
      />
      <ButtonLink
        to={`/contact?topic=${encodeURIComponent(`${course.title} course`)}`}
        variant="secondary"
        arrow={false}
        className="mt-3 w-full"
      >
        Enquire by email
      </ButtonLink>
    </div>
  );
}

export default function Course() {
  const { slug } = useParams();
  const course = findCourse(slug);

  useSeo({
    title: course
      ? `${course.title} Course in Lagos (${course.duration}) | CloudTech Analytics`
      : "Course not found | CloudTech Analytics",
    description: course
      ? `${course.programme}: ${course.tagline} ${course.duration}, ${course.price}. Live classes online or in person in Lagos, with projects and certification.`
      : "This course doesn't exist.",
    noindex: !course,
    jsonLd: course
      ? [courseJsonLd(course), breadcrumbs([["Home", "/"], ["Training", "/training"], [course.title, `/training/${course.slug}`]])]
      : undefined,
  });

  if (!course) return <NotFound />;
  const others = COURSES.filter((c) => c.slug !== course.slug);

  return (
    <>
      <section className="border-b border-line">
        <div className="container-page pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-20">
          <Link to="/training" className="inline-flex items-center gap-2 text-[0.875rem] text-muted hover:text-ink">
            <ArrowLeft aria-hidden className="h-4 w-4" />
            All courses
          </Link>
          <Reveal className="mt-8 max-w-3xl">
            <p className="kicker">{course.programme}</p>
            <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4rem]">
              {course.title}
            </h1>
            <p className="mt-5 font-serif text-[1.35rem] font-medium leading-snug text-ink/85 sm:text-[1.6rem]">{course.tagline}</p>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">{course.overview}</p>
          </Reveal>
        </div>
      </section>

      <div className="container-page grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
        {/* Enrolment card: first on mobile, sticky sidebar on desktop */}
        <aside aria-label="Enrolment" className="lg:order-2 lg:col-span-4">
          <div className="space-y-4 lg:sticky lg:top-28">
            <EnrolCard course={course} />
            {course.offers.map((o) => (
              <div key={o.title} className="rounded-2xl border border-line bg-ivory p-5">
                <p className="font-serif text-[1.15rem]">{o.title}</p>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-muted">{o.body}</p>
                <Link
                  to={`/contact?topic=${encodeURIComponent(o.topic)}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brass-dark hover:text-brass-deeper"
                >
                  Ask about this <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </aside>

        <div className="lg:order-1 lg:col-span-8">
          <section aria-labelledby="learn-title">
            <h2 id="learn-title" className="font-serif text-[1.9rem] sm:text-[2.2rem]">
              What you'll learn
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {course.learn.map((l) => (
                <li key={l} className="flex items-start gap-3 text-[1rem]">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2.5} />
                  {l}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="curriculum-title" className="mt-16">
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="curriculum-title" className="font-serif text-[1.9rem] sm:text-[2.2rem]">
                Curriculum
              </h2>
              <p className="text-[0.875rem] text-muted">{course.modules.length} modules</p>
            </div>
            <div className="mt-6 border-t border-ink/80">
              {course.modules.map((m, i) => (
                <details key={m.title} className="group border-b border-line" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="w-24 shrink-0 text-[0.8125rem] text-muted">{m.weeks}</span>
                    <span className="flex-1 font-serif text-[1.2rem] sm:text-[1.3rem]">{m.title}</span>
                    <Plus
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-brass-dark transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <ul className="grid gap-x-8 gap-y-2 pb-6 pl-0 sm:grid-cols-2 sm:pl-28">
                    {m.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[0.9375rem] text-ink/85">
                        <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-brass" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            {course.sections.map((s) => (
              <section key={s.title} aria-label={s.title}>
                <h2 className="font-serif text-[1.4rem]">{s.title}</h2>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {s.items.map((it) => (
                    <li key={it} className="text-[0.975rem] text-ink/85">
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>

      <section aria-labelledby="other-courses-title" className="border-t border-line bg-paper py-16 sm:py-20">
        <div className="container-page">
          <h2 id="other-courses-title" className="font-serif text-[1.6rem]">
            Other courses
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/training/${c.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-ivory p-5 hover:border-line-strong"
                >
                  <span className="font-serif text-[1.25rem]">{c.title}</span>
                  <span className="mt-1 text-[0.875rem] text-muted">
                    {c.duration} · {c.price}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brass-dark">
                    View course <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
