# 🚀 Deploy AI Radar Backend to Vercel

This guide will help you deploy the serverless news proxy to Vercel (free).

---

## 📋 Prerequisites

- GitHub account (you have this!)
- Vercel account (free - sign up with GitHub)

---

## 🔑 Step 1: Sign Up for Vercel

1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your repos
4. You're done! 🎉

---

## 🚀 Step 2: Deploy This Project

### Option A: Deploy from GitHub (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/new
2. **Import your repository**: `jfguerra/airadar`
3. **Configure Project**:
   - Framework Preset: `Vite`
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Add Environment Variable**:
   - Click **"Environment Variables"**
   - Name: `GNEWS_API_KEY`
   - Value: `a073e168d82b2ccede50c24c2dfc073c`
5. Click **"Deploy"**

### Option B: Deploy with CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then set environment variable in dashboard
```

---

## 🔗 Step 3: Update Your App with Vercel URL

After deployment, Vercel gives you a URL like: `https://airadar.vercel.app`

### Update `.env` file:

```bash
VITE_NEWS_API_ENDPOINT=https://your-project-name.vercel.app/api/news
```

### Update GitHub Secret:

1. Go to: https://github.com/jfguerra/airadar/settings/secrets/actions
2. Add new secret:
   - Name: `VITE_NEWS_API_ENDPOINT`
   - Value: `https://your-project-name.vercel.app/api/news`

---

## ✅ Step 4: Verify It Works

1. Visit: `https://your-project-name.vercel.app/api/news?q=UX design`
2. You should see JSON with news articles
3. If you see articles, it's working! 🎉

---

## 🔄 Step 5: Deploy Frontend

Push changes to GitHub and it will auto-deploy to GitHub Pages with the working API!

---

## 🎯 What You Get

✅ **No CORS issues** - API requests happen server-side
✅ **Secure API key** - Never exposed to the browser
✅ **Free hosting** - Vercel free tier is generous
✅ **Auto-deploy** - Push to GitHub = auto-deploy
✅ **Fast & reliable** - Vercel's CDN is excellent

---

## 🆘 Need Help?

Common issues:
- **403 Forbidden**: Check environment variable `GNEWS_API_KEY` is set in Vercel
- **Function not found**: Make sure `api/news.js` exists in repo
- **CORS errors**: Vercel URL should work, check you're using the right endpoint

---

Good luck! 🚀
