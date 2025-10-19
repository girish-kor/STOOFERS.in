import { useNavigate } from 'react-router-dom'
import Container from './Container'

const RefundPolicy = () => {
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

  const indentedStyle = {
    ...listItemStyle,
    paddingLeft: '1.5rem',
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
    <Container title='Refund Policy'>
      <div style={effectiveDateStyle}>Effective Date: 29th April, 2025</div>

      <div
        style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', color: '#e0e0e0' }}
      >
        At Stoofers, we are committed to offering valuable savings and services
        to students across India. Please read our Refund Policy carefully to
        understand the conditions under which refunds may or may not be
        provided.
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>1. General Policy</div>
        <div style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
          <strong>
            All purchases made through the Stoofers App—including subscriptions,
            paid offers, and promotional services—are non-refundable.
          </strong>{' '}
          Once a payment is successfully processed, it is considered final.
        </div>

        <div style={subHeadingStyle}>
          We do not offer refunds in the following cases:
        </div>
        <div style={listItemStyle}>• Change of mind after purchase</div>
        <div style={listItemStyle}>• Accidental or duplicate purchases</div>
        <div style={listItemStyle}>• Partial use of subscription or offers</div>
        <div style={listItemStyle}>
          • Discount code not applied during checkout
        </div>
        <div style={listItemStyle}>
          • Unused benefits or time left in a subscription plan
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>2. Exceptions to No Refund Policy</div>
        <div style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
          In rare and specific cases, Stoofers may offer a refund at its sole
          discretion. These include:
        </div>
        <div style={listItemStyle}>
          <strong>• Technical errors:</strong> If you were charged due to a
          verified technical error on our platform
        </div>
        <div style={listItemStyle}>
          <strong>• Unauthorized transaction:</strong> If the transaction was
          proven to be unauthorized or fraudulent and asked to be verified by
          the court of law
        </div>

        <div style={subHeadingStyle}>
          To request an exception-based refund, you must:
        </div>
        <div style={listItemStyle}>
          • Email us at{' '}
          <span onClick={handleContactClick} style={linkStyle}>
            contact@stoofers.in
          </span>{' '}
          within 7 days of the transaction
        </div>
        <div style={listItemStyle}>
          • Provide order ID, registered mobile/email, and a clear description
          of the issue
        </div>

        <div
          style={{
            marginTop: 'clamp(0.75rem, 1.5vw, 1rem)',
            fontStyle: 'italic',
            color: '#b0b0b0',
          }}
        >
          Each request will be reviewed on a case-by-case basis. Stoofers
          reserves the right to approve or deny any refund request based on
          internal verification.
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>3. Processing of Refunds</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          If a refund is approved:
        </div>
        <div style={listItemStyle}>
          • It will be processed to the original payment method within 7–14
          working days
        </div>
        <div style={listItemStyle}>
          • You will receive a confirmation email/SMS once the refund is
          initiated
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={headingStyle}>4. Contact Us</div>
        <div style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          For any questions or to raise a refund request, reach out to:
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

export default RefundPolicy
