import { useState } from 'react'
import { Plus, Trash2, Link } from 'lucide-react'
import './EntityList.css'

function EntityList({ entities, onAddEntity, onRemoveEntity, synergies, onUpdateSynergy, getSynergy }) {
  const [newEntityName, setNewEntityName] = useState('')
  const [selectedEntity1, setSelectedEntity1] = useState(null)
  const [selectedEntity2, setSelectedEntity2] = useState(null)
  const [synergyValue, setSynergyValue] = useState('')

  const handleAddEntity = () => {
    if (newEntityName.trim()) {
      onAddEntity(newEntityName)
      setNewEntityName('')
    }
  }

  const handleAddSynergy = () => {
    if (selectedEntity1 && selectedEntity2 && synergyValue !== '') {
      onUpdateSynergy(selectedEntity1, selectedEntity2, synergyValue)
      setSynergyValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddEntity()
    }
  }

  return (
    <div className="entity-list">
      <h2>Entities & Synergies</h2>
      
      {/* Add Entity Section */}
      <div className="add-entity-section">
        <h3>Add Entity</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Entity name"
            value={newEntityName}
            onChange={(e) => setNewEntityName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleAddEntity}>
            <Plus size={20} />
            Add
          </button>
        </div>
      </div>

      {/* Entity List */}
      <div className="entities-section">
        <h3>Entities ({entities.length})</h3>
        {entities.length === 0 ? (
          <p className="empty-message">No entities yet. Add one above!</p>
        ) : (
          <ul className="entity-items">
            {entities.map(entity => (
              <li key={entity.id} className="entity-item">
                <span className="entity-name">{entity.name}</span>
                <div className="entity-controls">
                  <input
                    type="number"
                    placeholder="First-order value"
                    value={getSynergy(entity.id, entity.id) || ''}
                    onChange={(e) => onUpdateSynergy(entity.id, entity.id, e.target.value)}
                    className="small-input"
                  />
                  <button 
                    onClick={() => onRemoveEntity(entity.id)}
                    className="danger small-btn"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Synergy Section */}
      {entities.length >= 2 && (
        <div className="add-synergy-section">
          <h3>Add Synergy (Coalition)</h3>
          <div className="synergy-inputs">
            <select
              value={selectedEntity1 || ''}
              onChange={(e) => setSelectedEntity1(e.target.value)}
            >
              <option value="">Select entity 1</option>
              {entities.map(entity => (
                <option key={entity.id} value={entity.id}>
                  {entity.name}
                </option>
              ))}
            </select>
            
            <Link size={20} className="link-icon" />
            
            <select
              value={selectedEntity2 || ''}
              onChange={(e) => setSelectedEntity2(e.target.value)}
            >
              <option value="">Select entity 2</option>
              {entities.map(entity => (
                <option key={entity.id} value={entity.id}>
                  {entity.name}
                </option>
              ))}
            </select>
            
            <input
              type="number"
              placeholder="Coalition value"
              value={synergyValue}
              onChange={(e) => setSynergyValue(e.target.value)}
              className="synergy-value-input"
            />
            
            <button onClick={handleAddSynergy}>
              Add
            </button>
          </div>
        </div>
      )}

      {/* Existing Synergies */}
      {Object.keys(synergies).filter(key => !key.includes('-') || key.split('-').length === 2).length > 0 && (
        <div className="synergies-list">
          <h3>Defined Values</h3>
          <ul className="synergy-items">
            {entities.map(entity => {
              const value = getSynergy(entity.id, entity.id)
              if (!value) return null
              return (
                <li key={entity.id} className="synergy-item">
                  <span className="synergy-label">{entity.name} (first-order)</span>
                  <span className="synergy-value">{value}</span>
                </li>
              )
            })}
            {Object.keys(synergies)
              .filter(key => key.includes('-'))
              .map(key => {
                const [id1, id2] = key.split('-')
                const entity1 = entities.find(e => e.id === id1)
                const entity2 = entities.find(e => e.id === id2)
                if (!entity1 || !entity2) return null
                return (
                  <li key={key} className="synergy-item">
                    <span className="synergy-label">
                      {entity1.name} ↔ {entity2.name}
                    </span>
                    <span className="synergy-value">{synergies[key]}</span>
                  </li>
                )
              })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EntityList
