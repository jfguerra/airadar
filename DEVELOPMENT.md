# Development Guide

## Quick Start

### First Time Setup

1. **Install Node.js** (if not already installed):
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download and install the LTS version
   - Verify installation: `node --version` and `npm --version`

2. **Install Project Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   - Navigate to `http://localhost:5173`
   - The app should load with hot module replacement enabled

## Development Workflow

### Running the App

```bash
# Start dev server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Project Structure Explained

```
/Users/joao.guerra/Desktop/Testcursor/
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Header.tsx     # Top navigation
│   │   ├── Sidebar.tsx    # Side navigation
│   │   └── Layout.tsx     # Page layout wrapper
│   ├── pages/             # Page components
│   │   ├── Subscriptions.tsx  # Main subscription page
│   │   ├── Payments.tsx       # Payments page
│   │   └── StyleGuide.tsx     # Design system page
│   ├── App.tsx            # Main app with routing
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── old-html-files/        # Original HTML files (archived)
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
└── vite.config.ts         # Vite config
```

## Adding New Features

### Creating a New Page

1. Create a new file in `src/pages/`, e.g., `NewPage.tsx`:
   ```tsx
   export default function NewPage() {
     return (
       <>
         <h1 className="page-title">New Page</h1>
         <div>Your content here</div>
       </>
     )
   }
   ```

2. Add route in `src/App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage'
   
   // Add inside <Route path="/" element={<Layout />}>
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link in `src/components/Sidebar.tsx`:
   ```tsx
   <NavLink to="/new-page" className="nav-item">
     <svg>...</svg>
     <span>New Page</span>
   </NavLink>
   ```

### Creating a New Component

1. Create file in `src/components/`, e.g., `Button.tsx`:
   ```tsx
   interface ButtonProps {
     children: React.ReactNode
     onClick?: () => void
     variant?: 'primary' | 'secondary'
   }
   
   export default function Button({ 
     children, 
     onClick, 
     variant = 'primary' 
   }: ButtonProps) {
     return (
       <button 
         className={`btn-${variant}`}
         onClick={onClick}
       >
         {children}
       </button>
     )
   }
   ```

2. Import and use:
   ```tsx
   import Button from '../components/Button'
   
   <Button variant="primary" onClick={() => alert('Clicked!')}>
     Click Me
   </Button>
   ```

## Styling Guide

### Using Existing CSS Variables

```css
/* Available CSS variables (defined in src/index.css): */
--header-bg: #0a0a0a;
--text-white: #ffffff;
--text-primary: #0a0a0a;
--text-secondary: #666666;
--text-muted: #888888;
--border-color: #e5e5e5;
--bg-light: #f9f9f9;
--bg-white: #ffffff;
--accent-green: #00b894;
--accent-blue: #0ea5e9;
--sidebar-active-bg: #f0f6ff;
--sidebar-active-text: #1e40af;
--link-blue: #0066cc;
```

### Example Usage

```tsx
<div style={{ 
  color: 'var(--text-primary)',
  backgroundColor: 'var(--bg-white)',
  border: '1px solid var(--border-color)'
}}>
  Content
</div>
```

## Common Tasks

### Updating the Color Palette

Edit `src/index.css` and update the `:root` variables.

### Adding New Routes

Edit `src/App.tsx` and add new `<Route>` components.

### Modifying the Sidebar

Edit `src/components/Sidebar.tsx` to add/remove navigation items.

### Changing the Header

Edit `src/components/Header.tsx` to modify the top navigation bar.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
# Kill the process using the port (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Or change the port in vite.config.ts
export default defineConfig({
  server: { port: 3000 }
})
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
npm run dev
```

## Building for Production

```bash
# Build optimized production bundle
npm run build

# Output will be in /dist folder
# Deploy the /dist folder to your hosting service
```

## Next Steps

### Adding shadcn/ui (Optional)

Once you have Node.js and npm working:

```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Adding Tailwind CSS (Optional)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)

## Support

For questions or issues:
1. Check the console for error messages
2. Review the React DevTools
3. Consult the documentation links above
