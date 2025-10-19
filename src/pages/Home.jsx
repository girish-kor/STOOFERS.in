import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

// COMPONENTS
import Background from './components/Background.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

// SECTIONS
import FAQ from './sections/FAQ.jsx'
import Features from './sections/Features.jsx'
import Hero from './sections/Hero.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import PartnerOnboarding from './sections/PartnerOnboarding.jsx'
import Pricing from './sections/Pricing.jsx'
import Sponsorship from './sections/Sponsorship.jsx'
import Testimonials from './sections/Testimonials.jsx'

const SECTIONS = [
  { id: 'features', label: 'Features', component: <Features /> },
  { id: 'howitworks', label: 'How Stoofers Work ?', component: <HowItWorks /> },
  {
    id: 'testimonials',
    label: 'What Students Say ?',
    component: <Testimonials />,
  },
  { id: 'pricing', label: 'Your Plan!', component: <Pricing /> },
  { id: 'faq', label: 'FAQs', component: <FAQ /> },
  {
    id: 'partner-onboarding',
    label: 'Partner with Stoofers',
    component: <PartnerOnboarding />,
  },
  {
    id: 'sponsorships',
    label: 'Sponsorships',
    component: <Sponsorship />,
  },
]

const headingStyle = {
  color: '#888',
  fontWeight: 'bold',
  fontSize: '0.75rem',
  margin: '0 0 0.5rem 0',
  paddingTop: '2rem',
}

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()

  // Handle window resize
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)

      if (element) {
        const headerHeight = 80 // Approximate header height
        const elementPosition = element.offsetTop - headerHeight

        setTimeout(() => {
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          })
          setActiveSection(id)
        }, 100)
      }
    }
  }, [location.hash])

  // Handle scroll to update active section
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3

    // Check sections from top to bottom
    for (let i = 0; i < SECTIONS.length; i++) {
      const element = document.getElementById(SECTIONS[i].id)
      if (element) {
        const elementTop = element.offsetTop
        const elementBottom = elementTop + element.offsetHeight

        // If scroll position is within this section
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveSection(SECTIONS[i].id)
          return
        }
      }
    }

    // If we're above all sections
    if (scrollPosition < document.getElementById(SECTIONS[0].id)?.offsetTop) {
      setActiveSection(null)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  const getLinkStyle = useCallback((id, activeId) => {
    const isActive = id === activeId

    return {
      color: isActive ? '#f2f2f2' : '#cccccc',
      borderLeft: isActive ? '0.2rem solid #f2f2f2' : '0.125rem solid #2a2a2a',
      background: isActive
        ? 'linear-gradient(90deg, #111111ff 0%, #00000008 100%)'
        : 'transparent',
      padding: '0.5rem 0 0.5rem 1rem',
      textDecoration: 'none',
      fontWeight: isActive ? 'bold' : 'normal',
      display: 'block',
      fontSize: isActive ? '1rem' : '0.875rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    }
  }, [])

  const scrollToSection = useCallback(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })

      // Update URL hash without causing a jump
      window.history.replaceState(null, null, `#${sectionId}`)
      setActiveSection(sectionId)
    }
  }, [])

  const renderSidebarLinks = useMemo(() => {
    const handleLinkClick = id => e => {
      e.preventDefault()
      scrollToSection(id)
    }

    const makeLink = ({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        onClick={handleLinkClick(id)}
        style={getLinkStyle(id, activeSection)}
      >
        {label}
      </a>
    )

    return (
      <>
        <h5 style={headingStyle}>FOR USERS</h5>
        {SECTIONS.slice(0, 5).map(makeLink)}
        <h5 style={headingStyle}>FOR BUSINESS</h5>
        {SECTIONS.slice(5, 6).map(makeLink)}
        <h5 style={headingStyle}>FOR SPONSORS</h5>
        {SECTIONS.slice(6).map(makeLink)}
      </>
    )
  }, [activeSection, getLinkStyle, scrollToSection])

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Background>
        <div style={{ width: '100%' }}>
          <Header />
          <Hero />
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              width: '100%',
            }}
          >
            {!isMobile && (
              <aside
                style={{
                  width: '16.25rem',
                  padding: '0 2rem',
                  position: 'sticky',
                  top: '3.3rem',
                  alignSelf: 'flex-start',
                  height: '100vh',
                  overflowY: 'auto',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {renderSidebarLinks}
              </aside>
            )}
            <main
              style={{
                flex: 1,
                borderLeft: isMobile ? 'none' : '1px solid #2a2a2a',
                width: '100%',
              }}
            >
              {SECTIONS.map(({ id, component }) => (
                <section
                  key={id}
                  id={id}
                  style={{ backgroundColor: 'transparent' }}
                >
                  {component}
                </section>
              ))}
            </main>
          </div>
          <Footer />
        </div>
      </Background>
    </>
  )
}

export default HomePage
