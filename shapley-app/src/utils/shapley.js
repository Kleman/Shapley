/**
 * Calculate Shapley values for entities given their synergies
 * Assumption: Coalitions with more than two elements add no additional synergies.
 * Formula: Shapley(i) = v(i) + (1/2) * sum of all pairwise synergies involving i
 * 
 * @param {Array} entities - Array of entity objects with id and name
 * @param {Object} synergies - Object mapping entity IDs (first-order) or pairs to coalition values
 * @returns {Object} - Object mapping entity IDs to their Shapley values
 */
export function calculateShapleyValues(entities, synergies) {
  if (entities.length === 0) return {}

  const shapleyValues = {}

  // For each entity, calculate its Shapley value
  entities.forEach(entity => {
    const entityId = entity.id
    
    // Start with the entity's individual value
    let shapleyValue = synergies[entityId] || 0
    
    // Add half of each pairwise synergy involving this entity
    entities.forEach(otherEntity => {
      if (otherEntity.id !== entityId) {
        const pairKey = [entityId, otherEntity.id].sort().join('-')
        
        if (synergies.hasOwnProperty(pairKey)) {
          // Get the pairwise synergy (the bonus beyond individual values)
          const individual1 = synergies[entityId] || 0
          const individual2 = synergies[otherEntity.id] || 0
          const pairwiseValue = synergies[pairKey]
          const synergyBonus = pairwiseValue - individual1 - individual2
          
          // Add half of the synergy bonus to this entity's Shapley value
          shapleyValue += synergyBonus / 2
        }
      }
    })
    
    shapleyValues[entityId] = shapleyValue
  })

  return shapleyValues
}
