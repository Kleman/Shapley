# Shapley Value Calculator 🎯

A beautiful, no-code web application for computing Shapley values in cooperative game theory. Calculate fair value distributions among entities based on their individual contributions and synergies.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5-646cff.svg)

## ✨ Features

🎨 **Beautiful Modern UI** - Gradient design with smooth animations
📊 **Interactive Visualizations** - Dynamic graph, heatmap matrix, and results table  
⚡ **Real-time Updates** - See changes instantly across all views
💾 **Save & Load** - Export and import scenarios as JSON
📚 **Built-in Examples** - Pre-loaded scenarios to get started
📱 **Responsive Design** - Works on desktop, tablet, and mobile
🎓 **Comprehensive Help** - In-app documentation and user guide
🚀 **GitHub Pages Ready** - Configured for easy deployment

## 🎯 What are Shapley Values?

Shapley values provide a fair way to distribute the total value created by a coalition among its members. The method considers:

- Individual contributions (what each entity brings alone)
- Synergistic effects (extra value from collaboration)
- All possible ways the coalition could form

Perfect for analyzing partnerships, team contributions, resource allocation, and more!

## 🚀 Quick Start

### Try it Online
Visit the live app: **https://yourusername.github.io/Shapley/**

### Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/Shapley.git

# Navigate to the app directory
cd Shapley/shapley-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173/Shapley/ in your browser.

## 📖 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[USER_GUIDE.md](USER_GUIDE.md)** - Comprehensive user documentation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to GitHub Pages
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Technical overview

## 🎮 Usage Example

1. **Add entities**: Marketing (30), Sales (40), Product (50)
2. **Define synergies**: Marketing+Sales (85), Marketing+Product (95), Sales+Product (110)
3. **View results**: Fair Shapley value distribution automatically calculated!

See the in-app examples for more scenarios.

## 🛠️ Technology Stack

- **Frontend**: React 18 with modern hooks
- **Build Tool**: Vite 5 for fast development
- **Graph Visualization**: ReactFlow 11
- **Icons**: Lucide React
- **Styling**: CSS3 with modern features
- **Deployment**: GitHub Pages with Actions

## 📸 Screenshots

### Main Interface
Interactive entity management with real-time synergy definition.

### Visual Graph
Network visualization with proportional edge widths.

### Heatmap Matrix
Color-coded synergy matrix with hover effects.

### Shapley Values Table
Fair distribution results with percentage breakdowns.

## 🏗️ Project Structure

```
Shapley/
├── shapley-app/           # React application
│   ├── src/
│   │   ├── components/    # All React components
│   │   ├── utils/         # Shapley calculation logic
│   │   ├── App.jsx        # Main app
│   │   └── ...
│   ├── public/            # Static assets
│   └── package.json       # Dependencies
├── .github/workflows/     # CI/CD automation
├── QUICK_START.md         # Quick start guide
├── USER_GUIDE.md          # User documentation
├── DEPLOYMENT.md          # Deployment guide
└── README.md              # This file
```

## 🚢 Deployment

### Option 1: npm deploy
```bash
cd shapley-app
npm run deploy
```

### Option 2: GitHub Actions
Push to main branch and GitHub Actions will automatically deploy.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🎓 Use Cases

- **Business Analysis**: Partnership value attribution
- **Research Teams**: Fair authorship credit
- **Resource Allocation**: Budget and cost distribution  
- **Game Theory**: Coalition formation analysis
- **Project Management**: Team contribution evaluation

## 🧮 The Math

The Shapley value formula:

```
φᵢ = Σ [|S|! × (n - |S| - 1)! / n!] × [v(S ∪ {i}) - v(S)]
```

Where:
- `φᵢ` = Shapley value for entity i
- `S` = coalition not containing i
- `n` = total number of entities
- `v(S)` = value function for coalition S

The app handles all the complex calculations automatically!

## 🎨 Design Philosophy

- **Intuitive**: No prior knowledge required
- **Visual**: See relationships at a glance
- **Fast**: Real-time updates and calculations
- **Helpful**: Built-in help and examples
- **Beautiful**: Modern, professional appearance
- **Accessible**: Works for everyone

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by Lloyd Shapley's groundbreaking work in cooperative game theory
- Built with amazing open-source libraries
- Designed for researchers, analysts, and decision-makers

## 📞 Support

- **Documentation**: Check the guides in this repository
- **In-App Help**: Click the help button for assistance
- **Issues**: Open a GitHub issue for bugs or questions

## 🌟 Star History

If you find this tool useful, please consider giving it a star! ⭐

## 🔗 Links

- **Live Demo**: https://yourusername.github.io/Shapley/
- **Repository**: https://github.com/yourusername/Shapley
- **Issues**: https://github.com/yourusername/Shapley/issues

---

**Made with ❤️ for fair value distribution**

*Computing Shapley values shouldn't require a PhD in mathematics. This tool makes it accessible to everyone.*
