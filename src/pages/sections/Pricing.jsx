import { useEffect, useState } from 'react'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'

// Import background GIFs
import gif1 from '../assets/gifs/3d1.gif'
import gif2 from '../assets/gifs/3d2.gif'

const plans = [
  {
    name: 'Monthly',
    price: '₹9',
    period: '/month',
    features: [
      '1 month subscription for the Stoofers App',
      'Priority bookings at selected outlets',
      'Discounts on 500+ brands',
    ],
  },
  {
    name: 'Yearly',
    price: '₹99',
    period: '/year',
    features: [
      '1 year subscription for the Stoofers App',
      'Priority bookings at selected outlets',
      'Discounts on 500+ brands',
    ],
  },
]

const Pricing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fontSizes = {
    heading: isMobile ? '1.5rem' : '2rem',
    subText: isMobile ? '1rem' : '1.125rem',
    planTitle: isMobile ? '1.2rem' : '1.4rem',
    price: isMobile ? '1.1rem' : '1.3rem',
    period: isMobile ? '0.85rem' : '0.95rem',
    feature: isMobile ? '0.85rem' : '0.9rem',
  }

  return (
    <div
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        borderBottom: '1px solid #2a2a2a',
        boxSizing: 'border-box',
      }}
    >
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1 style={{ fontSize: fontSizes.heading, margin: 0 }}>Your Plan!</h1>
        <p
          style={{
            fontSize: fontSizes.subText,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Select the plan that best fits your student lifestyle and start saving
          today.
        </p>
      </header>

      <section>
        <CardGrid>
          {plans.map((plan, index) => {
            const backgroundGif = plan.name === 'Monthly' ? gif1 : gif2
            const colorBorder =
              plan.name === 'Monthly' ? '#cccccc' : '#f3de21ff'

            return (
              <GlassCard
                key={index}
                hoverEffect='scale'
                style={{
                  minHeight: '420px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '1rem',
                  backgroundImage: `url(${backgroundGif})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  border: `1px solid ${colorBorder}`,
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  justifyContent: 'space-between',
                  gap: 'auto',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: '#f2f2f2',
                        fontSize: fontSizes.planTitle,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {plan.name}
                    </h3>
                    <div style={{ fontSize: fontSizes.price }}>
                      <span>{plan.price}</span>{' '}
                      <span
                        style={{
                          color: '#aaaaaa',
                          fontSize: fontSizes.period,
                        }}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* ADD SPACE BETWEEN BOTH THE CONTAINERS */}
                  <div style={{ marginTop: '1rem' }}>
                    {/* Bottom: Features */}
                    <ul
                      style={{
                        listStyle: 'none',
                        backgroundColor: '#00000084',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                      }}
                    >
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{
                            padding: '0.65rem 0.75rem',
                            fontSize: fontSizes.feature,
                            color: '#cccccc',
                            borderBottom:
                              i !== plan.features.length - 1
                                ? '1px solid #333'
                                : 'none',
                          }}
                        >
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </CardGrid>
      </section>
    </div>
  )
}

export default Pricing
