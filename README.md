# 🚀 Gavin Zhang - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and showcases my software engineering projects and skills.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with consistent color palette
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Framer Motion animations throughout the site
- **🧭 Easy Navigation**: Intuitive routing with React Router
- **🎯 Project Showcase**: Detailed project pages with live demos and source code
- **💼 Professional Sections**: About, Projects, Contact, and Skills sections
- **🌟 Interactive Elements**: Hover effects, clickable cards, and smooth transitions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Next-generation frontend tooling for fast builds
- **React Router** - Declarative routing for React applications

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Inter Font** - Clean, modern typography
- **Custom CSS Variables** - Consistent theming system

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GavinXZhang/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the environment template
   cp .env.example .env
   
   # Edit .env and add your actual values
   # At minimum, you need to set VITE_FORMSPREE_ID for the contact form
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📁 Project Structure

```
personal-website/
├── public/                 # Static assets
│   ├── images/            # Project images and photos
│   └── resume.pdf         # Resume file
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   └── Navbar.tsx     # Navigation component
│   ├── data/              # Data and content
│   │   └── projects.ts    # Project information and metadata
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page with hero and highlights
│   │   ├── About.tsx      # About me and experience
│   │   ├── Projects.tsx   # Projects grid with filtering
│   │   ├── ProjectDetail.tsx # Individual project pages
│   │   ├── Contact.tsx    # Contact form and information
│   │   └── Welcome.tsx    # Welcome animation screen
│   ├── styles/            # Global styles and themes
│   │   └── theme.css      # CSS variables and custom styles
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global CSS with Tailwind imports
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🎨 Key Components

### Home Page
- **Hero Section**: Personal introduction with profile image
- **Highlighted Works**: Featured projects with hover effects
- **Skills Section**: Interactive tech stack display
- **Call to Action**: Links to LinkedIn and contact information

### Projects Page
- **Project Grid**: Responsive card layout
- **Category Filtering**: Filter by Web, Automation, Healthcare, etc.
- **Interactive Cards**: Hover effects and click-through to details

### Project Detail Pages
- **Comprehensive Information**: Full project descriptions, challenges, and impact
- **Technology Stack**: Visual representation of tools used
- **Live Links**: Direct access to GitHub repos and live demos
- **Professional Layout**: Clean, readable design with proper information hierarchy

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically
npm run format       # Format code with Prettier

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

## 🌐 Deployment

This project is optimized for deployment on modern hosting platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment from your Git repository

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📊 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Proper image formats and lazy loading
- **Minimal Bundle Size**: Tree-shaking and dead code elimination
- **Fast Loading**: Vite's optimized build process
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and feedback!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Gavin Zhang**
- 📧 Email: [gwxzhang@bu.edu](mailto:gwxzhang@bu.edu)
- 💼 LinkedIn: [linkedin.com/in/gavin-x-zhang](https://www.linkedin.com/in/gavin-x-zhang/)
- 🐙 GitHub: [github.com/GavinXZhang](https://github.com/GavinXZhang)
- 🌐 Portfolio: [Live Website](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio websites and UI/UX best practices
- **Icons**: Heroicons for consistent iconography
- **Fonts**: Inter font family for clean typography
- **Animation**: Framer Motion for smooth, professional animations

---

⭐ **If you found this project helpful, please give it a star!** ⭐