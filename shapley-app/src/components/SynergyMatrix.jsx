import { useState } from 'react'
import './SynergyMatrix.css'

function MatrixCell({ entity1Id, entity2Id, value, isDiagonal, backgroundColor, onUpdateSynergy }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState('')

  const handleClick = () => {
    if (!onUpdateSynergy) return
    setEditValue(value || '')
    setIsEditing(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newValue = parseFloat(editValue) || 0
    onUpdateSynergy(entity1Id, entity2Id, newValue)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleBlur = (e) => {
    // Only close if we're not clicking on the form itself
    setTimeout(() => {
      if (!e.currentTarget.contains(document.activeElement)) {
        setIsEditing(false)
      }
    }, 100)
  }

  if (isEditing) {
    return (
      <td
        className={`matrix-cell ${isDiagonal ? 'diagonal' : ''} editing`}
        style={{ backgroundColor }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step="any"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            autoFocus
            className="cell-input"
          />
        </form>
        {isDiagonal && (
          <span className="cell-label">individual</span>
        )}
      </td>
    )
  }

  return (
    <td
      className={`matrix-cell ${isDiagonal ? 'diagonal' : ''} ${onUpdateSynergy ? 'editable' : ''}`}
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      <span className="cell-value">
        {value || 0}
      </span>
      {isDiagonal && (
        <span className="cell-label">individual</span>
      )}
    </td>
  )
}

function SynergyMatrix({ entities, getSynergy, onUpdateSynergy }) {
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
                    <MatrixCell
                      key={entity2.id}
                      entity1Id={entity1.id}
                      entity2Id={entity2.id}
                      value={value}
                      isDiagonal={isDiagonal}
                      backgroundColor={getColor(value)}
                      onUpdateSynergy={onUpdateSynergy}
                    />
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
