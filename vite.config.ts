import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

const ROUTES = [
  "/",
  "/products",
  "/services",
  "/training",
  "/training/data-analytics",
  "/training/data-science",
  "/training/artificial-intelligence",
  "/training/business-analytics",
  "/partner",
  "/about",
  "/insights",
  "/contact",
];

/**
 * Emits sitemap.xml at build time when VITE_SITE_URL is set
 * (e.g. VITE_SITE_URL=https://www.your-domain.com). Without a real domain,
 * no sitemap is generated rather than pointing search engines at a guess.
 */
function sitemap(siteUrl: string | undefined): Plugin {
  return {
    name: "cloudtech-sitemap",
    apply: "build",
    generateBundle() {
      const base = siteUrl?.replace(/\/$/, "");
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n${base ? `\nSitemap: ${base}/sitemap.xml\n` : ""}`,
      });
      if (!base) return;
      const urls = ROUTES.map((r) => `  <url><loc>${base}${r}</loc></url>`).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss(), sitemap(env.VITE_SITE_URL)],
    resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  };
});
