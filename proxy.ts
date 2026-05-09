import { NextRequest, NextResponse } from 'next/server';

const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN ?? 'nermin-cs-2025';

function isPublicPath(pathname: string): boolean {
  return (
    pathname.startsWith('/_next/') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/favicon') ||
    pathname === '/api/auth' ||
    pathname === '/og' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  );
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isPublicPath(pathname)) return NextResponse.next();

  // Redirect /coming-soon → / so canonical URL is always /
  if (pathname === '/coming-soon' || pathname === '/coming-soon/') {
    return NextResponse.redirect(new URL('/', req.url), { status: 301 });
  }

  const authed = req.cookies.get('nermin-preview')?.value === PREVIEW_TOKEN;

  if (authed) return NextResponse.next();

  // Unauthenticated: rewrite / to /coming-soon (browser URL stays /), redirect everything else to /
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/coming-soon', req.url));
  }

  return NextResponse.redirect(new URL('/', req.url), { status: 302 });
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|images/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
