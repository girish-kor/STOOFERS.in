import { useEffect, useState } from 'react'
import './assets/assets.css'
import Container from './Container'

const AboutPage = () => {
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const isMobile = screenSize.width <= 768
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024

  const getGridColumns = () => {
    if (isMobile) return 'repeat(2, 1fr)'
    if (isTablet) return 'repeat(2, 1fr)'
    return 'repeat(auto-fit, minmax(200px, 1fr))'
  }

  const getGridGap = () => {
    if (isMobile) return '1rem'
    if (isTablet) return '1.5rem'
    return '2rem'
  }

  const teamData = [
    {
      imageClass: 'bg-img-keshav',
      name: 'Keshav Verma',
      role: 'Founder & CEO',
      socials: [
        ['https://www.instagram.com/vermakeshav7', 'instagram'],
        ['https://www.linkedin.com/in/keshav-verma-5930021aa', 'linkedin'],
      ],
    },
    {
      imageClass: 'bg-img-purav',
      name: 'Purav Jha',
      role: 'Co-Founder & CCO',
      socials: [
        ['https://www.youtube.com/@Puravjha_', 'youtube'],
        ['https://www.instagram.com/puravjha', 'instagram'],
      ],
    },
    {
      imageClass: 'bg-img-himanshu',
      name: 'Himanshu Gaur',
      role: 'Co-Founder & CMO',
      socials: [
        ['https://www.instagram.com/itshimanshugaur', 'instagram'],
        ['https://www.linkedin.com/in/himanshu-gaur-a5676a1aa', 'linkedin'],
      ],
    },
    {
      imageClass: 'bg-img-neeraj',
      name: 'Neeraj Walia',
      role: 'Co-Founder & CTO',
      socials: [['https://www.instagram.com/ezsnippet/', 'instagram']],
    },
  ]

  const TeamCard = ({ imageClass, name, role, socials }) => (
    <div
      className={`bg-asset ${imageClass}`}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid #333333',
        backdropFilter: 'blur(2px)',
        backgroundColor: '#ffffff08',
        height: 'clamp(250px, 25vw, 350px)',
        width: '100%',
        maxWidth: isMobile ? '150px' : '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderRadius: '1rem',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'clamp(0.25rem, 1vw, 0.5rem)',
          width: '100%',
          borderRadius: '1rem',
          border: 'none',
          padding: '0 0.5rem',
        }}
      >
        {socials.map(([url, platform]) => (
          <IconLink key={platform} url={url} platform={platform} />
        ))}
      </div>

      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(3px)',
          textAlign: 'center',
          width: '100%',
          borderRadius: '0 0 1rem 1rem',
          border: 'none',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
            fontWeight: 'bold',
            color: '#f2f2f2',
            border: 'none',
            margin: '0 0 -0.25rem 0',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
            color: '#cccccc',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          {role}
        </p>
      </div>
    </div>
  )

  const IconLink = ({ url, platform }) => (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Link to ${platform}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'clamp(1.5rem, 3vw, 2rem)',
        height: 'clamp(1.5rem, 3vw, 2rem)',
        border: 'none',
        flexShrink: 0,
      }}
    >
      <div
        className={`bg-asset bg-logo-${platform}`}
        style={{
          width: '70%',
          height: '70%',
          border: 'none',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </a>
  )

  return (
    <Container title='About Us'>
      <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <p
          style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
            color: '#cccccc',
            marginTop: '1rem',
            border: 'none',
            lineHeight: '1.6',
            textAlign: 'justify',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          Our mission is to help students save money on every transaction they
          make in their college life. We aim to become a globally recognized app
          that acts like a college buddy for every student.
        </p>
      </div>

      <div>
        <h2
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            borderBottom: '1px dashed #2a2a2a',
            paddingBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
            wordBreak: 'break-word',
          }}
        >
          Our Team
        </h2>

        <div
          className='team-cards'
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: getGridGap(),
            justifyItems: 'center',
            alignItems: 'start',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {teamData.map(member => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
