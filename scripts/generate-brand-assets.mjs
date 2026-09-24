// Generates every brand asset from one definition of the CloudTech mark:
// SVG logo files, favicons, the social profile image and the Open Graph card.
// Run with: npm run brand:assets
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const pub = new URL("../public/", import.meta.url);
const out = (p) => fileURLToPath(new URL(p, pub));

const BRASS = "#C9A45C";
const SAND = "#E4DACA";

/** The mark on its native 682-unit grid. */
const MARK = (accent = BRASS, rest = SAND, restOpacity = 1) => `
  <rect width="170" height="170" rx="30" fill="${accent}"/>
  <g fill="${rest}" fill-opacity="${restOpacity}">
    <rect x="256" y="0" width="170" height="170" rx="30"/>
    <rect x="512" y="0" width="170" height="170" rx="30"/>
    <rect x="0" y="256" width="170" height="170" rx="30"/>
    <rect x="0" y="512" width="170" height="170" rx="30"/>
    <rect x="256" y="256" width="426" height="426" rx="44"/>
  </g>`;

const svg = (w, h, body, label = "CloudTech Analytics") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${body}\n</svg>\n`;

const LOCKUP = (word, sub, accent, rest, op) =>
  svg(
    320,
    64,
    `
  <g transform="translate(4 6) scale(0.0762)">${MARK(accent, rest, op)}</g>
  <text x="70" y="34" font-family="'Playfair Display', Georgia, 'Times New Roman', serif" font-size="30" font-weight="700" fill="${word}" letter-spacing="-0.3">CloudTech</text>
  <text x="71.5" y="53" font-family="Inter, 'Helvetica Neue', Arial, sans-serif" font-size="10.5" font-weight="600" fill="${sub}" letter-spacing="4.4">ANALYTICS</text>`,
  );

const files = {
  "brand/cloudtech-mark.svg": svg(682, 682, MARK()),
  "brand/cloudtech-mark-reversed.svg": svg(682, 682, MARK(BRASS, "#F8F5EF", 0.22)),
  "brand/cloudtech-mark-mono-black.svg": svg(682, 682, MARK("#171717", "#171717", 0.3)),
  "brand/cloudtech-mark-mono-white.svg": svg(682, 682, MARK("#FFFFFF", "#FFFFFF", 0.35)),
  "brand/cloudtech-mark-brass.svg": svg(682, 682, MARK("#B38A3E", "#B38A3E", 0.3)),
  "brand/cloudtech-logo.svg": LOCKUP("#171717", "#8C6A2C", BRASS, SAND, 1),
  "brand/cloudtech-logo-reversed.svg": LOCKUP("#F8F5EF", "#C9A45C", BRASS, "#F8F5EF", 0.22),
  "brand/cloudtech-logo-mono.svg": LOCKUP("#171717", "#171717", "#171717", "#171717", 0.3),
  "brand/cloudtech-logo-brass.svg": LOCKUP("#8C6A2C", "#8C6A2C", "#B38A3E", "#B38A3E", 0.3),
  // App icon / favicon: the mark on a white rounded square, with the sand tiles
  // deepened slightly so the grid still reads at 16px.
  "favicon.svg": svg(
    100,
    100,
    `
  <rect width="100" height="100" rx="22" fill="#FFFFFF"/>
  <g transform="translate(17 17) scale(0.0968)">${MARK("#C9A45C", "#D9CDB8", 1)}</g>`,
    "CloudTech",
  ),
};

for (const [path, content] of Object.entries(files)) await writeFile(out(path), content);

const favicon = Buffer.from(files["favicon.svg"]);
for (const [name, size] of [
  ["favicon-32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-512.png", 512],
]) {
  await sharp(favicon, { density: 600 }).resize(size, size).png().toFile(out(name));
}
await writeFile(out("brand/cloudtech-app-icon.svg"), files["favicon.svg"]);

// Square social profile image (LinkedIn, X, etc.)
const profile = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="#FFFFFF"/>
  <g transform="translate(160 160) scale(0.7038)">${MARK()}</g>
</svg>`;
await sharp(Buffer.from(profile)).png().toFile(out("brand/cloudtech-profile.png"));

// Open Graph / Twitter card, 1200x630
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F8F5EF"/>
  <rect x="0" y="0" width="1200" height="6" fill="#B38A3E"/>
  <g transform="translate(96 96) scale(0.1349)">${MARK()}</g>
  <text x="206" y="138" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-weight="700" fill="#171717">CloudTech</text>
  <text x="208" y="168" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#8C6A2C" letter-spacing="6">ANALYTICS</text>
  <text x="96" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="62" fill="#171717">We build technology that makes</text>
  <text x="96" y="410" font-family="Georgia, 'Times New Roman', serif" font-size="62" fill="#171717">complex work <tspan fill="#A67E35">simpler.</tspan></text>
  <line x1="96" y1="490" x2="176" y2="490" stroke="#B38A3E" stroke-width="2"/>
  <text x="96" y="540" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#5E5A52" letter-spacing="5">DATA  ·  SOFTWARE  ·  AI  ·  TRAINING</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(out("og-image.png"));
await writeFile(out("og-image.svg"), og);

console.log("Brand assets generated.");
