import { useEffect, useState } from 'react'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'
const Testimonials = () => {
  const [hovered, setHovered] = useState(null)
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
  const quoteFontSize = isMobile ? '0.95rem' : '1rem'
  const nameFontSize = isMobile ? '1rem' : '1.05rem'
  const collegeFontSize = isMobile ? '0.85rem' : '0.9rem'

  const testimonials = [
    {
      quote:
        'Stoofers has saved me over ₹5000 in just 3 months! The discounts on food and books are amazing.',
      name: 'Priya Sharma',
      college: 'Delhi University',
      stars: 5,
    },
    {
      quote:
        'As a hostel student, every rupee counts. Stoofers helps me manage my expenses better.',
      name: 'Rahul Kumar',
      college: 'IIT Delhi',
      stars: 5,
    },
    {
      quote:
        'The virtual card feature is so convenient. I can use it for online purchases too!',
      name: 'Ananya Singh',
      college: 'SRCC',
      stars: 4,
    },
    {
      quote:
        'Simple to use and genuine discounts. Highly recommend to all students.',
      name: 'Sneha Gupta',
      college: 'Jadavpur University',
      stars: 4,
    },
    {
      quote:
        'I can play multiple games on Stoofers without downloading each one. Isn’t it crazy?',
      name: 'Vikash Yadav',
      college: 'NIT Warangal',
      stars: 5,
    },
  ]

  return (
    <div
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        background: '#000000',
        borderBottom: '1px solid #2a2a2a',
        boxSizing: 'border-box',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: headingFontSize, margin: 0 }}>
          What Students Say ?
        </h1>
        <p
          style={{
            fontSize: subTextFontSize,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Real reviews from students who are saving money with Stoofers every
          day.
        </p>
      </header>

      <section>
        <CardGrid>
          {testimonials.map((t, index) => (
            <GlassCard
              key={index}
              hoverEffect='lift'
              style={{
                minHeight: '220px',
                transition: 'all 0.3s ease',
                transform:
                  hovered === index ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow:
                  hovered === index
                    ? '0 8px 16px rgba(0,0,0,0.3)'
                    : '0 2px 6px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      color: i < t.stars ? '#f1c40f' : '#444444',
                      fontSize: '1.1rem',
                      marginRight: '0.25rem',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: quoteFontSize,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#e0e0e0',
                  marginBottom: '1.5rem',
                  flex: 1,
                }}
              >
                "{t.quote}"
              </p>

              <div>
                <p
                  style={{
                    fontSize: nameFontSize,
                    fontWeight: 600,
                    color: '#f2f2f2',
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: collegeFontSize,
                    color: '#ccc',
                    margin: 0,
                  }}
                >
                  {t.college}
                </p>
              </div>
            </GlassCard>
          ))}
        </CardGrid>
      </section>
    </div>
  )
}

export default Testimonials
