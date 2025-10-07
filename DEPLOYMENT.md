# Deployment Guide for GitHub Pages

This guide will help you deploy your Shapley Value Calculator to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step-by-Step Deployment

### Option 1: Using npm deploy command (Recommended)

1. **Update the base path in vite.config.js**
   
   Open `shapley-app/vite.config.js` and update the `base` property with your repository name:
   ```javascript
   base: '/Shapley/', // Your repository name
   ```

2. **Build and deploy**
   ```bash
   cd shapley-app
   npm run deploy
   ```

   This will:
   - Build your app
   - Create a `gh-pages` branch (if it doesn't exist)
   - Push the build to the `gh-pages` branch

3. **Configure GitHub Pages**
   
   Go to your repository on GitHub:
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `gh-pages` and folder: `/ (root)`
   - Click Save

4. **Access your app**
   
   Your app will be available at: `https://yourusername.github.io/Shapley/`

### Option 2: Using GitHub Actions (Automatic)

The repository includes a GitHub Actions workflow that automatically deploys on every push to the main branch.

1. **Enable GitHub Pages with GitHub Actions**
   
   Go to your repository on GitHub:
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code**
   ```bash
   git add .
   git commit -m "Add Shapley Value Calculator"
   git push origin main
   ```

3. **Monitor deployment**
   
   Go to the "Actions" tab in your repository to see the deployment progress.

4. **Access your app**
   
   Once deployed, your app will be available at: `https://yourusername.github.io/Shapley/`

## Troubleshooting

### 404 Error After Deployment

If you see a 404 error:
1. Make sure the `base` path in `vite.config.js` matches your repository name
2. Wait a few minutes for GitHub Pages to update
3. Check that GitHub Pages is enabled in your repository settings

### Build Errors

If you encounter build errors:
1. Make sure all dependencies are installed: `npm install`
2. Test the build locally: `npm run build`
3. Check for any error messages and resolve them before deploying

### Permission Errors with GitHub Actions

If the GitHub Actions workflow fails with permission errors:
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Save and re-run the workflow

## Local Testing

Before deploying, you can test the production build locally:

```bash
cd shapley-app
npm run build
npm run preview
```

This will build your app and serve it locally so you can test it before deployment.

## Updating Your App

To update your deployed app:

**Using npm deploy:**
```bash
cd shapley-app
npm run deploy
```

**Using GitHub Actions:**
```bash
git add .
git commit -m "Update app"
git push origin main
```

The app will automatically rebuild and redeploy.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. In GitHub repository settings, add your custom domain under Pages settings

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Open an issue in the repository if you encounter problems
