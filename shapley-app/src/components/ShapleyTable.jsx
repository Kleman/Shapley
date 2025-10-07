import './ShapleyTable.css'

function ShapleyTable({ entities, shapleyValues }) {
  if (entities.length === 0) {
    return (
      <div className="table-empty">
        <p>Add entities to see Shapley values</p>
      </div>
    )
  }

  const totalValue = Object.values(shapleyValues).reduce((sum, val) => sum + val, 0)

  return (
    <div className="shapley-table-container">
      <table className="shapley-table">
        <thead>
          <tr>
            <th>Entity</th>
            <th>Shapley Value</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {entities.map(entity => {
            const value = shapleyValues[entity.id] || 0
            const percentage = totalValue > 0 ? (value / totalValue * 100) : 0
            return (
              <tr key={entity.id}>
                <td className="entity-name-cell">{entity.name}</td>
                <td className="value-cell">{value.toFixed(4)}</td>
                <td className="percentage-cell">
                  <div className="percentage-bar-container">
                    <div 
                      className="percentage-bar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                    <span className="percentage-text">{percentage.toFixed(2)}%</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr className="total-row">
            <td className="entity-name-cell"><strong>Total (Complete Coalition)</strong></td>
            <td className="value-cell"><strong>{totalValue.toFixed(4)}</strong></td>
            <td className="percentage-cell"><strong>100.00%</strong></td>
          </tr>
        </tfoot>
      </table>
      
      <div className="shapley-info">
        <p>
          <strong>About Shapley Values:</strong> The Shapley value represents each entity's 
          average marginal contribution across all possible coalitions. It fairly distributes 
          the total value among all participants based on their individual and synergistic contributions.
        </p>
      </div>
    </div>
  )
}

export default ShapleyTable
