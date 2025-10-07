# Shapley Value Calculator

A no-code web application for computing Shapley values in cooperative game theory. This tool helps you analyze fair value distribution among entities based on their individual contributions and synergies.

## 🌟 Features

- **Entity Management**: Add and remove entities with their standalone values
- **Synergy Definition**: Define coalition values between pairs of entities
- **Visual Graph**: Interactive network visualization with edges proportional to synergy values
- **Heatmap Matrix**: Color-coded matrix showing all synergies at a glance
- **Shapley Value Calculation**: Automatic computation of fair value distributions
- **Save/Load**: Export and import scenarios as JSON files
- **Example Scenarios**: Pre-loaded examples to get started quickly
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Usage

1. **Add Entities**: Enter names of participants in your scenario
2. **Set First-Order Values**: Define what each entity contributes alone
3. **Define Synergies**: Add coalition values for pairs of entities
4. **Analyze**: View Shapley values, graphs, and heatmaps

## 📊 What are Shapley Values?

Shapley values are a solution concept from cooperative game theory that fairly distributes the total value created by a coalition among its members based on:

- Individual contributions (first-order values)
- Synergistic effects (coalition values)
- All possible orderings of coalition formation

## 🚢 Deploying to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

Make sure to update the `base` path in `vite.config.js` with your repository name.

## 🧰 Technology Stack

- **React** - UI framework
- **Vite** - Build tool
- **ReactFlow** - Graph visualization
- **Lucide React** - Icons
