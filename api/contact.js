// Vercel Function : formulaire de contact, même logique que l'ancienne fonction Supabase
// send-contact-notification de benjamindebruijne.com (Resend : mail à Ben + accusé de réception au visiteur).
// Variable d'environnement requise : RESEND_API_KEY. Facultatives : CONTACT_FROM, CONTACT_TO.
const MAX = { name: 120, email: 200, message: 5000 };
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
const send = (key, payload) => fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

export async function POST(request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return json(503, { error: 'not-configured' });
  const from = process.env.CONTACT_FROM || 'Benjamin de Bruijne <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO || 'debruijneb@gmail.com';
  let data;
  try { data = await request.json(); } catch { return json(400, { error: 'json' }); }
  if (data.website) return json(200, { ok: true }); // pot de miel
  const name = String(data.name || '').trim().slice(0, MAX.name);
  const email = String(data.email || '').trim().slice(0, MAX.email);
  const message = String(data.message || '').trim().slice(0, MAX.message);
  const subject = String(data.subject || 'Contact via le site').slice(0, 150);
  const lang = String(data.lang || 'fr');
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json(422, { error: 'invalid' });

  const admin = await send(key, { from, to: [to], reply_to: email, subject: `Nouveau message de contact de ${name}`,
    html: `<h2>Nouveau message de contact</h2><p><strong>De :</strong> ${esc(name)} (${esc(email)})</p><p><strong>Sujet :</strong> ${esc(subject)}</p><p><strong>Langue :</strong> ${esc(lang)}</p><p><strong>Message :</strong></p><p>${esc(message).replace(/\n/g, '<br>')}</p>` });
  if (!admin.ok) return json(502, { error: 'resend', status: admin.status });

  const fr = lang.startsWith('fr');
  await send(key, { from, to: [email], subject: fr ? 'Merci pour votre message — Benjamin de Bruijne' : 'Thank you for your message — Benjamin de Bruijne',
    html: fr
      ? `<h2>Merci pour votre prise de contact !</h2><p>Bonjour ${esc(name)},</p><p>J'ai bien reçu votre message et je vous réponds sous 24h.</p><p>Bien à vous,</p><p>Benjamin de Bruijne<br>Consultant digital &amp; IA</p>`
      : `<h2>Thank you for getting in touch!</h2><p>Hello ${esc(name)},</p><p>I have received your message and will reply within 24 hours.</p><p>Best regards,</p><p>Benjamin de Bruijne<br>Digital &amp; AI consultant</p>` }).catch(() => {});
  return json(200, { ok: true });
}
