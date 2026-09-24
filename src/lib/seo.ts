import { useEffect } from "react";
import { useLocation } from "react-router";
import { SITE } from "./site";

type SeoOptions = {
  title: string;
  description: string;
  /** Defaults to the shared Open Graph card. */
  image?: string;
  noindex?: boolean;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Sets per-route title, description, canonical, Open Graph and Twitter metadata. */
export function useSeo({ title, description, image = "/og-image.png", noindex }: SeoOptions) {
  const { pathname } = useLocation();

  useEffect(() => {
    const origin = SITE.url || window.location.origin;
    const url = `${origin}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    const imageUrl = image.startsWith("http") ? image : `${origin}${image}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setCanonical(url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:locale", "en_US");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
  }, [title, description, image, noindex, pathname]);
}
