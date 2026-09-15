import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Manoj Kande — Software Engineer. Java · Backend · Distributed Systems. 22–30% faster search.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#070807',
          color: '#eef2ed',
          padding: '80px 90px',
          fontFamily: 'sans-serif',
          backgroundImage:
            'linear-gradient(90deg, transparent 0, transparent calc(50% - 580px), rgba(164,189,155,0.04) calc(50% - 580px), rgba(164,189,155,0.04) calc(50% - 579px), transparent calc(50% - 579px), transparent calc(50% + 579px), rgba(164,189,155,0.04) calc(50% + 579px), rgba(164,189,155,0.04) calc(50% + 580px), transparent calc(50% + 580px))',
          boxSizing: 'border-box',
        }}
      >
        {/* Top: wordmark + status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 34, fontWeight: 700, letterSpacing: '-0.08em' }}>
            <span>MK</span>
            <span style={{ color: '#c8f169' }}>.</span>
            <span style={{ marginLeft: 18, color: '#7a8a80', fontSize: 16, letterSpacing: '0.18em', fontWeight: 400 }}>MANOJ KANDE</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 18,
              letterSpacing: '0.12em',
              color: '#8a968d',
            }}
          >
            <span
              style={{
                display: 'flex',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#c8f169',
                marginRight: 14,
                boxShadow: '0 0 0 6px rgba(200,241,105,0.12)',
              }}
            />
            AVAILABLE FOR SOFTWARE ENGINEERING ROLES
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 30, color: '#c8f169', letterSpacing: '0.12em', marginBottom: 28 }}>SOFTWARE ENGINEER</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 104,
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: '-0.085em',
              margin: 0,
            }}
          >
            <div>Building systems</div>
            <div style={{ color: '#c8f169' }}>that scale.</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: '#8a968d', lineHeight: 1.5, maxWidth: 880 }}>
            Java · Spring Boot · Elasticsearch · Distributed Systems
          </div>
        </div>

        {/* Bottom: metric strip */}
        <div style={{ display: 'flex', borderTop: '1px solid #202923', paddingTop: 36 }}>
          {[
            ['22–30%', 'SEARCH TIME'],
            ['40%', 'CONTEXT RECOVERY'],
            ['15+', 'SECURITY FIXES'],
            ['90%+', 'TEST COVERAGE'],
          ].map(([value, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 24 }}>
              <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.06em', color: '#eef2ed' }}>{value}</div>
              <div style={{ marginTop: 10, fontSize: 14, letterSpacing: '0.12em', color: '#8a968d' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
