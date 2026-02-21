# 🔄 Switched to GNews API

## Why the Change?

NewsAPI's free tier doesn't allow browser requests from production domains (only localhost). GNews API allows client-side requests and works perfectly with GitHub Pages!

## 🆓 Free Tier Benefits

- ✅ **100 requests/day** (plenty for updates every 2 days)
- ✅ **Works in browser** (CORS enabled)
- ✅ **Real article URLs** (direct links to full articles)
- ✅ **No credit card required**

---

## 🔑 Get Your Free API Key

### Step 1: Sign Up
1. Go to: **https://gnews.io/**
2. Click **"Get API Key"** or **"Sign Up"**
3. Create a free account (just email + password)
4. You'll immediately get your API key

### Step 2: Add to Local Development
1. Copy your API key from the GNews dashboard
2. Open `.env` file in your project
3. Replace `your_gnews_api_key_here` with your actual key:
   ```
   VITE_GNEWS_API_KEY=your_actual_api_key_here
   ```
4. Restart your dev server (`npm run dev`)

### Step 3: Add to GitHub Pages
1. Go to: https://github.com/jfguerra/airadar/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `VITE_GNEWS_API_KEY`
4. Value: Your GNews API key
5. Click **"Add secret"**

### Step 4: Deploy
1. Push any change to trigger deployment OR
2. Go to **Actions** tab and manually trigger the workflow

---

## ✨ What You'll Get

Real article URLs like:
- `https://www.smashingmagazine.com/2026/02/design-systems-guide/`
- `https://uxdesign.cc/ai-in-product-design-2026`
- `https://www.figma.com/blog/new-ai-features/`

Instead of generic homepages! 🎉

---

## 📊 API Limits

- **100 requests/day** on free tier
- Each "Refresh" = ~7 requests (one per search term)
- ~14 refreshes per day possible
- Perfect for "every 2 days" update schedule!

---

## 🛠️ Customization

Edit search terms in `src/App.tsx`:
```typescript
const NEWS_SEARCH_TERMS = [
  'UX design',
  'product design',
  'design systems',
  'Figma',
  'prototyping',
  'user experience',
  'design tools'
];
```

Add/remove terms to customize what news you see!
