import './SynergyMatrix.css'

function SynergyMatrix({ entities, getSynergy }) {
  if (entities.length === 0) {
    return (
      <div className="matrix-empty">
        <p>Add entities to see the synergy matrix</p>
      </div>
    )
  }

  // Calculate max value for color scaling
  const allValues = []
  entities.forEach(e1 => {
    entities.forEach(e2 => {
      const value = getSynergy(e1.id, e2.id)
      if (value) allValues.push(Math.abs(value))
    })
  })
  const maxValue = Math.max(...allValues, 1)

  const getColor = (value) => {
    if (!value || value === 0) return '#f3f4f6'
    const intensity = Math.abs(value) / maxValue
    if (value > 0) {
      // Green scale for positive values
      const lightness = 95 - (intensity * 50)
      return `hsl(142, 71%, ${lightness}%)`
    } else {
      // Red scale for negative values
      const lightness = 95 - (intensity * 50)
      return `hsl(0, 71%, ${lightness}%)`
    }
  }

  return (
    <div className="synergy-matrix">
      <div className="matrix-scroll">
        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-corner"></th>
              {entities.map(entity => (
                <th key={entity.id} className="matrix-header">
                  {entity.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entities.map(entity1 => (
              <tr key={entity1.id}>
                <th className="matrix-row-header">{entity1.name}</th>
                {entities.map(entity2 => {
                  const value = getSynergy(entity1.id, entity2.id)
                  const isDiagonal = entity1.id === entity2.id
                  return (
                    <td
                      key={entity2.id}
                      className={`matrix-cell ${isDiagonal ? 'diagonal' : ''}`}
                      style={{ backgroundColor: getColor(value) }}
                    >
                      <span className="cell-value">
                        {value || 0}
                      </span>
                      {isDiagonal && (
                        <span className="cell-label">1st order</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="matrix-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ background: 'hsl(142, 71%, 45%)' }}></div>
          <span>Higher Positive</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#f3f4f6' }}></div>
          <span>Zero</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: 'hsl(0, 71%, 45%)' }}></div>
          <span>Higher Negative</span>
        </div>
      </div>
    </div>
  )
}

export default SynergyMatrix
