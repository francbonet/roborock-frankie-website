# Frankie - Roborock S5 + AI Layer

[![Build Status](https://img.shields.io/github/actions/workflow/status/USERNAME/roborock-frankie-website/deploy.yml?branch=main)](https://github.com/USERNAME/roborock-frankie-website/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Multilingual landing page for the Frankie project: an AI-powered interface layer for the Roborock S5 vacuum cleaner, integrating ChatGPT capabilities for enhanced user interaction.

### Key Features

- **Multilingual Support**: Full interface available in Catalan, Spanish, and English
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Architecture**: Built with React 18 and TypeScript for type safety and performance
- **Context-based State Management**: Efficient state handling using React Context API
- **Fast Development**: Powered by Vite for instant HMR (Hot Module Replacement)

## 🛠️ Technologies

### Core Stack

- **React** 18.2.0 - UI library
- **TypeScript** 5.2.2 - Type-safe JavaScript
- **Vite** 5.0.8 - Build tool and dev server

### Development Tools

- **ESLint** 8.55.0 - Code linting
- **@vitejs/plugin-react** 4.2.1 - React plugin for Vite
- **@typescript-eslint** 6.14.0 - TypeScript ESLint integration

### Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## 🚀 Installation

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### Setup

1. Clone the repository:

```bash
git clone https://github.com/francbonet/roborock-frankie-website.git
cd roborock-frankie-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 💻 Usage

### Development

```bash
# Start development server with HMR
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
roborock-frankie-website/
├── src/
│   ├── components/          # React components
│   │   └── LanguageSelector.tsx
│   ├── content/             # Content and translations
│   │   └── translations.ts
│   ├── context/             # Context providers
│   │   └── LanguageContext.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useLanguage.ts
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🌍 Internationalization

The application supports three languages:

- **English** (en) - Default language
- **Catalan** (ca) 
- **Spanish** (es)

Language selection is managed through React Context API and persists across sessions.

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

**Live Demo:** https://francbonet.github.io/roborock-frankie-website/

### Deployment Configuration

The deployment workflow is defined in `.github/workflows/deploy.yml` and handles:

- Building the application
- Running linters and type checks
- Deploying to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Roborock for the S5 platform
- OpenAI for ChatGPT integration capabilities
- The React and Vite communities