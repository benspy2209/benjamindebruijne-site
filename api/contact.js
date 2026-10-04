// Vercel Function (Node) : envoi du formulaire de contact via Resend.
// Variables d'environnement : RESEND_API_KEY, CONTACT_FROM (ex. "Benjamin de Bruijne <contact@domaine.be>"), CONTACT_TO (défaut debruijneb@gmail.com).
const MAX = { name: 120, email: 200, message: 5000 };
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export default async function handler(request) {
  if (request.method !== 'POST') return json(405, { error: 'method' });
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || 'debruijneb@gmail.com';
  if (!key || !from) return json(503, { error: 'not-configured' });
  let data;
  try { data = await request.json(); } catch { return json(400, { error: 'json' }); }
  const name = String(data.name || '').trim().slice(0, MAX.name);
  const email = String(data.email || '').trim().slice(0, MAX.email);
  const message = String(data.message || '').trim().slice(0, MAX.message);
  if (data.website) return json(200, { ok: true }); // pot de miel : on fait semblant
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json(422, { error: 'invalid' });
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Projet via le site — ${name}`, text: `${message}\n\n— ${name} <${email}>\nLangue : ${data.lang || '?'}` }),
  });
  if (!r.ok) return json(502, { error: 'resend', status: r.status });
  return json(200, { ok: true });
}
