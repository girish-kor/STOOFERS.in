import { useEffect, useState } from 'react'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'

const PartnerOnboarding = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const headingFontSize = isMobile ? '1.5rem' : '2rem'
  const subTextFontSize = isMobile ? '1rem' : '1.125rem'
  const cardFontSize = isMobile ? '0.95rem' : '1rem'

  return (
    <div
      id='partner-onboarding'
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        WebkitBackdropFilter: 'blur(2px)',
        borderBottom: '1px solid #2a2a2a',
      }}
    >
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1 style={{ fontSize: headingFontSize, margin: 0 }}>
          Partner with Stoofers
        </h1>
        <p
          style={{
            fontSize: subTextFontSize,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Connect your business to India's largest student community through
          powerful Gen Z partnerships.
        </p>
      </header>

      <section>
        <CardGrid>
          <GlassCard
            hoverEffect='scale'
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: '#cccccc',
                fontSize: cardFontSize,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'justify',
              }}
            >
              Want to reach India's Gen Z student community through high-impact,
              business-focused collaborations? Let's connect.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a
                href='mailto:partnerships@stoofers.com'
                style={{ color: '#f0f0f0', textDecoration: 'underline' }}
              >
                partnerships@stoofers.com
              </a>
            </div>
          </GlassCard>
        </CardGrid>
      </section>
    </div>
  )
}

export default PartnerOnboarding
