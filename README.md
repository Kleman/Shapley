# Shapley Value Calculator 🎯

A no-code web application for computing Shapley values in cooperative game theory. Calculate fair value distributions among entities based on their individual contributions and synergies. This front has been coded with LLM help as a test of vibe-coding capabilities.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5-646cff.svg)

## 🎯 What are Shapley Values?

Shapley values provide a fair way to distribute the total value created by a coalition among its members. The method considers:

- Individual contributions (what each entity brings alone)
- Synergistic effects (extra value from collaboration)

Perfect for analyzing partnerships, team contributions, resource allocation, and more!

## 🚀 Quick Start

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



