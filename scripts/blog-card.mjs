// Génère la carte LinkedIn (1200×1200) et l'image de partage (1200×630) d'un article.
// Usage : node scripts/blog-card.mjs <slug> [--lang fr|en]
// Sans navigateur : satori (layout → SVG) + resvg (SVG → PNG). Sortie : public/blog/<slug>-card.png, public/blog/<slug>-og.png
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const [slug, ...rest] = process.argv.slice(2);
const lang = rest[rest.indexOf('--lang') + 1] && rest.includes('--lang') ? rest[rest.indexOf('--lang') + 1] : 'fr';
if (!slug) { console.error('usage: node scripts/blog-card.mjs <slug> [--lang fr|en]'); process.exit(1); }

const md = readFileSync(join(root, `src/content/blog/${lang}/${slug}.md`), 'utf8');
const fm = md.split('---')[1];
const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) || [])[1] ?? '';
const title = get('title');
const points = [...fm.matchAll(/^\s{2}-\s*"?(.*?)"?\s*$/gm)].map((m) => m[1]).filter(Boolean);
const h2s = [...md.matchAll(/^## (.+)$/gm)].map((m) => m[1]).filter((h) => !/cadre existe|framework already/i.test(h)).slice(0, 3);
const keyPoints = points.length === 3 ? points : h2s;
if (!title || keyPoints.length < 3) { console.error('title ou points manquants'); process.exit(1); }

const font = (f) => readFileSync(join(root, 'scripts/fonts', f));
const fonts = [
  { name: 'Zalando', data: font('zalando-sans-700.ttf'), weight: 700, style: 'normal' },
  { name: 'Zalando', data: font('zalando-sans-400.ttf'), weight: 400, style: 'normal' },
  { name: 'Geist', data: font('geist-mono-500.ttf'), weight: 500, style: 'normal' },
];
const photo = `data:image/jpeg;base64,${readFileSync(join(root, 'public/benjamin.jpg')).toString('base64')}`;
const ACCENT = '#f04e23', BG = '#111111', GRID = 'rgba(255,255,255,.12)';
const label = lang === 'fr' ? 'BIOPHARMA · GXP · BLOG' : 'BIOPHARMA · GXP · BLOG';
const site = lang === 'fr' ? 'benjamindebruijne.com/blog' : 'benjamindebruijne.com/en/blog';

const h = (type, props, ...children) => ({ type, props: { ...props, children: children.length === 1 ? children[0] : children } });
const grid = (w) => h('div', { style: { position: 'absolute', left: 0, top: 0, width: w, height: '100%', display: 'flex' } },
  ...[0.25, 0.5, 0.75].map((f) => h('div', { style: { position: 'absolute', left: Math.round(w * f), top: 0, width: 1, height: '100%', background: GRID } })));

function tree(w, hgt) {
  const square = w === hgt;
  const titleSize = square ? (title.length > 70 ? 66 : 76) : (title.length > 70 ? 50 : 58);
  const px = square ? 80 : 64, py = square ? 72 : 52;
  return h('div', { style: { width: w, height: hgt, background: BG, color: '#fff', fontFamily: 'Zalando', display: 'flex', position: 'relative' } },
    grid(w),
    h('div', { style: { position: 'absolute', left: px, top: py, width: w - 2 * px, height: hgt - 2 * py, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } },
    h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Geist', fontSize: square ? 22 : 19, letterSpacing: 1.5 } },
        h('div', { style: { width: 10, height: 10, background: ACCENT } }), label),
      h('img', { src: photo, width: square ? 120 : 96, height: square ? 120 : 96, style: { width: square ? 120 : 96, height: square ? 120 : 96, borderRadius: 6, objectFit: 'cover', flexShrink: 0 } })),
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: square ? 48 : 28 } },
      h('div', { style: { fontSize: titleSize, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, maxWidth: w - (square ? 160 : 128) } }, title),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: square ? 18 : 12, fontSize: square ? 30 : 24, fontWeight: 400, color: '#d6d6d6' } },
        ...keyPoints.map((p) => h('div', { style: { display: 'flex', gap: 18, alignItems: 'flex-start' } }, h('div', { style: { color: ACCENT, fontFamily: 'Geist' } }, '—'), h('div', { style: { display: 'flex' } }, p))))),
    h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } },
      h('div', { style: { fontFamily: 'Geist', fontSize: square ? 20 : 17, letterSpacing: 1, color: '#bbbbbb' } }, site),
      h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } },
        h('div', { style: { fontSize: square ? 30 : 24, fontWeight: 700 } }, 'Benjamin de Bruijne'),
        h('div', { style: { fontFamily: 'Geist', fontSize: square ? 17 : 15, letterSpacing: 1, color: '#bbbbbb', marginTop: 4 } }, 'DIGITAL TECHNOLOGY SME · PMO · GXP')))));
}

async function render(w, hgt, out) {
  const svg = await satori(tree(w, hgt), { width: w, height: hgt, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: w } }).render().asPng();
  writeFileSync(out, png);
  console.log(out, `${Math.round(png.length / 1024)} KB`);
}
const outDir = join(root, 'public/blog'); if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const suffix = lang === 'fr' ? '' : `-${lang}`;
await render(1200, 1200, join(outDir, `${slug}${suffix}-card.png`));
await render(1200, 630, join(outDir, `${slug}${suffix}-og.png`));
