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
          background: '#f3ede4',
          borderRadius: '36px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          paddingLeft: '22px',
          paddingBottom: '20px',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '120px',
            color: '#1a1714',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          N
        </span>
        <div
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#c46a4f',
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            display: 'flex',
          }}
        />
      </div>
    ),
    { width: 180, height: 180 }
  );
}
