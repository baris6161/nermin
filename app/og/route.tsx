import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#1a1714',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Thin terracotta top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: '#c46a4f',
            display: 'flex',
          }}
        />

        {/* Center: stacked logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0px',
          }}
        >
          {/* NERMIN */}
          <div
            style={{
              fontSize: '110px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#f3ede4',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              fontFamily: 'serif',
              display: 'flex',
            }}
          >
            Nermin
          </div>

          {/* Thin separator */}
          <div
            style={{
              width: '48px',
              height: '1px',
              background: '#c46a4f',
              margin: '20px 0 18px',
              display: 'flex',
            }}
          />

          {/* INTERIORS */}
          <div
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#8a7a66',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
              display: 'flex',
            }}
          >
            INTERIORS
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '72px',
            fontSize: '13px',
            color: '#3d342c',
            letterSpacing: '0.1em',
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          nermin-interiors.de
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
