import { useEffect, useMemo } from 'react'
import ReactFlow, { 
  Background, 
  Controls, 
  MarkerType,
  useNodesState,
  useEdgesState 
} from 'reactflow'
import 'reactflow/dist/style.css'
import './FlowGraph.css'

function FlowGraph({ entities, synergies, getSynergy }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    // Create nodes from entities
    const newNodes = entities.map((entity, index) => {
      const angle = (2 * Math.PI * index) / entities.length
      const radius = Math.max(150, entities.length * 30)
      const x = 300 + radius * Math.cos(angle)
      const y = 300 + radius * Math.sin(angle)

      return {
        id: entity.id,
        type: 'default',
        data: { 
          label: (
            <div>
              <strong>{entity.name}</strong>
              <br />
              <small>{getSynergy(entity.id, entity.id) || 0}</small>
            </div>
          )
        },
        position: { x, y },
        style: {
          background: '#667eea',
          color: 'white',
          border: '2px solid #5568d3',
          borderRadius: '8px',
          padding: '12px',
          fontSize: '14px',
          fontWeight: '600',
          minWidth: '100px',
          textAlign: 'center'
        }
      }
    })

    setNodes(newNodes)

    // Create edges from synergies
    const newEdges = []
    Object.keys(synergies).forEach(key => {
      if (key.includes('-')) {
        const [id1, id2] = key.split('-')
        const value = synergies[key]
        
        if (value && value !== 0) {
          // Calculate edge width based on value
          const maxWidth = 10
          const minWidth = 1
          const allValues = Object.values(synergies).filter(v => typeof v === 'number' && v > 0)
          const maxValue = Math.max(...allValues, 1)
          const width = minWidth + (maxWidth - minWidth) * (Math.abs(value) / maxValue)

          newEdges.push({
            id: key,
            source: id1,
            target: id2,
            label: value.toString(),
            animated: true,
            style: { 
              strokeWidth: width,
              stroke: value > 0 ? '#10b981' : '#ef4444'
            },
            labelStyle: {
              fill: '#1f2937',
              fontWeight: 700,
              fontSize: 14
            },
            labelBgStyle: {
              fill: 'white',
              fillOpacity: 0.9
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: value > 0 ? '#10b981' : '#ef4444'
            }
          })
        }
      }
    })

    setEdges(newEdges)
  }, [entities, synergies, getSynergy, setNodes, setEdges])

  if (entities.length === 0) {
    return (
      <div className="flow-empty">
        <p>Add entities to see the graph visualization</p>
      </div>
    )
  }

  return (
    <div className="flow-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default FlowGraph
