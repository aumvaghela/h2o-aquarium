import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'H2O Aquarium & Pets';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #001220, #112240)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #6ee7b7',
            borderRadius: '24px',
            padding: '60px 80px',
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#6ee7b7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#001220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l2-2 2 2h4" />
                <path d="M2 16h4l2-2 2 2h4" />
                <path d="M22 12c-2.76 0-5-2.24-5-5s2.24-5 5-5" />
              </svg>
            </div>
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                margin: 0,
                color: 'white',
                letterSpacing: '-2px',
              }}
            >
              H2O Aquarium
            </h1>
          </div>
          
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 'normal',
              color: '#6ee7b7',
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
              marginTop: '20px',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                color: '#e2e8f0',
              }}
            >
              Custom Aquascaping
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                color: '#e2e8f0',
              }}
            >
              Exotic Fishes
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                color: '#e2e8f0',
              }}
            >
              Premium Supplies
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            display: 'flex',
            alignItems: 'center',
            color: '#94a3b8',
            fontSize: '24px',
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
