/**
 * Calculate Shapley values for entities given their synergies
 * @param {Array} entities - Array of entity objects with id and name
 * @param {Object} synergies - Object mapping entity IDs (first-order) or pairs to coalition values
 * @returns {Object} - Object mapping entity IDs to their Shapley values
 */
export function calculateShapleyValues(entities, synergies) {
  if (entities.length === 0) return {}

  const n = entities.length
  const shapleyValues = {}

  // Initialize Shapley values
  entities.forEach(entity => {
    shapleyValues[entity.id] = 0
  })

  /**
   * Get the characteristic function value v(S) for a coalition S
   * This represents the total value that coalition S can generate together
   */
  const getCoalitionValue = (coalition) => {
    if (coalition.length === 0) return 0
    
    if (coalition.length === 1) {
      // Single entity - return its individual value
      return synergies[coalition[0]] || 0
    }

    if (coalition.length === 2) {
      // Two entities - return the coalition value if defined, otherwise sum individuals
      const key = [...coalition].sort().join('-')
      return synergies[key] ?? ((synergies[coalition[0]] || 0) + (synergies[coalition[1]] || 0))
    }

    // For larger coalitions, use superadditivity assumption:
    // v(S) >= sum of best pairwise coalitions + remaining individuals
    // This is a heuristic since we only have pairwise data
    
    let totalValue = 0
    const usedEntities = new Set()
    
    // First, find the best pairwise coalitions
    const pairs = []
    for (let i = 0; i < coalition.length; i++) {
      for (let j = i + 1; j < coalition.length; j++) {
        const key = [coalition[i], coalition[j]].sort().join('-')
        if (synergies.hasOwnProperty(key)) {
          const individual1 = synergies[coalition[i]] || 0
          const individual2 = synergies[coalition[j]] || 0
          const synergyBonus = synergies[key] - individual1 - individual2
          pairs.push({
            entities: [coalition[i], coalition[j]],
            value: synergies[key],
            bonus: synergyBonus,
            key: key
          })
        }
      }
    }
    
    // Sort pairs by synergy bonus (highest first)
    pairs.sort((a, b) => b.bonus - a.bonus)
    
    // Greedily select non-overlapping pairs with positive synergy
    for (const pair of pairs) {
      if (pair.bonus > 0 && !usedEntities.has(pair.entities[0]) && !usedEntities.has(pair.entities[1])) {
        totalValue += pair.value
        usedEntities.add(pair.entities[0])
        usedEntities.add(pair.entities[1])
      }
    }
    
    // Add individual values for remaining entities
    coalition.forEach(entityId => {
      if (!usedEntities.has(entityId)) {
        totalValue += synergies[entityId] || 0
      }
    })
    
    return totalValue
  }

  // Generate all subsets (coalitions)
  const getAllSubsets = (arr) => {
    const subsets = [[]]
    for (const element of arr) {
      const length = subsets.length
      for (let i = 0; i < length; i++) {
        subsets.push([...subsets[i], element])
      }
    }
    return subsets
  }

  const entityIds = entities.map(e => e.id)
  
  // For each entity, calculate its Shapley value
  entities.forEach(entity => {
    const entityId = entity.id
    let shapleyValue = 0

    // Get all subsets that don't include this entity
    const otherEntities = entityIds.filter(id => id !== entityId)
    const coalitionsWithoutEntity = getAllSubsets(otherEntities)

    // For each coalition without the entity
    coalitionsWithoutEntity.forEach(coalition => {
      const sSize = coalition.length
      const coalitionWithEntity = [...coalition, entityId]

      // Calculate marginal contribution
      const valueWithout = getCoalitionValue(coalition)
      const valueWith = getCoalitionValue(coalitionWithEntity)
      const marginalContribution = valueWith - valueWithout

      // Calculate weight: |S|! * (n - |S| - 1)! / n!
      const factorial = (num) => {
        if (num <= 1) return 1
        let result = 1
        for (let i = 2; i <= num; i++) {
          result *= i
        }
        return result
      }

      const weight = (factorial(sSize) * factorial(n - sSize - 1)) / factorial(n)
      
      shapleyValue += weight * marginalContribution
    })

    shapleyValues[entityId] = shapleyValue
  })

  return shapleyValues
}

/**
 * Factorial function
 */
function factorial(n) {
  if (n <= 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}
