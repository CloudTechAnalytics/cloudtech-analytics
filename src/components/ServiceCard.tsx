import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col border-t border-ink/85 pt-7">
      <h3 className="font-serif text-[1.75rem] leading-tight tracking-[-0.01em]">{service.title}</h3>
      <p className="mt-3 text-[1rem] leading-relaxed text-muted">{service.summary}</p>
      <p className="mt-6 flex-1 border-t border-line pt-5 text-[0.9375rem] leading-relaxed text-ink/80">
        {service.capabilities.join(", ")}.
      </p>
      <Link
        to={`/services#${service.id}`}
        className="mt-7 inline-flex items-center gap-2 text-[0.875rem] font-medium text-ink hover:text-brass-dark"
      >
        More on {service.title}
        <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
