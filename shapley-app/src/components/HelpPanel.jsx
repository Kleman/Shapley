import { useState } from 'react'
import { HelpCircle, X } from 'lucide-react'
import './HelpPanel.css'

function HelpPanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        className="help-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HelpCircle size={20} />
        Help
      </button>

      {isOpen && (
        <div className="help-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="help-modal" onClick={(e) => e.stopPropagation()}>
            <div className="help-header">
              <h2>How to Use Shapley Value Calculator</h2>
              <button 
                className="close-button"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="help-content">
              <section>
                <h3>📊 What are Shapley Values?</h3>
                <p>
                  Shapley values are a solution concept from cooperative game theory that fairly 
                  distributes the total value created by a coalition among its members based on 
                  their individual contributions and synergies.
                </p>
              </section>

              <section>
                <h3>🎯 Getting Started</h3>
                <ol>
                  <li><strong>Add Entities:</strong> Enter the names of participants in your scenario (e.g., departments, team members, resources)</li>
                  <li><strong>Set First-Order Values:</strong> For each entity, enter its standalone value (what it contributes alone)</li>
                  <li><strong>Define Synergies:</strong> Add coalition values for pairs of entities working together</li>
                  <li><strong>Analyze Results:</strong> View the Shapley values to see fair contribution allocations</li>
                </ol>
              </section>

              <section>
                <h3>🔧 Features</h3>
                <ul>
                  <li><strong>Visual Graph:</strong> See relationships between entities with edge widths proportional to synergy values</li>
                  <li><strong>Heatmap Matrix:</strong> Visualize all synergies at a glance with color-coded values</li>
                  <li><strong>Shapley Table:</strong> View calculated fair value distributions</li>
                  <li><strong>Save/Load:</strong> Export and import scenarios for later use</li>
                  <li><strong>Examples:</strong> Load pre-built scenarios to understand the tool</li>
                </ul>
              </section>

              <section>
                <h3>💡 Tips</h3>
                <ul>
                  <li>Start with simple examples to understand how synergies affect Shapley values</li>
                  <li>The diagonal in the matrix represents first-order (standalone) values</li>
                  <li>Positive synergies indicate entities work well together</li>
                  <li>The sum of all Shapley values equals the total coalition value</li>
                </ul>
              </section>

              <section>
                <h3>📐 Mathematical Background</h3>
                <p>
                  The Shapley value is calculated by averaging an entity's marginal contribution 
                  across all possible orderings of the coalition. For each entity i:
                </p>
                <p className="formula">
                  φᵢ = Σ [|S|! × (n - |S| - 1)! / n!] × [v(S ∪ {'{i}'}) - v(S)]
                </p>
                <p>
                  Where S ranges over all coalitions not containing i, n is the total number of 
                  entities, and v(S) is the value of coalition S.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HelpPanel
