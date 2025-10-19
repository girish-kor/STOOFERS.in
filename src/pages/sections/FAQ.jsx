import { useEffect, useState } from 'react'
import CardGrid from './CardGrid'
import GlassCard from './GlassCard'

const faqs = [
  {
    question: 'Why should I choose Stoofers?',
    answer:
      'We offer crazy student deals for all our users, and our app is like a college buddy to you!!',
  },
  {
    question:
      'Can I trust Stoofers for exclusive discounts and offers for students?',
    answer:
      'Absolutely! We specialise in providing exclusive discounts tailored to students and all users. By using our platform, you’ll have access to additional savings on a wide range of products and services.',
  },
  {
    question:
      'How can I trust Stoofers for providing genuine deals and discounts?',
    answer:
      'We take pride in curating deals from trusted retailers and service providers. Our team verifies the authenticity of each deal to ensure that you receive genuine discounts and offers.',
  },
  {
    question:
      'Are the hyperlocal shop deals on Stoofers trustworthy and safe to use?',
    answer:
      'Yes, the hyperlocal shop deals featured on our platform are carefully selected, and we collaborate with reputable local businesses. You can trust that these deals are legitimate and offer great value.',
  },
  {
    question: 'Can I change my subscription type?',
    answer: 'Yes, the subscription type can be changed in the app.',
  },
  {
    question: 'When can I apply my coupon code?',
    answer:
      'While choosing subscription plan after downloading the app, the coupon code can be applied.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'No, the subscription cannot be cancelled once paid.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const headingFontSize = isMobile ? '1.5rem' : '2rem'
  const subTextFontSize = isMobile ? '1rem' : '1.125rem'
  const questionFontSize = isMobile ? '1rem' : '1.05rem'
  const answerFontSize = isMobile ? '0.9rem' : '1rem'

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div
      style={{
        padding: '4rem 2rem',
        color: '#f2f2f2',
        borderBottom: '1px solid #2a2a2a',
        background: '#000000',
        boxSizing: 'border-box',
      }}
    >
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1 style={{ fontSize: headingFontSize, margin: 0 }}>
          Frequently Asked Questions
        </h1>
        <p
          style={{
            fontSize: subTextFontSize,
            color: '#cccccc',
            margin: '1rem auto 0',
          }}
        >
          Find answers to common questions about Stoofers and how it works.
        </p>
      </header>

      <CardGrid>
        {faqs.map((faq, index) => (
          <GlassCard
            key={index}
            hoverEffect='scale'
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              overflow: 'hidden',
              transform: hovered === index ? 'scale(1.03)' : 'scale(1)',
              boxShadow:
                hovered === index
                  ? '0 8px 16px rgba(0, 0, 0, 0.3)'
                  : '0 2px 6px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backgroundColor: '#0a0a0a70',
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                textAlign: 'left',
                border: 'none',
                background: 'none',
                color: '#f2f2f2',
                fontSize: questionFontSize,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                padding: 0,
              }}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span>{faq.question}</span>
            </button>

            <div
              id={`faq-${index}`}
              style={{
                maxHeight: openIndex === index ? '500px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <div
                style={{
                  marginTop: '1rem',
                  borderTop: '1px solid #333',
                  paddingTop: '1rem',
                  opacity: openIndex === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <p
                  style={{
                    fontSize: answerFontSize,
                    lineHeight: 1.6,
                    color: '#cccccc',
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </CardGrid>
    </div>
  )
}

export default FAQ
