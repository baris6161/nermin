import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#f3ede4',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 72px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c46a4f', display: 'flex' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontStyle: 'italic', fontSize: '22px', color: '#1a1714', letterSpacing: '-0.01em', display: 'flex' }}>nermin</span>
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8a7a66', display: 'flex' }}>INTERIORS</span>
            </div>
          </div>
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8a7a66', display: 'flex' }}>Interior Design Studio</span>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          <span style={{ fontSize: '148px', fontWeight: 400, color: '#1a1714', lineHeight: 0.95, letterSpacing: '-0.02em', display: 'flex' }}>Räume,</span>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'baseline' }}>
            <span style={{ fontSize: '148px', fontStyle: 'italic', fontWeight: 400, color: '#1a1714', lineHeight: 0.95, letterSpacing: '-0.02em', display: 'flex' }}>die</span>
            <span style={{ fontSize: '148px', fontStyle: 'italic', fontWeight: 400, color: '#c46a4f', lineHeight: 0.95, letterSpacing: '-0.02em', display: 'flex' }}>ruhig</span>
            <span style={{ fontSize: '148px', fontStyle: 'italic', fontWeight: 400, color: '#1a1714', lineHeight: 0.95, letterSpacing: '-0.02em', display: 'flex' }}>bleiben.</span>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7a66', display: 'flex' }}>nermin-interiors.de</span>
          <span style={{ color: '#c46a4f', fontSize: '12px', display: 'flex' }}>·</span>
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7a66', display: 'flex' }}>Minimalistisches Interior Design</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
