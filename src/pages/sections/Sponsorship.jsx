import { useEffect, useState } from 'react'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'

const Sponsorship = () => {
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
      id='sponsorships'
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        WebkitBackdropFilter: 'blur(2px)',
        backgroundColor: '#000000',
      }}
    >
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1 style={{ fontSize: headingFontSize, margin: 0 }}>Sponsorships</h1>
        <p
          style={{
            fontSize: subTextFontSize,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Collaborate with Stoofers to promote your brand directly to India's
          most connected student audience.
        </p>
      </header>

      <section>
        <CardGrid>
          <GlassCard
            hoverEffect='scale'
            style={{
              maxWidth: '500px',
              margin: '0 auto',
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
              Want to get sponsored by Stoofers? We're excited to support
              creators and communities! Apply now by emailing us at{' '}
              <a
                href='mailto:sponsorships@stoofers.com'
                style={{
                  color: '#f0f0f0',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                sponsorships@stoofers.com
              </a>{' '}
              — let's make something awesome together!
            </p>
          </GlassCard>
        </CardGrid>
      </section>
    </div>
  )
}

export default Sponsorship
