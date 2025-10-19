import { Link, useNavigate } from 'react-router-dom'
import stoofersLogo from '../assets/logos/stoofers.png'

const HeaderBar = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/chat')
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        paddingLeft: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #2a2a2a',
        backgroundColor: '#000000',
      }}
    >
      <Link
        to='/'
        aria-label='Navigate to Home'
        style={{
          width: '100%',
          maxWidth: '7rem',
          height: 'auto',
          display: 'flex',
        }}
      >
        <img
          src={stoofersLogo}
          alt='Stoofers Home'
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </Link>

      <button
        onClick={handleContactClick}
        style={{
          padding: '1rem 2rem',
          fontSize: '0.95rem',
          color: '#f2f2f2',
          border: 'none',
          background: '#000000',
          borderLeft: '1px solid #2a2a2a',
          transition: 'background 0.3s ease, color 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.target.style.backgroundColor = '#2a2a2a'
          e.target.style.color = '#ffffff'
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.color = '#f2f2f2'
        }}
      >
        CONTACT US
      </button>
    </header>
  )
}

export default HeaderBar
