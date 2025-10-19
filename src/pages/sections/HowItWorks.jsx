import { useEffect, useState } from 'react'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'

const HowItWorks = () => {
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
  const stepFontSize = isMobile ? '1rem' : '1.2rem'
  const descriptionFontSize = isMobile ? '0.9rem' : '0.95rem'

  const steps = [
    {
      step: '01',
      title: 'Download & Register',
      description: 'Download the app and register using your student details.',
    },
    {
      step: '02',
      title: 'Choose Subscription',
      description:
        'Choose your plan and pay securely to unlock student-only discounts.',
    },
    {
      step: '03',
      title: 'Start Using',
      description:
        'Start using Stoofers at 500+ partner brands, both online and offline.',
    },
  ]

  return (
    <div
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        borderBottom: '1px solid #2a2a2a',
        boxSizing: 'border-box',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#f2f2f2', fontSize: headingFontSize, margin: 0 }}>
          How Stoofers Works ?
        </h1>
        <p
          style={{
            fontSize: subTextFontSize,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Here's how easy it is to get started with Stoofers and start saving on
          all your favourite brands and services.
        </p>
      </header>

      <CardGrid>
        {steps.map((step, i) => (
          <GlassCard
            key={i}
            hoverEffect='lift'
            style={{
              minHeight: '160px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span
                style={{
                  fontSize: stepFontSize,
                  color: '#536DFE',
                  fontWeight: 600,
                }}
              >
                {step.step}
              </span>
              <h3
                style={{
                  color: '#f2f2f2',
                  fontSize: stepFontSize,
                  margin: 0,
                }}
              >
                {step.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: descriptionFontSize,
                color: '#cccccc',
                lineHeight: 1.6,
                marginTop: '1rem',
              }}
            >
              {step.description}
            </p>
          </GlassCard>
        ))}
      </CardGrid>
    </div>
  )
}

export default HowItWorks
