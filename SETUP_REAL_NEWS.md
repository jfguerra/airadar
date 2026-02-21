# Setting Up Real News Data for AI Radar

## Quick Start: NewsAPI (5 minutes)

### Step 1: Get Your Free API Key

1. Visit: **https://newsapi.org/register**
2. Create a free account (no credit card required)
3. Copy your API key from the dashboard

### Step 2: Create .env File

Create a file named `.env` in the root directory (`/Users/joao.guerra/Desktop/Testcursor/.env`):

```env
VITE_NEWS_API_KEY=paste_your_key_here
```

**Example:**
```env
VITE_NEWS_API_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

**Note:** Vite requires environment variables to start with `VITE_` prefix.

### Step 3: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

That's it! The AI Radar will now fetch real news data.

---

## NewsAPI Free Tier Limits

✅ **100 requests per day**  
✅ **150,000+ news sources**  
✅ **Last 30 days of articles**  
✅ **Perfect for 2-day schedule** (uses <1 request per update)

---

## Alternative/Additional Sources

### Option 2: RSS Feeds (Free, No API Key)

To enable RSS feeds, you'll need an RSS parser. Add this package:

```bash
npm install rss-parser
```

Then the RSS feeds will automatically start working for:
- Figma Blog
- Adobe Blog
- UX Collective

### Option 3: Product Hunt (Free API)

1. Visit: https://api.producthunt.com/v2/docs
2. Create an app to get API credentials
3. Add to `.env`:
   ```env
   VITE_PRODUCTHUNT_CLIENT_ID=your_client_id
   VITE_PRODUCTHUNT_CLIENT_SECRET=your_secret
   ```

### Option 4: Reddit (Free API)

1. Visit: https://www.reddit.com/prefs/apps
2. Create an app (script type)
3. Add to `.env`:
   ```env
   VITE_REDDIT_CLIENT_ID=your_client_id
   VITE_REDDIT_CLIENT_SECRET=your_secret
   ```

---

## Testing Real Data

After adding your API key:

1. Navigate to AI Radar page
2. Click **"Refresh Now"**
3. You should see real, recent news articles
4. Check browser console for any errors

---

## Troubleshooting

### "No updates fetched"
- Check your API key is correct
- Verify `.env` file is in root directory
- Restart dev server after adding .env

### "CORS errors"
- NewsAPI doesn't work from localhost in browser
- The service will fall back to mock data for development
- Use mock data for development, or set up a proxy

### "API rate limit exceeded"
- Free tier: 100 requests/day
- 2-day schedule uses ~0.5 requests/day
- Manual refreshes count toward limit

---

## Production Considerations

For production deployment, set environment variables in your hosting platform:

**Vercel:**
```bash
vercel env add VITE_NEWS_API_KEY
```

**Netlify:**
Add in: Site settings → Environment variables

**Other platforms:**
Refer to their documentation for environment variables

---

## Want More Sources?

Edit `/src/services/aiRadarService.ts` to add custom sources. The service is designed to be easily extensible.

