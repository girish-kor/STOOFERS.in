import { useEffect, useState } from 'react'
import CardGrid from './sections/CardGrid'
import GlassCard from './sections/GlassCard'

const Chat = () => {
  const [hovered, setHovered] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = screenSize.width < 768
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024

  const getPadding = () => {
    if (isMobile) return '2rem 1rem'
    if (isTablet) return '3rem 1.5rem'
    return '4rem 2rem'
  }

  const getMaxWidth = () => {
    if (isMobile) return '100%'
    if (isTablet) return '600px'
    return '500px'
  }

  const getCardPadding = () => {
    if (isMobile) return '1.5rem'
    if (isTablet) return '1.75rem'
    return '2rem'
  }

  return (
    <div
      id='chat'
      style={{
        padding: getPadding(),
        color: '#f2f2f2',
        WebkitBackdropFilter: 'blur(2px)',
        backgroundColor: '#000000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <header
        style={{
          textAlign: 'center',
          paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            margin: 0,
            wordBreak: 'break-word',
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#cccccc',
            margin: 'clamp(1rem, 2vw, 1.5rem) auto 0',
            lineHeight: '1.5',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          Questions, feedback, or just want to say hi? We'd love to hear from
          you.
        </p>
      </header>

      <section style={{ width: '100%', maxWidth: '1000px' }}>
        <CardGrid>
          <GlassCard
            hoverEffect='scale'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              maxWidth: getMaxWidth(),
              width: '100%',
              margin: '0 auto',
              textAlign: 'center',
              padding: getCardPadding(),
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              boxShadow: hovered
                ? '0 10px 20px rgba(0, 0, 0, 0.4)'
                : '0 6px 12px rgba(0, 0, 0, 0.3)',
              backgroundColor: '#11111180',
              boxSizing: 'border-box',
            }}
          >
            <p
              style={{
                color: '#cccccc',
                fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
                lineHeight: '1.6',
                margin: 0,
                textAlign: 'justify',
                wordBreak: 'break-word',
                hyphens: 'auto',
              }}
            >
              Whether it's a suggestion or you simply want to chat, drop us a
              line at{' '}
              <a
                href='mailto:contact@stoofers.in'
                style={{
                  color: '#f0f0f0',
                  textDecoration: 'underline',
                  wordBreak: 'break-word',
                }}
              >
                contact@stoofers.in
              </a>
              . We're here to help!
            </p>
          </GlassCard>
        </CardGrid>
      </section>
    </div>
  )
}

export default Chat
