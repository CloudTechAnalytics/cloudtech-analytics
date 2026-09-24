import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const KEY = "ct-theme";
const THEME_COLOR: Record<Theme, string> = { light: "#F8F5EF", dark: "#14161B" };

function stored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function system(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[theme]);
}

/**
 * Light/dark theme. Follows the device setting until the visitor picks one,
 * then remembers the choice. The initial class is set by an inline script in
 * index.html so the page never flashes the wrong theme.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  useEffect(() => {
    apply(theme);
  }, [theme]);

  // Keep following the device setting while the visitor hasn't chosen.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = () => {
      if (!stored()) setTheme(system());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* storage unavailable: the choice lasts for this page view only */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
