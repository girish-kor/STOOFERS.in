import { useEffect, useState } from 'react'

const Container = ({ title, children }) => {
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

  const isMobile = screenSize.width <= 768
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024
  const isLarge = screenSize.width > 1200

  const getContainerWidth = () => {
    if (isMobile) return '95%'
    if (isTablet) return '85%'
    if (isLarge) return '60%'
    return '75%'
  }

  const getContainerPadding = () => {
    if (isMobile) return '1rem'
    if (isTablet) return '1.5rem'
    return '2rem'
  }

  const getFontSize = () => {
    if (isMobile) return '0.875rem'
    if (isTablet) return '0.95rem'
    return '1rem'
  }

  const getTitleSize = () => {
    if (isMobile) return '1.5rem'
    if (isTablet) return '1.75rem'
    return '2rem'
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: isMobile ? '0.5rem' : '1rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            color: '#f2f2f2',
            backgroundColor: '#050505',
            padding: getContainerPadding(),
            width: getContainerWidth(),
            maxWidth: '1200px',
            overflowY: 'auto',
            overflowX: 'hidden',
            lineHeight: '1.6',
            scrollbarWidth: 'thin',
            scrollbarColor: '#2a2a2a #050505',
            border: '1px dashed #2a2a2a',
            borderRadius: '0.6rem',
            fontFamily: 'sans-serif',
            textAlign: 'left',
            boxSizing: 'border-box',
          }}
        >
          <h1
            style={{
              fontSize: getTitleSize(),
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px dashed #2a2a2a',
              textAlign: 'center',
              fontWeight: '900',
              wordBreak: 'break-word',
            }}
          >
            {title}
          </h1>

          <div
            style={{
              fontSize: getFontSize(),
              lineHeight: '1.7',
              textAlign: 'justify',
              wordBreak: 'break-word',
              hyphens: 'auto',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
