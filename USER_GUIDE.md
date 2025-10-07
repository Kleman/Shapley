# User Guide: Shapley Value Calculator

## Introduction

The Shapley Value Calculator is a web-based tool that helps you compute fair value distributions in cooperative scenarios. Whether you're analyzing business partnerships, research collaborations, or resource allocations, this tool makes Shapley value calculations accessible without any coding required.

## What Are Shapley Values?

Shapley values come from game theory and provide a method to fairly distribute the total value created by a group among its members. The distribution considers:

- **Individual Contributions**: What each entity brings on its own
- **Synergies**: The extra value created when entities work together
- **All Possible Coalitions**: Every way the group could form

The Shapley value represents each entity's average marginal contribution across all possible ways the coalition could form.

## Getting Started

### 1. Adding Entities

Entities represent the participants in your scenario (e.g., team members, departments, resources, partners).

**To add an entity:**
1. Find the "Add Entity" section in the left panel
2. Type the entity name in the input field
3. Click the "Add" button or press Enter

**Example entities:**
- Business: Marketing, Sales, Product Development
- Research: Data Scientist, Domain Expert, Engineer
- Resources: Capital, Labor, Technology

### 2. Setting First-Order Values

First-order values represent what each entity contributes independently, without any collaboration.

**To set a first-order value:**
1. Find your entity in the entity list
2. Enter a number in the "First-order value" field next to the entity
3. The value updates automatically

**Example:**
- Marketing alone: 30
- Sales alone: 40
- Product alone: 50

### 3. Defining Synergies (Coalition Values)

Synergies represent the total value when two entities work together. This is NOT the additional value, but the complete coalition value.

**To add a synergy:**
1. Scroll to the "Add Synergy (Coalition)" section
2. Select the first entity from the dropdown
3. Select the second entity
4. Enter the coalition value
5. Click "Add"

**Example:**
- Marketing + Sales together: 85 (not 70 = 30+40)
- This means there's a positive synergy of 15

### 4. Understanding the Visualizations

#### Visual Graph
- Shows entities as nodes and relationships as edges
- Node labels display entity names and first-order values
- Edge thickness represents synergy strength
- Green edges: positive synergies
- Red edges: negative synergies (if any)
- Drag nodes to rearrange the layout

#### Synergy Heatmap
- Matrix showing all entity relationships
- Diagonal (highlighted): first-order values
- Off-diagonal: coalition values
- Color intensity: value magnitude
- Green shades: higher positive values
- Red shades: higher negative values (if any)
- Hover over cells for better visibility

#### Shapley Values Table
- Shows the calculated fair value for each entity
- "Shapley Value" column: absolute contribution
- "Percentage" column: relative contribution
- Progress bar visualizes the percentage
- Total row confirms the complete coalition value

## Example Scenarios

### Business Partnership Example

**Scenario:** Three departments collaborate on a project

**Entities and First-Order Values:**
- Marketing: 30 (can generate leads)
- Sales: 40 (can close deals)
- Product: 50 (can build features)

**Coalition Values:**
- Marketing + Sales: 85 (leads + closing = more revenue)
- Marketing + Product: 95 (leads + features = better offering)
- Sales + Product: 110 (closing + features = higher value)

**Result:** Shapley values show fair credit distribution based on individual and synergistic contributions.

### Research Team Example

**Scenario:** Four researchers work on a project

**Entities:**
- Data Scientist: 25
- Domain Expert: 20
- Engineer: 30
- Designer: 15

**Synergies:** Define how pairs work together (e.g., Data Scientist + Domain Expert = 60)

**Result:** Fair authorship credit or resource allocation based on contributions.

## Tips for Best Results

1. **Start Simple**: Begin with 2-3 entities to understand the tool
2. **Use Consistent Units**: Keep all values in the same scale (e.g., dollars, points, hours)
3. **Consider Synergies Carefully**: Coalition values should reflect realistic combined outputs
4. **Test with Examples**: Load pre-built examples to see how it works
5. **Save Your Work**: Export scenarios before closing the browser
6. **Positive vs Negative Synergies**: 
   - Positive: Coalition value > sum of individual values
   - Negative: Coalition value < sum of individual values (less common but possible)

## Saving and Loading Scenarios

### Saving
1. Click the "Save Scenario" button in the header
2. Choose a location on your computer
3. The file is saved as JSON format

### Loading
1. Click the "Load Scenario" button
2. Select a previously saved JSON file
3. Your scenario is restored

### Loading Examples
1. Click "Load Example" dropdown
2. Select from pre-built scenarios
3. Explore and modify as needed

## Understanding the Math

The Shapley value formula:

φᵢ = Σ [|S|! × (n - |S| - 1)! / n!] × [v(S ∪ {i}) - v(S)]

Where:
- φᵢ = Shapley value for entity i
- S = a coalition not containing i
- n = total number of entities
- v(S) = value of coalition S
- |S| = size of coalition S

**In plain English:**
For each entity, consider all possible groups it could join. For each group, calculate how much value the entity adds by joining. Weight each scenario by its probability, then sum everything up.

## Common Use Cases

1. **Business Value Attribution**
   - Allocate project success to departments
   - Distribute bonuses fairly
   - Evaluate partnership contributions

2. **Research Collaboration**
   - Determine authorship order
   - Allocate grant funding
   - Credit team contributions

3. **Resource Allocation**
   - Distribute shared resources
   - Budget allocation across units
   - Cost/benefit analysis

4. **Game Theory Analysis**
   - Voting power analysis
   - Coalition formation studies
   - Fair division problems

## Limitations

- Currently supports pairwise synergies only (2-entity coalitions)
- Large numbers of entities (>10) may slow calculations
- Assumes transferable utility (values can be freely distributed)
- Does not account for dynamic changes over time

## Troubleshooting

**Problem:** Graph not showing connections
- **Solution:** Make sure you've defined coalition values (not just first-order values)

**Problem:** Shapley values seem incorrect
- **Solution:** Verify your coalition values are total values, not additional synergies

**Problem:** Can't see all matrix cells
- **Solution:** The matrix scrolls horizontally and vertically for many entities

**Problem:** Percentages don't add to 100%
- **Solution:** Check the total row - percentages of individual contributions should sum to 100%

## Getting Help

- Click the "Help" button (bottom right) for in-app assistance
- Review example scenarios for reference
- Check that your coalition values make logical sense

## Best Practices

1. **Document your assumptions**: Keep notes on what values represent
2. **Use realistic values**: Base estimates on data when possible
3. **Compare scenarios**: Save and load different assumptions to compare
4. **Validate results**: Ensure Shapley values align with intuition
5. **Share your scenarios**: Export and share with team members

## Advanced Tips

1. **Negative Synergies**: If entities interfere with each other, coalition values can be less than individual sums
2. **Zero Values**: Valid for entities that contribute only through collaboration
3. **Scaling**: All values can be multiplied by a constant without changing relative Shapley values
4. **Symmetric Entities**: Identical entities will have identical Shapley values

---

**Need more help?** Contact the developer or open an issue on GitHub.
