import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "light" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[0.9375rem] font-semibold transition-colors duration-300";

const variants: Record<Variant, string> = {
  // Deeper brass than the sister products' buttons so white text meets WCAG AA (4.98:1).
  primary: "min-h-12 px-6 py-3 bg-brass-button text-on-brass shadow-[0_1px_2px_rgba(23,23,23,0.12)] hover:bg-brass-button-hover",
  secondary: "min-h-12 px-6 py-3 border border-line-strong bg-paper text-ink hover:border-ink/40",
  // For use on always-dark sections, so fixed colours in both themes.
  light: "min-h-12 px-6 py-3 bg-cream text-night hover:bg-[#efe4cc]",
  ghost: "py-2 text-ink underline decoration-line-strong underline-offset-4 hover:text-brass-dark hover:decoration-brass",
};

type Props = {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  /** External links open in a new tab and show a diagonal arrow. */
  external?: boolean;
  arrow?: boolean;
};

export function ButtonLink({ to, variant = "primary", className = "", children, external, arrow = true }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const Icon = external ? ArrowUpRight : ArrowRight;
  const icon = arrow ? (
    <Icon
      aria-hidden
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px"
      strokeWidth={1.75}
    />
  ) : null;

  const isRaw = external || to.startsWith("mailto:") || to.startsWith("http");
  if (isRaw) {
    return (
      <a
        href={to}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {icon}
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
      {icon}
    </Link>
  );
}
