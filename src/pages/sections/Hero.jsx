import { useEffect, useMemo, useState } from 'react'
import SpinningScreenshot from '../components/SpinningScreenshot.jsx'
import Stats from '../components/Stats.jsx'

// Icons
import appStore from '../assets/logos/app-store-100.svg'
import appStoreColor from '../assets/logos/colorLogos/app-store-color-100.svg'
import playStoreColor from '../assets/logos/colorLogos/play-store-color-100.png'
import playstore from '../assets/logos/play-store-100.png'

const HoverableButton = ({ href, iconSrc, hoverIconSrc, line1, line2 }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.6rem 1.2rem',
        border: '1px solid #333',
        textDecoration: 'none',
        color: '#f2f2f2',
        gap: '0.6rem',
        backdropFilter: 'blur(1px)',
        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        borderRadius: '8px',
        backgroundColor: isHovered ? '#f2f2f2' : 'transparent',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <img
        src={isHovered ? hoverIconSrc : iconSrc}
        alt={`${line2} logo`}
        style={{ width: 24, height: 24 }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1,
          gap: '0.2rem',
        }}
      >
        <span
          style={{
            fontSize: isMobile ? '0.8rem' : '0.8rem',
            color: isHovered ? '#050505' : '#f2f2f2',
          }}
        >
          {line1}
        </span>
        <span
          style={{
            fontWeight: 'bold',
            fontSize: isMobile ? '0.9rem' : '0.9rem',
            color: isHovered ? '#050505' : '#f2f2f2',
          }}
        >
          {line2}
        </span>
      </div>
    </a>
  )
}

const HeroSection = () => {
  const headingText = useMemo(
    () => ['Welcome to Stoofers', "India's No.1 Student Discount App"],
    []
  )

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  const getMaxHeight = () => {
    const longestText = "India's No.1 Student Discount App"
    const baseHeight = 2.8 // rem
    const mobileBreakWidth = 768

    if (
      typeof window !== 'undefined' &&
      window.innerWidth <= mobileBreakWidth
    ) {
      if (longestText.length > 20) {
        return baseHeight * 1.8 // Approx 2 lines
      }
    }
    return baseHeight
  }

  const [maxHeight, setMaxHeight] = useState(getMaxHeight())

  useEffect(() => {
    const handleResize = () => setMaxHeight(getMaxHeight())
    window?.addEventListener('resize', handleResize)
    return () => window?.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const currentText = headingText[textIndex]
    if (!currentText) return

    const typingSpeed = isDeleting ? 50 : 100
    const pauseBeforeDelete = 1500

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex(prev => (prev + 1) % headingText.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, headingText, textIndex])

  return (
    <div style={{}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          borderBottom: '1px solid #2a2a2a',
          boxSizing: 'border-box',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            position: 'relative',
            marginBottom: '2rem',
            paddingTop: '2rem',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 'bold',
              lineHeight: 1.3,
              color: '#f2f2f2',
              height: `${maxHeight}rem`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 1rem',
              wordBreak: 'break-word',
              hyphens: 'auto',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                textAlign: 'center',
                maxWidth: '100%',
              }}
            >
              {displayText}
              <span
                aria-hidden='true'
                style={{
                  display: 'inline-block',
                  width: '0.5rem',
                  height: '2rem',
                  backgroundColor: '#e24867ff',
                  marginLeft: '5px',
                  verticalAlign: 'middle',
                  borderRadius: '2px',
                }}
              />
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Screenshot */}
          <div
            style={{
              width: '90%',
              maxWidth: '600px',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}
          >
            <SpinningScreenshot />
          </div>

          {/* App Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'space-evenly',
              marginBottom: '2rem',
              width: '100%',
              padding: '0 1rem',
              maxWidth: '600px',
            }}
          >
            <HoverableButton
              href='https://play.google.com/store/apps/details?id=com.stoofers.stoofers'
              iconSrc={playstore}
              hoverIconSrc={playStoreColor}
              line1='GET IT ON'
              line2='PLAY STORE'
            />
            <HoverableButton
              href='https://apps.apple.com/in/app/stoofers-your-college-buddy/id6744251080'
              iconSrc={appStore}
              hoverIconSrc={appStoreColor}
              line1='GET IT ON'
              line2='APP STORE'
            />
          </div>

          {/* Description */}
          <div
            style={{
              marginBottom: '2rem',
              width: '100%',
              padding: '0 1rem',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                lineHeight: 1.6,
                color: '#f2f2f2',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Stoofers App connects students with brands through deals that
              speak for their wants, needs, and interests.
            </p>
          </div>

          <Stats />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
