#!/bin/bash

# Quick Start Script for Testcursor React App
# This script will help you get started quickly

echo "🚀 Testcursor React App - Quick Start"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "📥 Please install Node.js first:"
    echo "   1. Visit https://nodejs.org/"
    echo "   2. Download the LTS version"
    echo "   3. Install it"
    echo "   4. Restart your terminal"
    echo "   5. Run this script again"
    echo ""
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "⚠️  Node.js version is too old ($(node -v))"
    echo "   Please upgrade to Node.js v16 or higher"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo "✅ npm $(npm -v) detected"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo "   This might take a few minutes..."
    echo ""
    npm install
    echo ""
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎉 Everything is ready!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open your browser to:"
echo "  http://localhost:5173"
echo ""
echo "Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run preview  - Preview production build"
echo ""
echo "📚 For more information:"
echo "  - README.md for overview"
echo "  - DEVELOPMENT.md for detailed guide"
echo "  - CONVERSION_SUMMARY.md for what changed"
echo ""
echo "Happy coding! 🎨"
