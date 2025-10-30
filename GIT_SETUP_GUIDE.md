# 🚀 Git Setup and GitHub Upload Guide

## 📋 Pre-Upload Checklist

✅ **Security Checks Complete**
- [x] `.gitignore` file created and configured
- [x] No sensitive information (API keys, passwords, secrets) in code
- [x] Only public information (name, public email, LinkedIn, GitHub) present
- [x] `.env.example` template created for future environment variables

✅ **Documentation Complete**
- [x] Comprehensive `README.md` created
- [x] Project structure documented
- [x] Installation and setup instructions provided

## 🔧 Step-by-Step Git Setup

### 1. Initialize Git Repository (if not already done)
```bash
cd /Users/gavinzhang/Desktop/Code/personal-website
git init
```

### 2. Configure Git (First time setup)
```bash
# Set your name and email for commits
git config --global user.name "Gavin Zhang"
git config --global user.email "gwxzhang@bu.edu"

# Optional: Set default branch name to 'main'
git config --global init.defaultBranch main
```

### 3. Add Files to Git
```bash
# Add all files (gitignore will automatically exclude sensitive files)
git add .

# Check what files are being added (review this list!)
git status
```

### 4. Create Initial Commit
```bash
git commit -m "Initial commit: Personal portfolio website

- Modern React + TypeScript portfolio
- Responsive design with Tailwind CSS
- Project showcase with detailed pages
- Contact form and skills section
- Smooth animations with Framer Motion"
```

### 5. Create GitHub Repository

**Option A: Using GitHub Website**
1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `personal-website` (or your preferred name)
4. Description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS"
5. Set to **Public** (so employers can see it)
6. **DO NOT** initialize with README (you already have one)
7. Click "Create repository"

**Option B: Using GitHub CLI (if installed)**
```bash
gh repo create personal-website --public --description "Modern portfolio website built with React, TypeScript, and Tailwind CSS"
```

### 6. Connect Local Repository to GitHub
```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/GavinXZhang/personal-website.git

# Verify the remote was added
git remote -v
```

### 7. Push to GitHub
```bash
# Push your code to GitHub
git push -u origin main

# The -u flag sets up tracking, so future pushes can just be 'git push'
```

## 🔄 Future Updates Workflow

After making changes to your website:

```bash
# 1. Check what files changed
git status

# 2. Add changes
git add .

# 3. Commit with descriptive message
git commit -m "Add new project: [Project Name]

- Added project details and images
- Updated skills section
- Fixed responsive design issues"

# 4. Push to GitHub
git push
```

## 🌐 Setting Up Live Deployment

### Deploy to Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/in with your GitHub account
3. Click "New Project"
4. Import your `personal-website` repository
5. Vercel will auto-detect it's a Vite project
6. **IMPORTANT**: Add environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `VITE_FORMSPREE_ID` with your Formspree ID value
7. Click "Deploy"
8. Your site will be live at `https://your-project-name.vercel.app`

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/in with your GitHub account
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. **IMPORTANT**: Add environment variables in Netlify:
   - Go to Site Settings → Environment Variables
   - Add `VITE_FORMSPREE_ID` with your Formspree ID value
8. Click "Deploy site"

## 🔒 Security Best Practices

### ✅ Safe to Commit
- Public information (name, public email, LinkedIn, GitHub URLs)
- Project descriptions and accomplishments
- Public repository links
- Images and assets
- Configuration files (package.json, tsconfig.json, etc.)

### ❌ Never Commit
- `.env` files with real values
- API keys or secrets
- Database passwords
- Private keys or certificates
- Personal notes or private information
- `node_modules/` (handled by .gitignore)

## 🚨 Emergency: Remove Sensitive Data

If you accidentally commit sensitive information:

```bash
# Remove file from Git but keep locally
git rm --cached filename.txt

# Remove from history (use carefully!)
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch filename.txt' \
--prune-empty --tag-name-filter cat -- --all

# Force push to update GitHub
git push origin --force --all
```

## 📞 Need Help?

If you encounter issues:
1. Check GitHub's [Git Handbook](https://guides.github.com/introduction/git-handbook/)
2. Use `git status` to see current state
3. Use `git log --oneline` to see commit history
4. Contact me if you need assistance!

## 🎉 You're Ready!

Once pushed to GitHub, your portfolio will be:
- ✅ Publicly accessible to employers
- ✅ Properly documented
- ✅ Secure (no sensitive data exposed)
- ✅ Professional and polished
- ✅ Ready for deployment to live hosting

**Next Steps:**
1. Add the live URL to your resume
2. Share the GitHub repository link with potential employers
3. Keep updating with new projects and skills!
