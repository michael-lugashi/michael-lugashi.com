# Michael Lugashi - Personal Portfolio Website

<div align="center">

## 🌐 **[🚀 VISIT LIVE SITE 🚀](https://michaellugashi.com)**

_Click above to explore the interactive portfolio_

</div>

---

A modern, responsive personal portfolio website showcasing my work as a Full-Stack Engineer. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, dark mode support, and a comprehensive contact system.

## 🌟 Features

### Core Functionality

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions and persistent user preference
- **Smooth Animations**: Parallax scrolling effects and smooth transitions throughout the site
- **Contact Form**: Fully functional contact form with EmailJS integration and form validation
- **Project Showcase**: Dynamic project cards with external links and detailed descriptions
- **Analytics Integration**: Google Analytics tracking for page views and user interactions

### User Experience

- **Sticky Navigation**: Intelligent navigation that adapts to scroll position
- **Scroll Indicators**: Visual feedback for page navigation and scroll progress
- **Notification System**: Toast notifications for form submissions and user feedback
- **Accessibility**: Built with accessibility best practices and semantic HTML
- **Performance Optimized**: Fast loading times with optimized assets and code splitting

### Technical Features

- **Type Safety**: Full TypeScript implementation with strict type checking
- **Component Library**: Reusable UI components with Storybook documentation
- **Code Quality**: ESLint, Prettier, and Husky for consistent code formatting
- **Modern Build System**: Vite for fast development and optimized production builds

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool
- **React Spring** - Physics-based animations

### Development Tools

- **Storybook** - Component development and documentation
- **Vitest** - Unit and integration testing
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks

### Services & Integrations

- **EmailJS** - Contact form email delivery
- **Google Analytics** - Website analytics and tracking
- **AWS** - Deployment and hosting (deployment-ready)
- **GitHub Actions** for automated deployments and linter tests

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/michael-lugashi.com.git
   cd michael-lugashi.com
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   # EmailJS Configuration
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key

   # Google Analytics
   VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Primary button component
│   ├── Card.tsx        # Card container component
│   ├── TextField.tsx   # Form input component
│   ├── ThemeToggleBar.tsx # Dark/light mode toggle
│   └── ...
├── pages/              # Main page components
│   ├── Header.tsx      # Hero section
│   ├── AboutMe.tsx     # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── ContactMe.tsx   # Contact form
│   └── NavBar.tsx      # Navigation component
├── hooks/              # Custom React hooks
│   ├── useDarkMode.ts  # Theme management
│   ├── useNotify.ts    # Notification system
│   └── ...
├── contexts/           # React contexts
│   └── NotificationProvider.tsx
├── config/             # Configuration files
│   ├── analytics.ts    # Google Analytics setup
│   └── email.ts        # EmailJS configuration
├── assets/             # Static assets
│   ├── images/         # Image files
│   ├── svgs/           # SVG components
│   └── data/           # JSON data files
└── stores/             # State management
    └── notificationStore.ts
```

## 🎨 Component Library

This project includes a comprehensive component library documented with Storybook:

Run `npm run storybook` to explore all components interactively.

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and email template
3. Add your credentials to the `.env` file

### Google Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID
3. Add it to the `.env` file

Detailed setup instructions are available in `GOOGLE_ANALYTICS_SETUP.md`.

## 🚀 Deployment

This project uses automated deployment with AWS and GitHub Actions for a seamless CI/CD pipeline.

### Automated Deployment Pipeline

- **Hosting**: AWS (S3 + CloudFront)
- **CI/CD**: GitHub Actions
- **Trigger**: Automatic deployment on push to `main` branch
- **Process**: Build → Test → Deploy to AWS infrastructure

### Deployment Workflow

1. **Push to main branch** - Triggers the GitHub Actions workflow
2. **Build Process** - Runs `npm run build` to create production assets
3. **Testing** - Executes test suite to ensure code quality
4. **AWS Deployment** - Automatically deploys to S3 and invalidates CloudFront cache
5. **Live Site** - Changes are live within minutes

### Environment Variables

Environment variables are securely managed through:

- **GitHub Secrets** - For CI/CD pipeline variables
- **AWS Systems Manager** - For production environment configuration

### Manual Deployment (if needed)

```bash
npm run build
# The GitHub Actions workflow handles deployment automatically
# Manual deployment should only be used for emergency situations
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Image Optimization**: Responsive images with proper formats
- **Caching**: Efficient caching strategies for static assets

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Michael Lugashi**

- Email: michael.lugashi@gmail.com
- Website: [michael-lugashi.com](https://michael-lugashi.com)
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ by Michael Lugashi using React, TypeScript, and modern web technologies.
