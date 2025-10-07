# Pre-Deployment Checklist ✅

Use this checklist before deploying your Shapley Value Calculator to GitHub Pages.

## 📝 Configuration

- [ ] **Update Repository Name in vite.config.js**
  - Open `shapley-app/vite.config.js`
  - Change `base: '/Shapley/'` to match your GitHub repository name
  - If your repo is named differently, update accordingly
  - Example: If repo is `my-shapley`, use `base: '/my-shapley/'`

- [ ] **Update README URLs**
  - Replace `yourusername` with your GitHub username
  - Check all links in README.md point to correct locations

## 🧪 Local Testing

- [ ] **Development Server Works**
  ```bash
  cd shapley-app
  npm run dev
  ```
  - Visit http://localhost:5173/Shapley/
  - Verify app loads without errors

- [ ] **Production Build Works**
  ```bash
  cd shapley-app
  npm run build
  npm run preview
  ```
  - Check build completes successfully
  - Preview the production build
  - Test all features

## 🎮 Feature Testing

- [ ] **Entity Management**
  - Add multiple entities
  - Set first-order values
  - Remove entities
  - Check values persist during session

- [ ] **Synergy Definition**
  - Add synergies between entities
  - Verify synergy list updates
  - Check duplicate handling

- [ ] **Visual Graph**
  - Graph renders with entities
  - Edges appear when synergies added
  - Edge widths vary with synergy values
  - Nodes are draggable

- [ ] **Synergy Matrix**
  - Matrix displays all entities
  - Colors reflect values correctly
  - Diagonal shows first-order values
  - Hover effects work

- [ ] **Shapley Values Table**
  - Values calculate correctly
  - Percentages sum to 100%
  - Total row shows correct sum
  - Progress bars display properly

- [ ] **Save/Load Functionality**
  - Save scenario downloads JSON file
  - Load scenario reads JSON correctly
  - Scenario restores properly

- [ ] **Example Scenarios**
  - All three examples load
  - Examples display correctly
  - Can modify loaded examples

- [ ] **Help System**
  - Help button opens modal
  - All help text displays
  - Modal closes properly

- [ ] **Title Editing**
  - Click to edit title
  - Save new title
  - Title persists

## 🖥️ Browser Testing

- [ ] **Chrome/Edge** - Test all features
- [ ] **Firefox** - Test all features
- [ ] **Safari** - Test all features (if on Mac)

## 📱 Responsive Testing

- [ ] **Desktop (1920x1080)** - Full layout works
- [ ] **Laptop (1366x768)** - Layout adapts
- [ ] **Tablet (768x1024)** - Mobile view works
- [ ] **Mobile (375x667)** - Components stack correctly

## 🐛 Error Handling

- [ ] **Empty States**
  - No entities: helpful messages show
  - No synergies: graph shows empty state
  - Invalid inputs: handled gracefully

- [ ] **Edge Cases**
  - Single entity scenario
  - Very large numbers
  - Negative synergies
  - Zero values

## 📚 Documentation

- [ ] **README.md** - Updated and accurate
- [ ] **QUICK_START.md** - Clear and helpful
- [ ] **USER_GUIDE.md** - Comprehensive
- [ ] **DEPLOYMENT.md** - Step-by-step instructions
- [ ] **PROJECT_SUMMARY.md** - Technical overview complete

## 🔧 Git Setup

