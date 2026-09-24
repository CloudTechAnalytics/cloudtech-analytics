import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CloudTechLogo } from "./CloudTechLogo";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS, SITE, mailto } from "@/lib/site";
import { PRODUCTS } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Scroll lock, Escape to close, and a focus trap while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const header = headerRef.current;
    document.body.style.overflow = "hidden";
    header?.querySelector<HTMLElement>("[data-menu-first]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !header) return;
      const focusables = Array.from(
        header.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        open
          ? // No backdrop-filter while open: it would become the containing block for the fixed menu panel.
            "border-b border-line bg-ivory"
          : solid
          ? "border-b border-line bg-ivory/92 shadow-[0_1px_0_rgba(23,23,23,0.02)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-60 focus:bg-night focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>

      <div className="container-page flex h-[68px] items-center justify-between lg:h-[80px]">
        <Link to="/" aria-label="CloudTech Analytics home" className="-m-1 p-1">
          <span className="lg:hidden">
            <CloudTechLogo size="sm" />
          </span>
          <span className="hidden lg:inline">
            <CloudTechLogo size="md" />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative py-2 text-[0.875rem] tracking-[0.01em] transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-brass after:transition-transform after:duration-300 ${
                      isActive ? "text-ink after:scale-x-100" : "text-muted after:scale-x-0 hover:after:scale-x-100"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-lg bg-brass-button px-5 py-2.5 text-[0.875rem] font-semibold text-on-brass transition-colors hover:bg-brass-button-hover sm:inline-flex"
          >
            Work with us
            <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="relative -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-[1.5px] bg-ink transition-all duration-300 ${
                  open ? "top-1/2 w-6 -translate-y-1/2 rotate-45" : "top-0 w-6"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] bg-ink transition-all duration-300 ${
                  open ? "top-1/2 w-6 -translate-y-1/2 -rotate-45" : "bottom-0 w-4 bg-brass"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[68px] overflow-y-auto border-t border-line bg-ivory lg:hidden"
      >
        <div className="container-page flex min-h-full flex-col pb-10 pt-6">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line border-b border-line">
              {[{ to: "/", label: "Home" }, ...NAV_LINKS].map((l, i) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end
                    {...(i === 0 ? { "data-menu-first": true } : {})}
                    className={({ isActive }) =>
                      `block py-4 font-serif text-[1.9rem] leading-tight ${
                        isActive ? "text-brass-dark" : "text-ink"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <p className="mb-3 text-[0.875rem] text-muted">Our products</p>
            <ul className="grid grid-cols-2 gap-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-line bg-paper px-4 py-3 text-[0.9rem] font-medium"
                  >
                    {p.name}
                    <ArrowUpRight aria-hidden className="h-4 w-4 text-brass-dark" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-10">
            <Link
              to="/contact"
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brass-button px-6 py-3.5 text-[0.9375rem] font-semibold text-on-brass"
            >
              Work with us <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={mailto()} className="mt-4 block text-center text-[0.875rem] text-muted">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
