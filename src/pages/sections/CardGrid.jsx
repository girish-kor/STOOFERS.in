const CardGrid = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}
    >
      {children}
    </div>
  )
}

export default CardGrid
