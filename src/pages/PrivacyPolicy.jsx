import { useNavigate } from 'react-router-dom'
import Container from './Container'

const PrivacyPolicy = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/chat')
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  const sectionStyle = {
    marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
  }

  const headingStyle = {
    fontWeight: 'bold',
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: '#ffffff',
  }

  const subHeadingStyle = {
    fontWeight: 'bold',
    marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
    fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
    color: '#e0e0e0',
  }

  const listItemStyle = {
    marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)',
    paddingLeft: '0.5rem',
  }

  const linkStyle = {
    color: '#4FC3F7',
    cursor: 'pointer',
    textDecoration: 'underline',
    wordBreak: 'break-word',
  }

  const effectiveDateStyle = {
    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
    color: '#b0b0b0',
    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
    fontStyle: 'italic',
  }

  return (
    <Container title='Privacy Policy'>
      <div style={effectiveDateStyle}>Effective Date: 29th April, 2025</div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Information We Collect</div>

        <div style={subHeadingStyle}>Personal Information:</div>
        <div style={listItemStyle}>- Name, email address, phone number</div>
        <div style={listItemStyle}>
          - Educational institution and student status
        </div>
        <div style={listItemStyle}>
          - Date of birth and location information
        </div>
        <div style={listItemStyle}>- Payment and billing information</div>

        <div style={subHeadingStyle}>Usage Information:</div>
        <div style={listItemStyle}>- App usage patterns and preferences</div>
        <div style={listItemStyle}>
          - Transaction history and discount usage
        </div>
        <div style={listItemStyle}>- Device information and identifiers</div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>How We Use Your Information</div>
        <div style={listItemStyle}>- To provide and maintain our services</div>
        <div style={listItemStyle}>
          - To process transactions and deliver discounts
        </div>
        <div style={listItemStyle}>
          - To communicate with you about offers and updates
        </div>
        <div style={listItemStyle}>
          - To improve our app and user experience
        </div>
        <div style={listItemStyle}>- To comply with legal obligations</div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Information Sharing</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          We may share your information with:
        </div>
        <div style={listItemStyle}>
          - Partner merchants to provide discounts
        </div>
        <div style={listItemStyle}>
          - Service providers who assist in our operations
        </div>
        <div style={listItemStyle}>
          - Legal authorities when required by law
        </div>
        <div style={listItemStyle}>- Business partners with your consent</div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Data Security</div>
        <div>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet is
          100% secure.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Your Rights</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          You have the right to:
        </div>
        <div style={listItemStyle}>
          - Access and update your personal information
        </div>
        <div style={listItemStyle}>- Request deletion of your data</div>
        <div style={listItemStyle}>- Opt-out of marketing communications</div>
        <div style={listItemStyle}>- Request data portability</div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Contact Us</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          For questions about this Privacy Policy, contact us at:
        </div>
        <div style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
          <strong>Stoofers IT Technologies Private Limited</strong>
          <br />
          155-A, Pocket - E, Dilshad Garden, Delhi - 110095
          <br />
          📧 Email:{' '}
          <span onClick={handleContactClick} style={linkStyle}>
            contact@stoofers.in
          </span>
        </div>
      </div>
    </Container>
  )
}

export default PrivacyPolicy
