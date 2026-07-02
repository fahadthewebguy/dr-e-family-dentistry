// One-off script: extracts dominant colors from the practice logo using sharp.
// Run with: node scripts/extract-colors.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoPath = path.join(__dirname, "..", "assets-src", "logo.png");

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((v) => Math.round(v).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = 60 * (((g - b) / d) % 6);
        break;
      case g:
        h = 60 * ((b - r) / d + 2);
        break;
      case b:
        h = 60 * ((r - g) / d + 4);
        break;
    }
  }
  if (h < 0) h += 360;
  return [h, s, l];
}

async function main() {
  const { data, info } = await sharp(logoPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const buckets = new Map();

  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];

    // skip transparent / near-white / near-black pixels (background & outlines)
    if (a < 200) continue;
    const [h, s, l] = rgbToHsl(r, g, b);
    if (l > 0.92 || l < 0.06) continue;

    // quantize to reduce noise
    const qr = Math.round(r / 8) * 8;
    const qg = Math.round(g / 8) * 8;
    const qb = Math.round(b / 8) * 8;
    const key = `${qr},${qg},${qb}`;

    const existing = buckets.get(key);
    if (existing) {
      existing.count++;
    } else {
      buckets.set(key, { r: qr, g: qg, b: qb, count: 1, h, s, l });
    }
  }

  const sorted = [...buckets.values()].sort((a, b) => b.count - a.count);

  console.log(`Total distinct quantized colors: ${sorted.length}\n`);
  console.log("Top 15 dominant colors:");
  sorted.slice(0, 15).forEach((c, i) => {
    console.log(
      `${i + 1}. ${rgbToHex(c.r, c.g, c.b)}  rgb(${c.r},${c.g},${c.b})  hsl(${c.h.toFixed(
        0
      )},${(c.s * 100).toFixed(0)}%,${(c.l * 100).toFixed(0)}%)  count=${c.count}`
    );
  });

  // Dominant plum = most saturated, purple-hued (h between 260-330), high frequency
  const plumCandidates = sorted.filter((c) => c.h >= 250 && c.h <= 335 && c.s > 0.15);
  const plum = plumCandidates[0] ?? sorted[0];

  // Warm accent = gold/cream hued (h 30-60) if present in logo, else derive
  const goldCandidates = sorted.filter((c) => c.h >= 25 && c.h <= 65 && c.s > 0.1);
  const gold = goldCandidates[0];

  console.log("\n--- SELECTED BRAND COLORS ---");
  console.log(
    `Primary (plum): ${rgbToHex(plum.r, plum.g, plum.b)}  hsl(${plum.h.toFixed(0)},${(
      plum.s * 100
    ).toFixed(0)}%,${(plum.l * 100).toFixed(0)}%)`
  );
  if (gold) {
    console.log(
      `Accent (gold, from logo): ${rgbToHex(gold.r, gold.g, gold.b)}  hsl(${gold.h.toFixed(
        0
      )},${(gold.s * 100).toFixed(0)}%,${(gold.l * 100).toFixed(0)}%)`
    );
  } else {
    console.log("No strong gold/cream tone found in logo — will derive a complementary warm accent.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
