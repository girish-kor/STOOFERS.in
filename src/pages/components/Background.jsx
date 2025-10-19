import { useEffect } from 'react'

const Background = ({ children }) => {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes gridScroll {
        0% {
          background-position: 0px 0px;
        }
        100% {
          background-position: 240px 240px;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <span>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Gradient Grid Background */}
          <div
            aria-hidden='true'
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              backgroundColor: '#000000',
              backgroundImage: `
            repeating-linear-gradient(
              0deg,
              #050505 0px,
              #2A2A2A 1px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              90deg,
              #050505 0px,
              #2A2A2A 1px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.05) 30px,
              rgba(255, 255, 255, 0.05) 31px,
              transparent 31px,
              transparent 60px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 30px,
              rgba(255, 255, 255, 0.05) 31px,
              transparent 31px,
              transparent 60px
            )
          `,
              backgroundSize: '60px 60px',
              backgroundRepeat: 'repeat',
              animation: 'gridScroll 30s linear infinite',
              willChange: 'background-position',
              pointerEvents: 'none',
            }}
          />

          {/* Foreground Content */}
          <section
            id='home'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              width: '100%',
            }}
          >
            {children}
          </section>
        </div>
      </span>
    </>
  )
}

export default Background
