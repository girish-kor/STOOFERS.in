import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import '../assets/assets.css'

const formatNumber = value => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M+`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K+`
  return `${value}+`
}

const Stats = () => {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [hoveredStatIndex, setHoveredStatIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const logos = [
    'ikea',
    'uber',
    'nykaa',
    'flipkart',
    'hotstar',
    'puma',
    'ajio',
    'diesel',
    'croma',
    'decathlon',
    'amazon',
    'netflix',
    'paytm',
  ]

  const stats = [
    {
      label: 'Reachable Students',
      start: 920_000,
      end: 1_000_000,
    },
    {
      label: 'Top Brands',
      start: 420,
      end: 500,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])

  const renderStat = (stat, index) => (
    <div
      key={index}
      style={{ textAlign: 'center', minWidth: '80px' }}
      onMouseEnter={() => setHoveredStatIndex(index)}
      onMouseLeave={() => setHoveredStatIndex(null)}
    >
      <h2
        style={{
          fontSize: isMobile ? '1rem' : '1.4rem',
          color: hoveredStatIndex === index ? '#ff9500ff' : '#f2f2f2',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
        }}
      >
        {isVisible ? (
          <CountUp
            start={stat.start}
            end={stat.end}
            duration={2}
            formattingFn={formatNumber}
          />
        ) : (
          '0'
        )}
      </h2>
      <p style={{ color: '#67767D', fontSize: '0.7rem' }}>{stat.label}</p>
    </div>
  )

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundColor: '#000000',
        color: '#f2f2f2',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out',
        width: '100%',
        borderTop: '1px solid #2a2a2a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '0.8rem' : '0.6rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '1.3rem' : '1.6rem',
        }}
      >
        {renderStat(stats[0], 0)}

        {logos.map((name, idx) => {
          const base = `bg-logo-${name}`
          const hover = `bg-logo-${name}-color`
          const current = hoveredIndex === idx ? hover : base

          return (
            <div
              key={name}
              className={`bg-asset ${current}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: isMobile ? '38px' : '56px',
                height: isMobile ? '30px' : '50px',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer',
                transition: 'none',
                padding: isMobile ? '1.3rem' : '1.6rem',
              }}
            />
          )
        })}

        {renderStat(stats[1], 1)}
      </div>
    </div>
  )
}

export default Stats
