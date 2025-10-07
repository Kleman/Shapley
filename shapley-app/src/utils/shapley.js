/**
 * Calculate Shapley values for entities given their synergies
 * @param {Array} entities - Array of entity objects with id and name
 * @param {Object} synergies - Object mapping entity IDs or pairs to their values
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

  // Helper function to get coalition value
  const getCoalitionValue = (coalition) => {
    if (coalition.length === 0) return 0
    if (coalition.length === 1) {
      return synergies[coalition[0]] || 0
    }

    // For two-entity coalition, check for direct synergy value
    if (coalition.length === 2) {
      const key = [...coalition].sort().join('-')
      return synergies[key] || 0
    }

    // For larger coalitions, sum up all pairwise synergies and individual values
    let value = 0
    coalition.forEach(entityId => {
      // Add individual contribution
      value += (synergies[entityId] || 0)
    })

    // Add pairwise synergies (avoiding double counting)
    for (let i = 0; i < coalition.length; i++) {
      for (let j = i + 1; j < coalition.length; j++) {
        const key = [coalition[i], coalition[j]].sort().join('-')
        const pairValue = synergies[key] || 0
        const individual1 = synergies[coalition[i]] || 0
        const individual2 = synergies[coalition[j]] || 0
        // Synergy is the extra value beyond individual contributions
        value += Math.max(0, pairValue - individual1 - individual2)
      }
    }

    return value
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
