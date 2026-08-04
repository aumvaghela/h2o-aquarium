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
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '8px solid #7ABF50',
            borderRadius: '32px',
            padding: '60px 80px',
            background: '#fafafa',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={logoData as any}
            alt="H2O Aquarium Logo"
            width="250"
            height="250"
            style={{ marginBottom: '20px' }}
          />
          
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#7ABF50',
              margin: '0 0 40px 0',
              textAlign: 'center',
            }}
          >
            Premium Aquarium Shop in Vadodara
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                background: '#7ABF50',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '24px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
              }}
            >
              Custom Aquascaping
            </div>
            <div
              style={{
                background: '#7ABF50',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '24px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
              }}
            >
              Exotic Fishes
            </div>
            <div
              style={{
                background: '#7ABF50',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '24px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
              }}
            >
              Premium Supplies
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            color: '#64748b',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          <span>GF 17, S Square complex, Subhanpura Rd, Vadodara</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
