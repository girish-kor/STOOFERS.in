import { useEffect, useMemo, useRef, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768)
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return isMobile
}

const useDoubleTap = (delay = 300) => {
  const lastTap = useRef(0)
  return callback => {
    const now = Date.now()
    if (now - lastTap.current < delay) {
      callback()
    }
    lastTap.current = now
  }
}

const SpinningScreenshot = ({ axis = 'Y', speed = 60 }) => {
  const isMobile = useIsMobile()
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const lastMoveTimeRef = useRef(Date.now())
  const velocityRef = useRef(0)

  const [rotation, setRotation] = useState(0)
  const [modalIndex, setModalIndex] = useState(null)
  const [zoom, setZoom] = useState(1)
  const lastTouchDist = useRef(null)

  const radius = isMobile ? 160 : 216
  const width = isMobile ? 85 : 115.2
  const height = isMobile ? 180 : 242.8

  const screenshots = useMemo(
    () => [
      'bg-ss-pic-1',
      'bg-ss-pic-2',
      'bg-ss-pic-3',
      'bg-ss-pic-5',
      'bg-ss-pic-7',
      'bg-ss-pic-8',
      'bg-ss-pic-9',
    ],
    []
  )

  const doubleTap = useDoubleTap()

  useEffect(() => {
    let prevTime = performance.now()
    const animate = time => {
      const delta = time - prevTime
      prevTime = time
      if (!isDraggingRef.current) {
        setRotation(prev => (prev + (360 / (speed * 1000)) * delta) % 360)
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [speed])

  const handleStart = x => {
    isDraggingRef.current = true
    startXRef.current = x
    lastMoveTimeRef.current = Date.now()
    velocityRef.current = 0
  }

  const handleMove = x => {
    if (!isDraggingRef.current) return
    const now = Date.now()
    const delta = x - startXRef.current
    const deltaTime = now - lastMoveTimeRef.current || 1

    velocityRef.current = delta / deltaTime
    lastMoveTimeRef.current = now
    startXRef.current = x
    setRotation(prev => (prev + delta * 0.3) % 360)
  }

  const handleStop = () => {
    isDraggingRef.current = false
    let velocity = velocityRef.current * 10
    const decay = 0.95
    const inertia = () => {
      if (Math.abs(velocity) < 0.01) return
      setRotation(prev => (prev + velocity) % 360)
      velocity *= decay
      requestAnimationFrame(inertia)
    }
    requestAnimationFrame(inertia)
  }

  const openModal = index => {
    setModalIndex(index)
    setZoom(1)
  }
  const closeModal = () => setModalIndex(null)

  const nextImage = () => setModalIndex(prev => (prev + 1) % screenshots.length)
  const prevImage = () =>
    setModalIndex(prev => (prev - 1 + screenshots.length) % screenshots.length)

  const swipeStart = useRef(null)
  const handleTouchStart = e => {
    swipeStart.current = e.touches[0]?.clientX
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      lastTouchDist.current = Math.sqrt(dx * dx + dy * dy)
    }
  }

  const handleTouchEnd = e => {
    const endX = e.changedTouches[0]?.clientX
    const delta = endX - swipeStart.current
    if (delta > 50) prevImage()
    else if (delta < -50) nextImage()
  }

  const handleTouchMove = e => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const delta = dist - lastTouchDist.current
      setZoom(prev => Math.max(1, Math.min(3, prev + delta * 0.005)))
      lastTouchDist.current = dist
    }
  }

  return (
    <>
      {/* Spinner */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1000px',
          userSelect: 'none',
          touchAction: 'none',
          margin: isMobile ? '-3rem' : '-5rem',
          width: radius * 2,
          height: radius * 2,
        }}
        onMouseDown={e => handleStart(e.clientX)}
        onMouseMove={e => handleMove(e.clientX)}
        onMouseUp={handleStop}
        onMouseLeave={handleStop}
        onTouchStart={e => handleStart(e.touches[0].clientX)}
        onTouchMove={e => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleStop}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: `rotate${axis}(${rotation}deg)`,
            willChange: 'transform',
          }}
        >
          {screenshots.map((cls, i) => {
            const angle = (360 / screenshots.length) * i
            const rotate =
              axis === 'Y' ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)`
            return (
              <div
                key={i}
                className={`bg-asset ${cls}`}
                onDoubleClick={() => openModal(i)}
                onTouchEnd={() => doubleTap(() => openModal(i))}
                style={{
                  position: 'absolute',
                  width,
                  height,
                  borderRadius: 8,
                  transform: `${rotate} translateZ(${radius}px)`,
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  margin: 'auto',
                  transformOrigin: 'center',
                  cursor: 'pointer',
                  willChange: 'transform',
                  boxShadow: '0 0 50px 5px #000000',
                  border: '1px solid #000000',
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className='modal-overlay'
          style={{
            position: 'fixed',
            inset: 0,
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            border: '1px solid #2a2a2a',
            overflow: 'hidden',
          }}
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`modal-image bg-asset ${screenshots[modalIndex]}`}
            style={{
              width: isMobile ? '100%' : '70%',
              height: isMobile ? '90%' : '90%',
              borderRadius: '12px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'relative',
              transform: `scale(${zoom})`,
              transition: 'transform 0.3s ease',
            }}
            onClick={e => e.stopPropagation()}
            onDoubleClick={() => setZoom(prev => (prev === 1 ? 2 : 1))}
            onWheel={e => {
              e.preventDefault()
              setZoom(prev =>
                Math.max(1, Math.min(3, prev + e.deltaY * -0.001))
              )
            }}
          >
            <button
              style={navButton('left')}
              onClick={prevImage}
              aria-label='Previous'
            >
              ←
            </button>
            <button
              style={navButton('right')}
              onClick={nextImage}
              aria-label='Next'
            >
              →
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: '#007bffff',
                color: '#000000',
                fontWeight: '900',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                fontSize: '1.5rem',
                cursor: 'pointer',
                border: 'none',
              }}
              aria-label='Close'
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const isMobile = window.innerWidth < 768
const navButton = direction => ({
  position: 'absolute',
  top: '50%',
  [direction]: '2%',
  fontSize: '2rem',
  color: isMobile ? 'none' : '#f2f2f2',
  border: 'none',
  background: '#00000025',
  cursor: 'pointer',
  userSelect: 'none',
  transform: 'translateY(-50%)',
  TextAlign: 'center',
})

export default SpinningScreenshot
