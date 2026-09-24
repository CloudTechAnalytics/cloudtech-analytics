import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  id,
  title,
  intro,
  className = "",
}: {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <h2
        id={id}
        className="font-serif text-[2.1rem] leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.6rem] lg:text-[3.1rem]"
      >
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
