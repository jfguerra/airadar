# 🌟 Premium Color Token - Complete Guide

## ✨ Overview

A new **premium color token** has been added to your design system! This warm amber/gold color is perfect for highlighting paid features, premium plans, and upgrade CTAs. It works beautifully in both light and dark modes.

---

## 🎨 Color Values

### Light Mode
- **HSL**: `hsl(38 92% 50%)`
- **HEX**: `#F59E0B`
- **Description**: Warm amber/orange-gold
- **Text Color**: White (`#FAFAF9`)

### Dark Mode
- **HSL**: `hsl(43 96% 56%)`
- **HEX**: `#FCD34D`
- **Description**: Bright gold/yellow
- **Text Color**: Dark (`#292524`)

---

## 🚀 Quick Start

### View the Demo
Open your browser to:
```
http://localhost:5174/premium-demo
```

Or click **"Premium Color"** in the sidebar!

---

## 💻 Usage

### 1. Premium Button
```tsx
<Button className="bg-premium text-premium-foreground hover:bg-premium/90">
  <Crown className="mr-2 h-4 w-4" />
  Upgrade to Premium
</Button>
```

### 2. Premium Badge
```tsx
<span className="inline-flex items-center gap-1 rounded-full bg-premium px-3 py-1 text-xs font-semibold text-premium-foreground">
  <Crown className="h-3 w-3" />
  PREMIUM
</span>
```

### 3. Outline Button
```tsx
<Button 
  variant="outline" 
  className="border-premium text-premium hover:bg-premium hover:text-premium-foreground"
>
  Upgrade Now
</Button>
```

### 4. Premium Card Border
```tsx
<Card className="border-premium">
  {/* Premium content */}
</Card>
```

### 5. Background with Opacity
```tsx
<div className="bg-premium/10 text-premium">
  Premium feature locked
</div>
```

### 6. Text Color
```tsx
<p className="text-premium">Premium feature</p>
```

---

## 🎯 Use Cases

### ✅ When to Use

1. **Upgrade CTAs**
   ```tsx
   <Button className="bg-premium text-premium-foreground hover:bg-premium/90">
     Upgrade to Pro
   </Button>
   ```

2. **Premium Plan Cards**
   ```tsx
   <Card className="border-premium">
     <CardHeader>
       <CardTitle className="flex items-center gap-2">
         Premium Plan
         <span className="rounded-full bg-premium px-2 py-0.5 text-xs text-premium-foreground">
           PRO
         </span>
       </CardTitle>
     </CardHeader>
   </Card>
   ```

3. **Feature Locks**
   ```tsx
   <div className="flex items-center gap-2">
     <div className="rounded-lg bg-premium/10 p-3">
       <Sparkles className="h-6 w-6 text-premium" />
     </div>
     <div>
       <h4>Premium Feature</h4>
       <p className="text-sm text-muted-foreground">Upgrade to unlock</p>
     </div>
   </div>
   ```

4. **Pricing Badges**
   ```tsx
   <span className="bg-premium text-premium-foreground px-2 py-1 rounded text-xs">
     Best Value
   </span>
   ```

5. **Status Indicators**
   ```tsx
   <div className="flex items-center gap-2 text-premium">
     <Crown className="h-4 w-4" />
     Premium Active
   </div>
   ```

### ❌ When NOT to Use

- Regular informational content
- Primary navigation
- Standard form fields
- General success states (use green)
- Error messages (use destructive)

---

## 🎨 Tailwind Classes

### Background
- `bg-premium` - Solid premium background
- `bg-premium/90` - 90% opacity
- `bg-premium/10` - 10% opacity (subtle)

### Text
- `text-premium` - Premium text color
- `text-premium-foreground` - Text that goes ON premium background

### Border
- `border-premium` - Premium colored border

### Hover States
- `hover:bg-premium` - Hover background
- `hover:text-premium` - Hover text
- `hover:bg-premium/90` - Slightly transparent hover

### Combinations
```tsx
className="bg-premium text-premium-foreground hover:bg-premium/90"
className="border-premium text-premium hover:bg-premium hover:text-premium-foreground"
className="bg-premium/10 text-premium"
```

---

## 🎭 Recommended Icon Pairings

From **Lucide React**:

```tsx
import { Crown, Star, Sparkles, Zap, Award, TrendingUp, Medal } from "lucide-react"

// Crown - Most common for premium
<Crown className="h-4 w-4 text-premium" />

// Star - For ratings/favorites
<Star className="h-4 w-4 text-premium" />

// Sparkles - For new premium features
<Sparkles className="h-4 w-4 text-premium" />

// Zap - For power/speed features
<Zap className="h-4 w-4 text-premium" />

// Award - For achievements
<Award className="h-4 w-4 text-premium" />

// TrendingUp - For analytics/growth
<TrendingUp className="h-4 w-4 text-premium" />

// Medal - For exclusive benefits
<Medal className="h-4 w-4 text-premium" />
```

---

## 📋 Component Examples

### Premium Subscription Card
```tsx
<Card className="border-premium">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      Premium Plan
      <span className="inline-flex items-center gap-1 rounded-full bg-premium px-2 py-0.5 text-xs font-semibold text-premium-foreground">
        <Crown className="h-3 w-3" />
        PRO
      </span>
    </CardTitle>
    <CardDescription>Unlock all features and benefits</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="text-3xl font-bold">
      €49<span className="text-lg font-normal text-muted-foreground">/month</span>
    </div>
    <ul className="space-y-2">
      <li className="flex items-center gap-2 text-sm">
        <Check className="h-4 w-4 text-premium" />
        Unlimited sessions
      </li>
      <li className="flex items-center gap-2 text-sm">
        <Check className="h-4 w-4 text-premium" />
        Priority support
      </li>
    </ul>
    <Button className="w-full bg-premium text-premium-foreground hover:bg-premium/90">
      <Crown className="mr-2 h-4 w-4" />
      Upgrade to Premium
    </Button>
  </CardContent>
</Card>
```

