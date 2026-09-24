import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./App";
import { renderHeadTags, takeSsrHead } from "./lib/seo";
import { sitewideJsonLd } from "./lib/schema";
import { COURSES } from "./lib/training";
import { SITE } from "./lib/site";

/** Every public route, prerendered to its own HTML file and listed in the sitemap. */
export const ROUTES = [
  "/",
  "/products",
  "/services",
  "/training",
  ...COURSES.map((c) => `/training/${c.slug}`),
  "/partner",
  "/about",
  "/insights",
  "/contact",
];

/** Routes kept out of the sitemap because they are marked noindex. */
export const NOINDEX_ROUTES = ["/insights"];

export const SITE_URL = SITE.url;

/** Renders one route to HTML, waiting for lazy pages, and returns its head tags. */
export async function render(url: string) {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  const html = await new Response(prelude).text();
  const head = takeSsrHead();
  if (!head) throw new Error(`No SEO data recorded for ${url}; does the page call useSeo?`);
  return { html, headTags: renderHeadTags(head, sitewideJsonLd()) };
}
