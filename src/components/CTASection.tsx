import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { mailto } from "@/lib/site";

export function CTASection({
  title = "Have a workflow that software should handle better?",
  body = "Tell us what you're trying to improve. We'll start with the problem.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line bg-sand/50">
      <div className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end lg:py-32">
        <Reveal className="lg:col-span-8">
          <h2
            id="cta-title"
            className="max-w-3xl font-serif text-[2.3rem] leading-[1.08] tracking-[-0.02em] sm:text-[2.8rem] lg:text-[3.1rem]"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:text-[1.125rem]">{body}</p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-3 sm:items-start lg:col-span-4 lg:items-end">
          <ButtonLink to={mailto("Starting a conversation with CloudTech")} className="w-full sm:w-auto">
            Start a conversation
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost" arrow={false}>
            Or use the contact form
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
