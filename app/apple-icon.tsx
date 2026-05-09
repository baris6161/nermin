import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          background: '#1a1714',
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
            fontSize: '124px',
            color: '#f3ede4',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          N
        </span>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
