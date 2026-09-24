import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FOUNDER, TEAM, type Person } from "@/lib/team";
import { TRAINING_STATS } from "@/lib/training";
import { mailto } from "@/lib/site";

export function FounderSection() {
  return (
    <section id="founder" aria-labelledby="founder-title" className="border-t border-line py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <figure className="relative mx-auto max-w-[400px] lg:mx-0">
            {/* Offset brass frame behind the portrait */}
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-brass/50" />
            <picture>
              <source srcSet={FOUNDER.photoWebp} type="image/webp" />
              <img
                src={FOUNDER.photo}
                alt={`Portrait of ${FOUNDER.name}, founder of CloudTech Analytics`}
                width={394}
                height={608}
                loading="lazy"
                className="relative aspect-[394/608] w-full rounded-2xl object-cover shadow-[0_40px_70px_-40px_rgba(23,23,23,0.55)]"
              />
            </picture>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="kicker">Meet the founder</p>
            <h2 id="founder-title" className="mt-5 font-serif text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.2rem]">
              {FOUNDER.name}
            </h2>
            <p className="mt-2 text-[1rem] text-muted">{FOUNDER.role}, CloudTech Analytics</p>
          </Reveal>
          <Reveal delay={100} className="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-muted">
            {FOUNDER.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={160}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {FOUNDER.focus.map((f) => (
                <li key={f} className="rounded-full border border-line-strong bg-paper px-3 py-1 text-[0.8125rem] text-ink/80">
                  {f}
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex gap-6 border-t border-line pt-6">
              {FOUNDER.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-ink hover:text-brass-dark"
                  >
                    {l.label}
                    <ArrowUpRight aria-hidden className="h-4 w-4 text-brass" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function MemberCard({ person }: { person: Person }) {
  return (
    <article className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-sand">
        {person.photo ? (
          <img
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div aria-hidden className="flex h-full items-center justify-center font-serif text-[3rem] text-brass-dark/70">
            {initials(person.name)}
          </div>
        )}
      </div>
      <h3 className="mt-4 font-serif text-[1.3rem]">{person.name}</h3>
      <p className="text-[0.9rem] text-muted">{person.role}</p>
      {person.bio && <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{person.bio}</p>}
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-[0.875rem] font-semibold text-brass-dark"
        >
          LinkedIn <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}

export function TeamSection() {
  const count = TRAINING_STATS.find((s) => s.label === "Instructors")?.value ?? "";
  const words: Record<string, string> = { "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight" };
  const instructors = words[count] ?? count;
  return (
    <section id="team" aria-labelledby="team-title" className="border-t border-line bg-paper py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="team-title" className="font-serif text-[2.1rem] leading-[1.1] tracking-[-0.015em] sm:text-[2.6rem]">
              The team
            </h2>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
              CloudTech is a small team of practitioners. {instructors} instructors teach our courses, and the same people
              build our products and client work.
            </p>
          </div>
          <p className="text-[0.9375rem] text-muted lg:col-span-5 lg:text-right">
            Want to teach or build with us?{" "}
            <a
              href={mailto("Joining the CloudTech team")}
              className="font-semibold text-ink underline decoration-brass/50 underline-offset-4 hover:decoration-brass"
            >
              Get in touch
            </a>
          </p>
        </Reveal>

        {TEAM.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <MemberCard person={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10 rounded-2xl border border-dashed border-line-strong p-6 text-[0.9375rem] text-muted sm:p-8">
            Full team profiles are on their way.
          </Reveal>
        )}
      </div>
    </section>
  );
}
