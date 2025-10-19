import { useState } from 'react'

const GlassCard = ({
  children,
  hoverEffect = 'scale',
  style = {},
  className = '',
  onMouseEnter,
  onMouseLeave,
}) => {
  const [hovered, setHovered] = useState(false)

  const transformStyle =
    hoverEffect === 'scale'
      ? hovered
        ? 'scale(1.05)'
        : 'scale(1)'
      : hovered
      ? 'translateY(-8px)'
      : 'translateY(0)'

  return (
    <div
      onMouseEnter={e => {
        setHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={e => {
        setHovered(false)
        onMouseLeave?.(e)
      }}
      className={className}
      style={{
        borderRadius: '0.6rem',
        border: '1px solid #2a2a2a',
        transform: transformStyle,
        transition: 'transform 0.3s ease',
        padding: '2rem',
        background: '#11111143',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default GlassCard
