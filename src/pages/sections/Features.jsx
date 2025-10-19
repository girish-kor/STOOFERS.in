import { useEffect, useState } from 'react'
import '../assets/assets.css'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'
const Features = () => {
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

  const features = [
    {
      iconClass: 'bg-gif-check',
      title: 'Student Discounts',
      description: (
        <>
          Access Exclusive Student discounts from <strong>500+</strong> Top
          Brands
        </>
      ),
    },
    {
      iconClass: 'bg-gif-location',
      title: 'Local Deals',
      description: 'Find Crazy Local Deals Near You',
    },
    {
      iconClass: 'bg-gif-partner',
      title: 'Track Savings',
      description: 'Track total savings with Stoofers app',
    },
    {
      iconClass: 'bg-gif-gamepad',
      title: 'Play Games & Quizzes',
      description: (
        <>
          Play <strong>300+</strong> games on the app
        </>
      ),
    },
  ]

  return (
    <div
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        borderBottom: '1px solid #2a2a2a',
        background: '#000000',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#f2f2f2', fontSize: headingFontSize, margin: 0 }}>
          Features
        </h1>
        <p
          style={{
            fontSize: subTextFontSize,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Simple tools to help students save money
        </p>
      </div>

      <CardGrid>
        {features.map((f, i) => (
          <GlassCard key={i} hoverEffect='lift' style={{ minHeight: '160px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <div
                className={`bg-asset ${f.iconClass}`}
                style={{
                  height: '2.5rem',
                  width: '2.5rem',
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  margin: 0,
                  fontSize: '1.2rem',
                  color: '#f2f2f2',
                }}
              >
                {f.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#cccccc',
                lineHeight: 1.6,
                marginTop: '1rem',
              }}
            >
              {f.description}
            </p>
          </GlassCard>
        ))}
      </CardGrid>
    </div>
  )
}

export default Features
