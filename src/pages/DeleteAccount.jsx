import Container from './Container'

const DeleteAccount = () => {
  const sectionStyle = {
    marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
  }

  const contactBoxStyle = {
    padding: 'clamp(1.25rem, 3vw, 1.8rem)',
    border: '1px solid #3a3a3a',
    backgroundColor: '#1a1a1a',
    borderRadius: '0.4rem',
    marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
  }

  const headingStyle = {
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    color: '#f2f2f2',
    fontWeight: '500',
  }

  const linkStyle = {
    color: '#4FC3F7',
    textDecoration: 'underline',
    wordBreak: 'break-all',
  }

  return (
    <Container title='Account Deletion'>
      <div style={sectionStyle}>
        <p
          style={{
            lineHeight: 1.7,
            fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
            color: '#dddddd',
            textAlign: 'justify',
            wordBreak: 'break-word',
            hyphens: 'auto',
          }}
        >
          To delete your Stoofers account and all associated data, please
          contact our support team. We're here to help you through the process.
        </p>
      </div>

      <div style={contactBoxStyle}>
        <h3 style={headingStyle}>Contact Information:</h3>
        <p
          style={{
            margin: 'clamp(0.25rem, 1vw, 0.5rem) 0',
            color: '#cccccc',
            fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
            wordBreak: 'break-word',
          }}
        >
          Email:{' '}
          <a
            href='mailto:support@stoofers.in'
            subject='Account Deletion Request'
            body='Hi Stoofers team,'
            style={linkStyle}
          >
            support@stoofers.in
          </a>
        </p>
      </div>

      <p
        style={{
          color: '#bbbbbb',
          fontStyle: 'italic',
          fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
          lineHeight: 1.5,
          textAlign: 'justify',
          wordBreak: 'break-word',
          hyphens: 'auto',
        }}
      >
        Account deletion is permanent and cannot be undone. Please ensure you've
        backed up any important data before proceeding.
      </p>
    </Container>
  )
}

export default DeleteAccount
