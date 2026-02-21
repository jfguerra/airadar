# Usercentrics React App

A modern React application built with Vite, TypeScript, and React Router showcasing a subscription management interface with a comprehensive design system.

## Features

- 🎨 **Design System** - Complete style guide with colors, typography, spacing, and components
- ✨ **shadcn/ui** - Beautiful, accessible UI components with Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Development** - Built with Vite for lightning-fast HMR
- 🔒 **Type-Safe** - Full TypeScript support
- 🎯 **Modern Stack** - React 18, React Router, Tailwind CSS, and TypeScript

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 16 or higher):

```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Top navigation header
│   ├── Sidebar.tsx        # Side navigation
│   └── Layout.tsx         # Main layout wrapper
├── pages/
│   ├── Subscriptions.tsx  # Subscriptions page
│   ├── Payments.tsx       # Payments page
│   ├── StyleGuide.tsx     # Design system showcase
│   └── StyleGuide.css     # Design system styles
├── App.tsx               # Main app component with routing
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## Pages

- **Subscriptions** - View and manage subscription plans
- **Payments** - Payment history and management
- **Style Guide** - Complete design system documentation
- **shadcn/ui Demo** - Interactive component showcase

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Beautiful icon library
- **Inter Font** - Typography

## Design System

The app includes a comprehensive design system featuring:

- **Color Palette** - Brand colors, neutrals, and accent colors
- **Typography** - Font sizes, weights, and line heights
- **Spacing System** - 8-point grid system
- **Components** - Reusable UI components
- **Design Principles** - Trust, accessibility, and performance

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

ISC

## Author

Built with ❤️ for Usercentrics
