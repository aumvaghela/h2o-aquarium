import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'H2O Aquarium & Pets';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default async function Image() {
  const logoData = await fetch(new URL('./logo-og.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#112240',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '40px',
            position: 'relative'
          }}
        >
          {/* Logo */}
          <img
            src={logoData as any}
            alt="H2O Aquarium Logo"
            style={{ width: '300px', height: '300px', objectFit: 'contain', marginBottom: '20px' }}
          />
          
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#112240',
              margin: '0 0 40px 0',
              textAlign: 'center',
            }}
          >
            Premium Aquarium Shop in Vadodara
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '30px',
            }}
          >
            <div
              style={{
                background: '#7ABF50',
                padding: '12px 32px',
                borderRadius: '100px',
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Custom Aquascaping
            </div>
            <div
              style={{
                background: '#7ABF50',
                padding: '12px 32px',
                borderRadius: '100px',
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Exotic Fishes
            </div>
            <div
              style={{
                background: '#7ABF50',
                padding: '12px 32px',
                borderRadius: '100px',
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Premium Supplies
            </div>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              color: '#64748b',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            GF 17, S Square complex, Subhanpura Rd, Vadodara
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
