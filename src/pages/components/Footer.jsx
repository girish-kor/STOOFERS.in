import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import facebook from '../assets/logos/facebook.png'
import instagram from '../assets/logos/instagram.png'
import linkedin from '../assets/logos/linkedin.png'

const Footer = () => {
  const stoofersLogo = new URL('../assets/logos/stoofers.png', import.meta.url)
    .href
  const [currentYear] = useState(() => new Date().getFullYear().toString())
  const [imageError, setImageError] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Get current hash without the # symbol
  const currentHash = location.hash.replace('#', '')

  const handleNavClick = (e, path) => {
    e.preventDefault()
    if (location.pathname !== path) {
      navigate(path)
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }

  const handleSectionClick = sectionId => {
    if (location.pathname === '/home' || location.pathname === '/') {
      // If already on home page, just scroll to section
      navigate(`/home#${sectionId}`)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Navigate to home with hash
      navigate(`/home#${sectionId}`)
    }
  }

  const linkStyle = isActive => ({
    fontSize: '0.875rem',
    lineHeight: '1.6',
    marginBottom: '0.75rem',
    display: 'block',
    color: isActive ? '#fff' : '#a0a0a0',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'none',
    fontWeight: isActive ? 600 : 400,
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    ':hover': {
      color: '#66b2ff',
      transform: 'translateX(4px)',
    },
  })

  const sectionData = useMemo(
    () => [
      {
        title: 'PAGES',
        links: [
          ['Home', '/home'],
          ['About Us', '/about-us'],
          ['Privacy Policy', '/privacy-policy'],
          ['Refund Policy', '/refund-policy'],
          ['Terms & Conditions', '/terms-and-conditions'],
          ['Delete Account', '/delete-account'],
        ],
        handler: handleNavClick,
      },
      {
        title: 'USERS',
        links: [
          ['Features', 'features'],
          ['How Stoofers Work ?', 'howitworks'],
          ['What Students Say ?', 'testimonials'],
          ['Your Plan!', 'pricing'],
          ['FAQs', 'faq'],
        ],
        handler: handleSectionClick,
      },
      {
        title: 'BUSINESS & SPONSORS',
        links: [
          ['Partner with Stoofers', 'partner-onboarding'],
          ['Sponsorships', 'sponsorships'],
        ],
        handler: handleSectionClick,
      },
    ],
    [handleNavClick, handleSectionClick]
  )

  const socialLinks = [
    {
      platform: 'instagram',
      icon: instagram,
      url: 'https://instagram.com/stoofers',
    },
    {
      platform: 'facebook',
      icon: facebook,
      url: 'https://www.facebook.com/p/Stoofers-61578026622011/',
    },
    {
      platform: 'linkedin',
      icon: linkedin,
      url: 'https://in.linkedin.com/company/stoofers',
    },
  ]

  return (
    <footer
      role='contentinfo'
      style={{
        backgroundColor: '#000000',
        color: '#f2f2f2',
        borderTop: '1px solid #2a2a2a',
        width: '100%',
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          margin: '0 auto',
          padding: '3rem 1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            padding: '2rem 1rem 1.5rem',
            gap: '2rem',
          },
        }}
      >
        {/* Brand Section */}
        <div
          style={{
            gridColumn: window.innerWidth > 768 ? 'span 1' : 'span 1',
            maxWidth: '350px',
          }}
        >
          <button
            onClick={() => navigate('/')}
            onKeyDown={e => e.key === 'Enter' && navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              marginBottom: '1rem',
            }}
            aria-label='Return to homepage'
          >
            {!imageError ? (
              <img
                src={stoofersLogo}
                alt='Stoofers Logo'
                style={{
                  width: '8rem',
                  height: 'auto',
                  transition: 'transform 0.3s ease',
                }}
                onError={() => setImageError(true)}
                onMouseOver={e => (e.target.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.target.style.transform = 'scale(1)')}
              />
            ) : (
              <span
                style={{
                  fontSize: '1.5rem',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Stoofers
              </span>
            )}
          </button>

          <h3
            style={{
              fontSize: '1rem',
              marginTop: '1rem',
              marginBottom: '0.75rem',
              background:
                'linear-gradient(135deg, #FF9933 0%, #fff 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 900,
              lineHeight: '1.4',
            }}
          >
            India's No. 1 Student Discount App
          </h3>

          <p
            style={{
              fontSize: '0.9rem',
              color: '#b0b0b0',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
            }}
          >
            Discounts on 500+ top brands and crazy deals only at Stoofers App.
          </p>

          {/* Social Media Icons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {socialLinks.map(({ platform, icon, url }) => (
              <a
                key={platform}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.2rem',
                  borderRadius: '8px',
                  backgroundColor: '#1a1a1a',
                  transition: 'all 0.3s ease',
                  border: '1px solid #333',
                }}
                aria-label={`Visit our ${platform} page`}
                onMouseOver={e => {
                  e.target.style.backgroundColor = '#333'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = '#1a1a1a'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <img
                  src={icon}
                  alt={`${platform} icon`}
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    filter: 'brightness(0.9)',
                  }}
                />
              </a>
            ))}
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              color: '#888',
              lineHeight: '1.5',
              padding: '0.75rem',
              backgroundColor: '#0a0a0a',
              borderRadius: '6px',
              border: '1px solid #1a1a1a',
            }}
          >
            <strong style={{ color: '#ccc' }}>Address:</strong>
            <br />
            Stoofers IT Technologies Private Limited
            <br />
            155-A, Pocket - E, Dilshad Garden
            <br />
            Delhi - 110095, India
          </div>
        </div>

        {/* Navigation Sections */}
        {sectionData.map((section, i) => (
          <nav
            key={i}
            aria-label={section.title}
            style={{
              minWidth: '200px',
            }}
          >
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                marginBottom: '1.25rem',
                color: '#fff',
                letterSpacing: '0.7px',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              {section.title}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #66b3ff30, #4a91e231)',
                  borderRadius: '4px',
                }}
              />
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              {section.links.map(([label, target]) => {
                const isStatic = target.startsWith('/')
                const isActive = isStatic
                  ? location.pathname === target
                  : currentHash === target

                return (
                  <button
                    key={label}
                    onClick={e =>
                      isStatic
                        ? section.handler(e, target)
                        : section.handler(target)
                    }
                    onKeyDown={e =>
                      e.key === 'Enter' &&
                      (isStatic
                        ? section.handler(e, target)
                        : section.handler(target))
                    }
                    style={{
                      ...linkStyle(isActive),
                      padding: '0.25rem 0',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={e => {
                      if (!isActive) {
                        e.target.style.color = '#66b2ff'
                        e.target.style.paddingLeft = '0.5rem'
                      }
                    }}
                    onMouseOut={e => {
                      if (!isActive) {
                        e.target.style.color = '#a0a0a0'
                        e.target.style.paddingLeft = '0'
                      }
                    }}
                    aria-label={`Navigate to ${label}`}
                    tabIndex={0}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </nav>
        ))}
      </div>

      {/* Copyright Section */}
      <div
        style={{
          borderTop: '1px solid #2a2a2a',
          backgroundColor: '#0a0a0a',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '1.5rem 1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              color: '#888',
              margin: 0,
              fontWeight: 300,
            }}
          >
            © {currentYear} Stoofers IT Technologies Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
