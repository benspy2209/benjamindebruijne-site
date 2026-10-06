// Ping IndexNow (Bing/Copilot, Yandex, Seznam, Naver…) avec toutes les URL du sitemap après un build de production.
// La clé est le fichier public/<32 hex>.txt (publique par conception, cf. https://www.indexnow.org/documentation).
// Usage : node scripts/indexnow.mjs [--now]  (sans --now, ne fait rien hors VERCEL_ENV=production)
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const HOST = 'benjamindebruijne.com';
const now = process.argv.includes('--now');
if (process.env.VERCEL_ENV !== 'production' && !now) { console.log('indexnow: ignoré (pas un build de production)'); process.exit(0); }
const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.log('indexnow: aucune clé public/<hex>.txt'); process.exit(0); }
const key = keyFile.replace(/\.txt$/, '');
const sitemap = 'dist/sitemap-0.xml';
if (!existsSync(sitemap)) { console.log('indexnow: dist/sitemap-0.xml absent'); process.exit(0); }
const urls = [...readFileSync(sitemap, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
urls.push(`https://${HOST}/llms.txt`);
try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls }),
  });
  console.log(`indexnow: HTTP ${res.status} pour ${urls.length} URL`);
} catch (e) { console.log(`indexnow: échec réseau ignoré (${e.message})`); }
