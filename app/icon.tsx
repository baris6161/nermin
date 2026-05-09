import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
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
            fontSize: '22px',
            color: '#f3ede4',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          N
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
