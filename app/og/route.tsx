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
          background: '#0f0d0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '380px',
            color: '#f3ede4',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          N
        </span>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
