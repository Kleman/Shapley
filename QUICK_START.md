# Quick Start Guide - Shapley Value Calculator

## 🚀 5-Minute Quick Start

### 1. Add Your First Entity
```
1. Type entity name in the input field (left panel)
2. Click "Add" or press Enter
3. Enter its standalone value in the small input box
```

### 2. Add More Entities
```
Repeat step 1 for each participant in your scenario
Recommended: Start with 2-3 entities
```

### 3. Define Synergies
```
1. Scroll to "Add Synergy (Coalition)" section
2. Select two entities from dropdowns
3. Enter their combined coalition value
4. Click "Add"
```

### 4. View Results
```
✓ Graph: See visual relationships
✓ Matrix: See all synergies in color
✓ Table: See Shapley values
```

### 5. Save Your Work
```
Click "Save Scenario" button (top right)
```

---

## 📊 Example in 2 Minutes

**Scenario:** Marketing and Sales partnership

1. **Add Entities:**
   - Add "Marketing" → Set value: 30
   - Add "Sales" → Set value: 40

2. **Add Synergy:**
   - Select Marketing + Sales
   - Enter coalition value: 85
   - Click Add

3. **See Results:**
   - Marketing Shapley value: ~37.5
   - Sales Shapley value: ~47.5
   - Total: 85 ✓

---

## 🎯 Key Concepts

| Term | Meaning |
|------|---------|
| **Entity** | A participant (person, dept, resource) |
| **First-Order Value** | What entity contributes alone |
| **Coalition Value** | Total value when 2 entities work together |
| **Synergy** | Extra value from collaboration |
| **Shapley Value** | Fair share of total value |

---

## 💡 Pro Tips

✅ **Coalition values are TOTAL, not additional**
   - Wrong: Marketing(30) + Sales(40) + Synergy(15) = 85
   - Right: Marketing & Sales together = 85 (total)

✅ **Start simple, then expand**
   - Begin with 2-3 entities
   - Add complexity gradually

✅ **Use examples to learn**
   - Click "Load Example" button
   - Explore pre-built scenarios
   - Modify and experiment

✅ **Save frequently**
   - Export scenarios as JSON
   - Load them later
   - Share with team

---

## 🔍 Visual Guide

### Left Panel (Input)
```
┌─────────────────────┐
│  Add Entity         │
│  [Name] [Add]       │
├─────────────────────┤
│  Entities:          │
│  • Entity 1 [30] [×]│
│  • Entity 2 [40] [×]│
├─────────────────────┤
│  Add Synergy        │
│  [E1] ↔ [E2] [85]  │
└─────────────────────┘
```

### Right Panel (Output)
```
┌──────────────────────┐
│   Visual Graph       │
│   (interactive)      │
├──────────────────────┤
│   Synergy Matrix     │
│   (color heatmap)    │
├──────────────────────┤
│   Shapley Table      │
│   (fair values)      │
└──────────────────────┘
```

---

## ⚡ Common Actions

| Action | How To |
|--------|--------|
| Add entity | Type name → Enter |
| Remove entity | Click trash icon |
| Set first-order | Input next to entity |
| Add synergy | Select 2 entities → value → Add |
| Save scenario | Top right button |
| Load scenario | Top right button |
| Load example | Dropdown menu |
| Get help | Bottom right button |

---

## 🎨 Understanding Colors

### Graph
- 🟢 **Green edges**: Positive synergies
- 🔴 **Red edges**: Negative synergies
- **Thick edges**: Strong synergies
- **Thin edges**: Weak synergies

### Matrix
- 🟩 **Light to dark green**: Increasing positive values
- ⬜ **Gray**: Zero or no synergy
- 🟥 **Light to dark red**: Increasing negative values

---

## 📐 Math in Plain English

**Shapley Value = Fair share based on:**
1. What you bring alone
2. What you add to every possible group
3. How likely each group is to form
4. Average across all scenarios

**Result:** Everyone gets credit for their contribution, including helping others succeed!

---

## ✅ Checklist for First Use

- [ ] Add at least 2 entities
- [ ] Set first-order values for each
- [ ] Add at least 1 synergy between entities
- [ ] Check the graph updates
- [ ] Check the matrix shows values
- [ ] Check the Shapley table shows results
- [ ] Try saving the scenario
- [ ] Try loading an example
- [ ] Click the help button

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Graph is empty | Add entities first |
| No edges in graph | Define coalition values |
| Matrix all gray | Set some values > 0 |
| Shapley values seem wrong | Check coalition values are totals, not additions |
| Can't see full matrix | Scroll horizontally/vertically |
| Lost my work | Use save button regularly |

---

## 📱 Device Compatibility

✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
✅ Tablet devices
✅ Mobile phones (limited screen, but functional)
✅ All modern browsers

---

## 🎓 Learn More

- **Help Button**: Click for detailed in-app help
- **USER_GUIDE.md**: Comprehensive documentation
- **Examples**: Load and explore pre-built scenarios

---

## 🚢 Ready to Deploy?

See **DEPLOYMENT.md** for instructions on:
- Publishing to GitHub Pages
- Setting up automatic deployment
- Configuring custom domains

---

**Happy calculating! 🎉**

*For the mathematically curious: The app implements the standard Shapley value formula from cooperative game theory, considering all possible coalition formations and their marginal contributions.*