### Feature Lock Banner
```tsx
<Card>
  <CardContent className="p-6">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-premium/10">
        <Sparkles className="h-6 w-6 text-premium" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">Advanced Analytics</h4>
        <p className="text-sm text-muted-foreground">
          Unlock detailed insights and reporting
        </p>
      </div>
      <Button 
        variant="outline" 
        className="border-premium text-premium hover:bg-premium hover:text-premium-foreground"
      >
        Upgrade
      </Button>
    </div>
  </CardContent>
</Card>
```

### Premium Badge Variations
```tsx
{/* Solid */}
<span className="inline-flex items-center gap-1 rounded-full bg-premium px-3 py-1 text-xs font-semibold text-premium-foreground">
  <Crown className="h-3 w-3" />
  PREMIUM
</span>

{/* Subtle */}
<span className="inline-flex items-center gap-1 rounded-full bg-premium/20 px-3 py-1 text-xs font-semibold text-premium">
  <Crown className="h-3 w-3" />
  Exclusive
</span>

{/* Outlined */}
<span className="inline-flex items-center gap-1 rounded-full border border-premium px-3 py-1 text-xs font-semibold text-premium">
  <Star className="h-3 w-3" />
  PRO
</span>
```

---

## 🎨 Design Guidelines

### Do's ✅

- ✅ Use for premium features and paid upgrades
- ✅ Pair with Crown, Star, Sparkles icons
- ✅ Use sparingly to maintain impact
- ✅ Apply to upgrade CTAs
- ✅ Highlight premium plan cards
- ✅ Use for feature lock indicators
- ✅ Maintain consistent usage across app

### Don'ts ❌

- ❌ Don't overuse - loses its special meaning
- ❌ Don't mix with other accent colors
- ❌ Don't use for regular success states
- ❌ Don't apply to free features
- ❌ Don't use for navigation elements
- ❌ Don't forget dark mode considerations

---

## 🌓 Dark Mode Support

The color automatically adapts:

**Light Mode**: Warmer amber/orange tone (`#F59E0B`)
**Dark Mode**: Brighter gold/yellow tone (`#FCD34D`)

Both maintain excellent contrast and readability!

```tsx
{/* Works in both modes automatically */}
<Button className="bg-premium text-premium-foreground">
  Premium
</Button>
```

---

## 📱 Responsive Examples

```tsx
<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
  <div className="flex items-center gap-2">
    <Crown className="h-5 w-5 text-premium" />
    <span className="font-semibold">Premium Feature</span>
  </div>
  <Button 
    size="sm"
    className="w-full bg-premium text-premium-foreground hover:bg-premium/90 sm:w-auto"
  >
    Upgrade
  </Button>
</div>
```

---

## 🔧 Technical Details

### CSS Variables
```css
:root {
  --premium: 38 92% 50%;          /* Light mode */
  --premium-foreground: 0 0% 98%; /* Light mode text */
}

.dark {
  --premium: 43 96% 56%;              /* Dark mode */
  --premium-foreground: 20 14.3% 4.1%; /* Dark mode text */
}
```

### Tailwind Config
```javascript
colors: {
  premium: {
    DEFAULT: "hsl(var(--premium))",
    foreground: "hsl(var(--premium-foreground))",
  },
}
```

---

## 🎯 Common Patterns

### 1. Subscription Comparison
```tsx
<div className="grid gap-4 md:grid-cols-2">
  {/* Free Plan */}
  <Card>
    <CardHeader>
      <CardTitle>Free</CardTitle>
    </CardHeader>
    {/* ... */}
  </Card>
  
  {/* Premium Plan */}
  <Card className="border-premium relative">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
      <span className="rounded-full bg-premium px-3 py-1 text-xs font-semibold text-premium-foreground">
        Most Popular
      </span>
    </div>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        Premium
        <Crown className="h-5 w-5 text-premium" />
      </CardTitle>
    </CardHeader>
    {/* ... */}
  </Card>
</div>
```

### 2. Upsell Banner
```tsx
<div className="rounded-lg bg-premium/10 p-4">
  <div className="flex items-start gap-3">
    <Sparkles className="h-5 w-5 text-premium mt-0.5" />
    <div className="flex-1">
      <h4 className="font-semibold text-premium">Upgrade to unlock this feature</h4>
      <p className="text-sm text-muted-foreground">
        Get access to advanced analytics, priority support, and more.
      </p>
    </div>
    <Button size="sm" className="bg-premium text-premium-foreground hover:bg-premium/90">
      Upgrade
    </Button>
  </div>
</div>
```

---

## 📚 Resources

- **Demo Page**: http://localhost:5174/premium-demo
- **Lucide Icons**: https://lucide.dev
- **shadcn/ui Docs**: https://ui.shadcn.com

---

## ✨ Summary

The premium color token is now available throughout your app:
- ✅ Works in light and dark modes
- ✅ Integrated with Tailwind CSS
- ✅ Compatible with shadcn/ui
- ✅ Comprehensive demo page included
- ✅ Ready to use in your components

**Start using it now!** Visit the demo at `/premium-demo` 🌟
