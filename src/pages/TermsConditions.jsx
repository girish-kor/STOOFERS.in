import { useNavigate } from 'react-router-dom'
import Container from './Container'

const TermsAndConditions = () => {
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
    <Container title='Terms & Conditions'>
      <div style={effectiveDateStyle}>Effective Date: 29th April, 2025</div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Introduction</div>
        <div>
          Welcome to Stoofers! These terms and conditions ("Terms") govern your
          access to and use of the Stoofers mobile application (the "App") and
          related services. By downloading, accessing, or using the App, you
          agree to comply with these Terms. If you do not agree, you must not
          use the App.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Service and Product Details</div>
        <div>
          Stoofers is a decentralized savings platform for students, offering
          discounts, internships, and resources. Users can access
          physical/virtual cards, manage savings, and access exclusive offers
          through our App.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>User Responsibilities:</div>
        <div style={listItemStyle}>
          - You must be 4 years or older to use the App. Parental consent is NOT
          required for users under 18.
        </div>
        <div style={listItemStyle}>
          - Provide accurate and current info during registration.
        </div>
        <div style={listItemStyle}>
          - You're responsible for legal compliance of your activities.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Payment Terms</div>
        <div style={listItemStyle}>
          - Premium features may involve payments.
        </div>
        <div style={listItemStyle}>
          - Prices are in INR; taxes are shown at checkout.
        </div>
        <div style={listItemStyle}>
          - Secure payments via third-party gateways. Stoofers does NOT store
          sensitive payment data.
        </div>
        <div style={listItemStyle}>
          - Refunds follow our{' '}
          <span onClick={() => navigate('/refund-policy')} style={linkStyle}>
            Refund Policy
          </span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Usage Restrictions</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          By using the App, you agree not to:
        </div>
        <div style={listItemStyle}>
          - Use for unlawful or fraudulent activities.
        </div>
        <div style={listItemStyle}>
          - Reverse-engineer or decompile the code.
        </div>
        <div style={listItemStyle}>
          - Share/post offensive or illegal content.
        </div>
        <div style={listItemStyle}>
          - Use bots/automation to exploit the platform.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Intellectual Property Ownership</div>
        <div style={listItemStyle}>
          - All IP (logos, graphics, content) belong to Stoofers or its
          licensors.
        </div>
        <div style={listItemStyle}>
          - You get a limited, non-transferable license for personal use.
        </div>
        <div style={listItemStyle}>
          - Unauthorized reuse is strictly prohibited.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Limitations of Liability</div>
        <div style={listItemStyle}>
          - The App is provided "as is" and "as available".
        </div>
        <div style={listItemStyle}>
          - We don't guarantee uninterrupted service.
        </div>
        <div style={listItemStyle}>
          - Stoofers isn't liable for direct, indirect, or incidental damages.
        </div>
        <div style={listItemStyle}>
          - In restricted jurisdictions, liability is limited to what the law
          allows.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Dispute Resolution</div>
        <div style={listItemStyle}>
          - First, we try to resolve disputes via friendly negotiation.
        </div>
        <div style={listItemStyle}>
          - If unresolved, disputes go to binding arbitration under Indian law.
        </div>
        <div style={listItemStyle}>- These Terms follow Indian laws.</div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Changes to the Terms</div>
        <div style={listItemStyle}>
          - Stoofers can modify these Terms at any time.
        </div>
        <div style={listItemStyle}>
          - Major changes will be notified via the App or email.
        </div>
        <div style={listItemStyle}>
          - Continued use = acceptance of updated Terms.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>Contact Information</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          Questions or concerns? Hit us up at:
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

      <div
        style={{
          ...headingStyle,
          textAlign: 'center',
          marginTop: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        Thank you for choosing Stoofers! You're awesome ✨
      </div>
    </Container>
  )
}

export default TermsAndConditions
