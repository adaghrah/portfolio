import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Ahmad Daghrah - Staff Frontend Engineer';
export const size = {
  width: 1200,
  height: 630,
};
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', color: '#1a1a1a' }}>
          Ahmad Daghrah
        </div>
        <div style={{ fontSize: 48, color: '#4a5568', marginTop: 24 }}>
          Staff Frontend Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
