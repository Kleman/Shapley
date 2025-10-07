import { useState } from 'react'
import { Edit2, Check } from 'lucide-react'
import './ScenarioTitle.css'

function ScenarioTitle({ title, setTitle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [tempTitle, setTempTitle] = useState(title)

  const handleSave = () => {
    if (tempTitle.trim()) {
      setTitle(tempTitle.trim())
      setIsEditing(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setTempTitle(title)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <div className="scenario-title editing">
        <input
          type="text"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onKeyDown={handleKeyPress}
          onBlur={handleSave}
          autoFocus
          className="title-input"
        />
        <button onClick={handleSave} className="icon-btn">
          <Check size={20} />
        </button>
      </div>
    )
  }

  return (
    <div className="scenario-title">
      <h1>{title}</h1>
      <button onClick={() => setIsEditing(true)} className="icon-btn">
        <Edit2 size={20} />
      </button>
    </div>
  )
}

export default ScenarioTitle