- [ ] **Repository Initialized**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Shapley Value Calculator"
  ```

- [ ] **Remote Added**
  ```bash
  git remote add origin https://github.com/yourusername/Shapley.git
  ```

- [ ] **Pushed to GitHub**
  ```bash
  git push -u origin main
  ```

## 🚀 Deployment Method Selection

### Option A: Manual Deployment (npm)

- [ ] Install gh-pages if not already done
  ```bash
  cd shapley-app
  npm install --save-dev gh-pages
  ```

- [ ] Run deployment
  ```bash
  npm run deploy
  ```

- [ ] Configure GitHub Pages in repository settings
  - Go to Settings → Pages
  - Source: Deploy from branch
  - Branch: gh-pages
  - Folder: / (root)

### Option B: GitHub Actions (Automatic)

- [ ] Workflow file exists at `.github/workflows/deploy.yml`

- [ ] Enable GitHub Actions in repository settings
  - Go to Settings → Actions → General
  - Allow all actions

- [ ] Configure GitHub Pages for Actions
  - Go to Settings → Pages
  - Source: GitHub Actions

- [ ] Push to trigger deployment
  ```bash
  git push origin main
  ```

## ✅ Post-Deployment Verification

- [ ] **Site Accessible**
  - Visit https://yourusername.github.io/Shapley/
  - Page loads without 404 error

- [ ] **Assets Load Correctly**
  - CSS styles apply
  - JavaScript runs
  - No console errors

- [ ] **All Features Work**
  - Add entities
  - Define synergies
  - View visualizations
  - Save/load scenarios
  - Load examples

- [ ] **Mobile Works**
  - Test on actual mobile device
  - Or use browser dev tools mobile view

## 🎉 Launch Checklist

- [ ] **Share with Users**
  - Share the URL
  - Provide USER_GUIDE.md link
  - Mention QUICK_START.md for new users

- [ ] **Monitor Issues**
  - Enable GitHub Issues
  - Respond to user feedback
  - Fix bugs promptly

- [ ] **Optional Enhancements**
  - Add Google Analytics (optional)
  - Create custom domain (optional)
  - Add more examples (optional)

## 🔍 Common Issues & Solutions

### Issue: 404 Error After Deployment
**Solution:** 
- Check `base` path in vite.config.js matches repo name
- Wait 2-5 minutes for GitHub Pages to update
- Clear browser cache

### Issue: Assets Not Loading (blank page)
**Solution:**
- Verify `base` path in vite.config.js
- Check browser console for errors
- Rebuild and redeploy

### Issue: GitHub Actions Failing
**Solution:**
- Check workflow permissions in repo settings
- Enable "Read and write permissions"
- Re-run failed workflow

### Issue: npm run deploy Fails
**Solution:**
- Ensure gh-pages is installed
- Check git remote is set correctly
- Verify you're in shapley-app directory

## 📊 Performance Checklist

- [ ] **Build Size** - Check dist folder size is reasonable
- [ ] **Load Time** - Page loads in < 3 seconds
- [ ] **Calculations** - Shapley values compute quickly (< 1s for 5 entities)
- [ ] **No Memory Leaks** - Can add/remove entities repeatedly

## 🔐 Security Checklist

- [ ] **No Sensitive Data** - No API keys or secrets in code
- [ ] **Dependencies Updated** - Run `npm audit` and fix issues
- [ ] **HTTPS** - GitHub Pages uses HTTPS by default ✓

## 📈 Analytics (Optional)

- [ ] Add Google Analytics (if desired)
- [ ] Track page views
- [ ] Track feature usage
- [ ] Monitor user behavior

## 🎨 Branding (Optional)

- [ ] Add custom favicon
- [ ] Update page title in index.html
- [ ] Add logo or header image
- [ ] Customize color scheme

---

## ✅ Final Pre-Deploy Command

Before deploying, run this sequence to ensure everything is ready:

```bash
# Navigate to app directory
cd shapley-app

# Clean install
rm -rf node_modules package-lock.json
npm install

# Run linter
npm run lint

# Build for production
npm run build

# Preview build locally
npm run preview

# If everything looks good, deploy!
npm run deploy
```

---

## 🎉 Deployment Complete!

Once all items are checked:
1. ✅ Configuration is correct
2. ✅ Local testing passed
3. ✅ All features work
4. ✅ Documentation is ready
5. ✅ Git is set up
6. ✅ Deployment successful
7. ✅ Live site verified

**Congratulations! Your Shapley Value Calculator is live! 🚀**

Share it with the world and help people understand fair value distribution!

---

**Need Help?** Check DEPLOYMENT.md or USER_GUIDE.md for detailed instructions.
