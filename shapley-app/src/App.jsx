import { useState, useCallback } from 'react'
import './App.css'
import ScenarioTitle from './components/ScenarioTitle'
import EntityList from './components/EntityList'
import FlowGraph from './components/FlowGraph'
import SynergyMatrix from './components/SynergyMatrix'
import ShapleyTable from './components/ShapleyTable'
import SaveLoadControls from './components/SaveLoadControls'
import ExampleLoader from './components/ExampleLoader'
import HelpPanel from './components/HelpPanel'
import { calculateShapleyValues } from './utils/shapley'

function App() {
  const [title, setTitle] = useState('New Shapley Scenario')
  const [entities, setEntities] = useState([])
  const [synergies, setSynergies] = useState({})

  const addEntity = useCallback((name) => {
    if (!name.trim()) return
    const newEntity = {
      id: Date.now().toString(),
      name: name.trim()
    }
    setEntities(prev => [...prev, newEntity])
  }, [])

  const removeEntity = useCallback((id) => {
    setEntities(prev => prev.filter(e => e.id !== id))
    // Remove synergies involving this entity
    setSynergies(prev => {
      const newSynergies = { ...prev }
      Object.keys(newSynergies).forEach(key => {
        if (key.includes(id)) {
          delete newSynergies[key]
        }
      })
      return newSynergies
    })
  }, [])

  const updateSynergy = useCallback((entity1Id, entity2Id, value) => {
    const key = [entity1Id, entity2Id].sort().join('-')
    setSynergies(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }))
  }, [])

  const getSynergy = useCallback((entity1Id, entity2Id) => {
    if (entity1Id === entity2Id) {
      // Diagonal - first order value
      return synergies[entity1Id] || 0
    }
    const key = [entity1Id, entity2Id].sort().join('-')
    return synergies[key] || 0
  }, [synergies])

  const shapleyValues = calculateShapleyValues(entities, synergies)

  const saveScenario = useCallback(() => {
    const scenario = {
      title,
      entities,
      synergies,
      version: '1.0'
    }
    const blob = new Blob([JSON.stringify(scenario, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title.replace(/\s+/g, '_')}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [title, entities, synergies])

  const loadScenario = useCallback((scenario) => {
    setTitle(scenario.title || 'Imported Scenario')
    setEntities(scenario.entities || [])
    setSynergies(scenario.synergies || {})
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <ScenarioTitle title={title} setTitle={setTitle} />
        <div className="header-controls">
          <SaveLoadControls 
            onSave={saveScenario}
            onLoad={loadScenario}
          />
          <ExampleLoader onLoad={loadScenario} />
        </div>
      </header>
      
      <HelpPanel />

      <div className="app-content">
        <div className="left-panel">
          <EntityList 
            entities={entities}
            onAddEntity={addEntity}
            onRemoveEntity={removeEntity}
            synergies={synergies}
            onUpdateSynergy={updateSynergy}
            getSynergy={getSynergy}
          />
        </div>

        <div className="right-panel">
          <section className="graph-section">
            <h2>Visual Graph</h2>
            <FlowGraph 
              entities={entities}
              synergies={synergies}
              getSynergy={getSynergy}
            />
          </section>

          <section className="matrix-section">
            <h2>Synergy Heatmap</h2>
            <SynergyMatrix 
              entities={entities}
              getSynergy={getSynergy}
            />
          </section>

          <section className="shapley-section">
            <h2>Shapley Values</h2>
            <ShapleyTable 
              entities={entities}
              shapleyValues={shapleyValues}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
