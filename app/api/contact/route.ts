import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitize(val: unknown): string {
  if (typeof val !== 'string') return '';
  return escapeHtml(val.slice(0, 2000).trim());
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const service = sanitize(body.service);
  const room = sanitize(body.room);
  const message = sanitize(body.message);

  if (!name || !email || !service) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
  }

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ error: 'Nachricht konnte nicht gesendet werden.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1714">
      <h2 style="font-family:Georgia,serif;font-weight:300;border-bottom:1px solid #e6dccd;padding-bottom:16px">
        Neue Anfrage &mdash; Nermin Interiors
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:24px">
        <tr><td style="padding:10px 0;border-bottom:1px solid #e6dccd;color:#8a7a66;font-size:12px;letter-spacing:.1em;text-transform:uppercase;width:120px">Name</td><td style="padding:10px 0;border-bottom:1px solid #e6dccd">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #e6dccd;color:#8a7a66;font-size:12px;letter-spacing:.1em;text-transform:uppercase">E-Mail</td><td style="padding:10px 0;border-bottom:1px solid #e6dccd"><a href="mailto:${email}" style="color:#c46a4f">${email}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #e6dccd;color:#8a7a66;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Leistung</td><td style="padding:10px 0;border-bottom:1px solid #e6dccd">${service}</td></tr>
        ${room ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e6dccd;color:#8a7a66;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Raum</td><td style="padding:10px 0;border-bottom:1px solid #e6dccd">${room}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:10px 0;color:#8a7a66;font-size:12px;letter-spacing:.1em;text-transform:uppercase;vertical-align:top">Nachricht</td><td style="padding:10px 0">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Nermin Interiors" <${SMTP_USER}>`,
      to: 'nermin.interiors@gmail.com',
      replyTo: email,
      subject: `Neue Anfrage von ${name} — ${service}`,
      html,
    });
  } catch {
    return NextResponse.json({ error: 'Nachricht konnte nicht gesendet werden.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
