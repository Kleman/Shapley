import { Save, Upload } from 'lucide-react'
import './SaveLoadControls.css'

function SaveLoadControls({ onSave, onLoad }) {
  const handleFileLoad = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const scenario = JSON.parse(e.target.result)
          onLoad(scenario)
        } catch (error) {
          alert('Error loading scenario: Invalid file format')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="save-load-controls">
      <button onClick={onSave}>
        <Save size={18} />
        Save Scenario
      </button>
      <label className="load-button">
        <Upload size={18} />
        Load Scenario
        <input
          type="file"
          accept=".json"
          onChange={handleFileLoad}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  )
}

export default SaveLoadControls
