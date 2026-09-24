type Tone = "default" | "reversed" | "mono" | "brass";

/** accent: the lead tile. rest: the other five tiles. */
const TONES: Record<Tone, { accent: string; rest: string; restOpacity: number; word: string; sub: string }> = {
  default: { accent: "#C9A45C", rest: "var(--color-logo-rest)", restOpacity: 1, word: "text-ink", sub: "text-brass-dark" },
  reversed: { accent: "#C9A45C", rest: "#F8F5EF", restOpacity: 0.22, word: "text-cream", sub: "text-brass-light" },
  mono: { accent: "currentColor", rest: "currentColor", restOpacity: 0.35, word: "", sub: "" },
  brass: { accent: "#B38A3E", rest: "#B38A3E", restOpacity: 0.3, word: "text-brass-dark", sub: "text-brass-dark" },
};

/**
 * The CloudTech mark: a grid of rounded tiles, one lit in brass, with a larger
 * panel filling the rest, like a dashboard with one view in focus.
 * Geometry follows the supplied logo (a 682-unit grid: 170-unit tiles, 86-unit gaps).
 */
export function CloudTechMark({
  tone = "default",
  className = "h-8 w-8",
  title,
}: {
  tone?: Tone;
  className?: string;
  title?: string;
}) {
  const c = TONES[tone];
  const small = [
    [256, 0],
    [512, 0],
    [0, 256],
    [0, 512],
  ];
  return (
    <svg
      viewBox="0 0 682 682"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="170" height="170" rx="30" fill={c.accent} />
      <g fill={c.rest} fillOpacity={c.restOpacity}>
        {small.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="170" height="170" rx="30" />
        ))}
        <rect x="256" y="256" width="426" height="426" rx="44" />
      </g>
    </svg>
  );
}

/** Full lockup: mark + "CloudTech" with "ANALYTICS" set small and tracked beneath. */
export function CloudTechLogo({
  tone = "default",
  size = "md",
  className = "",
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const c = TONES[tone];
  const s = {
    sm: { mark: "h-8 w-8", word: "text-[1.2rem]", sub: "text-[0.5rem] tracking-[0.3em]", gap: "gap-2.5" },
    md: { mark: "h-10 w-10", word: "text-[1.35rem]", sub: "text-[0.54rem] tracking-[0.32em]", gap: "gap-2.5" },
    lg: { mark: "h-12 w-12", word: "text-[1.9rem]", sub: "text-[0.68rem] tracking-[0.34em]", gap: "gap-3" },
  }[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <CloudTechMark tone={tone} className={`${s.mark} shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-bold tracking-[-0.01em] ${s.word} ${c.word}`}>CloudTech</span>
        <span className={`mt-[0.35em] pl-[0.06em] font-sans font-semibold uppercase ${s.sub} ${c.sub}`}>Analytics</span>
      </span>
    </span>
  );
}

/** App-icon tiles for the products, echoing their own logos. */
export function ProductMark({ product, className = "h-10 w-10" }: { product: "counsel" | "manifest"; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect width="48" height="48" rx="11" fill="#B38A3E" />
      {product === "counsel" ? (
        // A heavy open "C", as in The Counsel's logo.
        <path d="M32.5 16.2 A11.5 11.5 0 1 0 32.5 31.8" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      ) : (
        // A cargo vessel with containers, for The Manifest.
        <g fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 27 h26 l-3.2 7.5 a2 2 0 0 1 -1.8 1.2 H16 a2 2 0 0 1 -1.8 -1.2 Z" />
          <rect x="15" y="18" width="7.5" height="9" rx="1" />
          <rect x="25.5" y="14" width="7.5" height="13" rx="1" />
        </g>
      )}
    </svg>
  );
}
