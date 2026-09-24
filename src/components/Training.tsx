import { Link } from "react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Course } from "@/lib/training";
import { PARTNERS } from "@/lib/training";
import { whatsapp } from "@/lib/site";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line-strong bg-paper p-7 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_32px_60px_-40px_rgba(23,23,23,0.45)] sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[1.7rem] leading-tight">{course.title}</h3>
        <p className="shrink-0 text-[0.8125rem] text-muted">{course.duration}</p>
      </div>
      <p className="mt-3 text-[1rem] leading-relaxed text-muted">{course.summary}</p>
      <ul className="mb-8 mt-5 flex flex-wrap gap-2">
        {course.cardPoints.map((p) => (
          <li key={p} className="rounded-full border border-line-strong bg-ivory px-3 py-1 text-[0.75rem] text-ink/80">
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-end justify-between border-t border-line pt-5">
        <p className="font-serif text-[1.6rem] font-medium leading-none text-brass-accent [font-variant-numeric:lining-nums]">
          {course.price}
        </p>
        <Link
          to={`/training/${course.slug}`}
          className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink after:absolute after:inset-0 after:content-[''] group-hover:text-brass-dark"
        >
          View course
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function PartnerLogos({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-12 gap-y-6 ${className}`}>
      {PARTNERS.map((p) => (
        <li key={p.name}>
          {/* Greyscale + multiply so the logos' white backgrounds sit on the ivory page. */}
          <img
            src={p.logo}
            alt={p.name}
            loading="lazy"
            className="h-10 w-auto opacity-70 mix-blend-multiply grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12 dark:opacity-80 dark:mix-blend-screen dark:invert dark:hover:grayscale"
          />
        </li>
      ))}
    </ul>
  );
}

/** Primary enrolment action: a pre-filled WhatsApp message. */
export function WhatsAppButton({ text, label, className = "" }: { text: string; label: string; className?: string }) {
  return (
    <a
      href={whatsapp(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brass-button px-6 py-3 text-[0.9375rem] font-semibold text-on-brass shadow-[0_1px_2px_rgba(23,23,23,0.12)] transition-colors hover:bg-brass-button-hover ${className}`}
    >
      <MessageCircle aria-hidden className="h-4 w-4" strokeWidth={2} />
      {label}
      <span className="sr-only">(opens WhatsApp in a new tab)</span>
    </a>
  );
}
