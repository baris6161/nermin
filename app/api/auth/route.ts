import { NextRequest, NextResponse } from 'next/server';

const PREVIEW_NAME = process.env.PREVIEW_NAME || 'baro';
const PREVIEW_PASS = process.env.PREVIEW_PASS || '6161';
const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN ?? 'nermin-cs-2025';

export async function POST(req: NextRequest) {
  const { name, password } = await req.json();

  if (name === PREVIEW_NAME && password === PREVIEW_PASS) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set('nermin-preview', PREVIEW_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }

  return NextResponse.json({ error: 'Ungültige Zugangsdaten.' }, { status: 401 });
}
