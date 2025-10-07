import { BookOpen } from 'lucide-react'
import './ExampleLoader.css'

const EXAMPLES = [
  {
    id: 'business',
    title: 'Business Partnership',
    scenario: {
      title: 'Business Partnership Example',
      entities: [
        { id: '1', name: 'Marketing' },
        { id: '2', name: 'Sales' },
        { id: '3', name: 'Product' }
      ],
      synergies: {
        '1': 30,  // Marketing alone
        '2': 40,  // Sales alone
        '3': 50,  // Product alone
        '1-2': 85,  // Marketing + Sales
        '1-3': 95,  // Marketing + Product
        '2-3': 110, // Sales + Product
      }
    }
  },
  {
    id: 'research',
    title: 'Research Collaboration',
    scenario: {
      title: 'Research Team Collaboration',
      entities: [
        { id: '1', name: 'Data Scientist' },
        { id: '2', name: 'Domain Expert' },
        { id: '3', name: 'Engineer' },
        { id: '4', name: 'Designer' }
      ],
      synergies: {
        '1': 25,
        '2': 20,
        '3': 30,
        '4': 15,
        '1-2': 60,
        '1-3': 70,
        '1-4': 50,
        '2-3': 65,
        '2-4': 45,
        '3-4': 55,
      }
    }
  },
  {
    id: 'simple',
    title: 'Simple Example',
    scenario: {
      title: 'Simple Three-Player Game',
      entities: [
        { id: '1', name: 'Player A' },
        { id: '2', name: 'Player B' },
        { id: '3', name: 'Player C' }
      ],
      synergies: {
        '1': 10,
        '2': 15,
        '3': 20,
        '1-2': 30,
        '1-3': 35,
        '2-3': 40,
      }
    }
  }
]

function ExampleLoader({ onLoad }) {
  return (
    <div className="example-loader">
      <div className="dropdown">
        <button className="dropdown-button secondary">
          <BookOpen size={18} />
          Load Example
        </button>
        <div className="dropdown-content">
          {EXAMPLES.map(example => (
            <button
              key={example.id}
              onClick={() => onLoad(example.scenario)}
              className="dropdown-item"
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExampleLoader
