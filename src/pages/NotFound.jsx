import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFFFFF' }}>
        404 - Page Not Found
      </h1>
      <p style={{ marginBottom: '30px', color: '#CCCCCC' }}>
        Oops! Looks like this page wandered off into the void.
      </p>
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            color: '#ffffffff',
            textDecoration: 'none',
            fontWeight: 'bold',
            backgroundColor: '#050505',
            padding: '10px 20px',
            borderRadius: '8px',
            border: '1px solid #1E88E5',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = '#1E88E5'
            e.target.style.color = '#fff'
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = '#050505'
            e.target.style.color = '#1E88E5'
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
