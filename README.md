# 🧠 AI Design Radar

**A curated radar tracking how AI impacts product design. Signal over noise. Built for product designers.**

## Live Demo

Visit the live application: [Your Deployment URL]

## What This Is

AI Design Radar is a digest-style news aggregator that delivers curated AI updates specifically for Product Designers every 2 days.

### Why It Exists

The AI design tool landscape is noisy. New features launch daily, but most are incremental or aspirational. **This radar filters for signal.**

### Who It's For

* **Product Designers** who need to stay ahead of AI tooling without drowning in hype
* **Design Leaders** responsible for design systems and team capability
* **Design Technologists** who bridge design and engineering with AI-assisted tools

---

## Features

✨ **2-Day Automated Schedule** - Background fetching every 2 days with manual refresh option

📊 **4 Content Categories**:
- **AI Design Tools** (Figma AI, design plugins, image generation)
- **Prototyping AI** (interaction design, wireframes)
- **Workflow Automation** (productivity, design systems)
- **Industry Trends** (UX research, accessibility, best practices)

💾 **Frontend-Only** - No backend needed, uses localStorage for persistence

📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile

🔄 **Read/Unread Tracking** - Visual indicators for new updates

📰 **Real News Integration** - Powered by NewsAPI for live content

---

## Quick Start

### Prerequisites

* Node.js 18+ and npm
* NewsAPI key (free at [newsapi.org](https://newsapi.org/register))

### Installation

```bash
# Clone the repository
git clone https://github.com/jfguerra/airadar.git
cd airadar

# Install dependencies
npm install

# Create .env file with your API key
echo "VITE_NEWS_API_KEY=your_api_key_here" > .env

# Run the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The production build will be in the `/dist` folder, ready for deployment.

---

## Configuration

### Getting Your NewsAPI Key

1. Visit [newsapi.org/register](https://newsapi.org/register)
2. Sign up for a free account
3. Copy your API key
4. Add it to `.env`:
   ```
   VITE_NEWS_API_KEY=your_key_here
   ```
5. Restart the dev server

**Free tier includes:**
- 100 requests/day
- 150,000+ news sources
- Perfect for the 2-day schedule (uses <1 request per update)

### Customizing Categories

Edit `src/types/aiRadar.ts` to customize categories and keywords:

```typescript
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'your-category',
    label: 'Your Category Name',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    keywords: ['keyword1', 'keyword2'],
    icon: 'IconName'
  }
];
```

### Changing Update Schedule

Edit `src/types/aiRadar.ts`:

```typescript
export const SCHEDULE_CONFIG = {
  intervalDays: 2, // Change to desired number of days
  checkIntervalMs: 60 * 60 * 1000, // How often to check
};
```

---

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variable: `VITE_NEWS_API_KEY`
3. Deploy!

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variable: `VITE_NEWS_API_KEY`
5. Deploy!

### GitHub Pages

```bash
npm run build
# Deploy the /dist folder to GitHub Pages
```

---

## Project Structure

```
/airadar
├── /src
│   ├── /components
│   │   └── /ui              # shadcn/ui components
│   ├── /hooks
│   │   └── useAIRadarScheduler.ts   # 2-day scheduling logic
│   ├── /pages
│   │   └── AIRadar.tsx      # Main AI Radar page
│   ├── /services
│   │   └── aiRadarService.ts        # News fetching & processing
│   ├── /types
│   │   └── aiRadar.ts       # TypeScript types & constants
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── .env                     # API keys (not committed)
├── .env.example             # Example environment variables
├── package.json             # Dependencies
└── README.md                # This file
```

---

## How It Works

### Content Curation

1. **Signal collection** - Monitoring product launches, technical updates, design community discussions
2. **Practical filtering** - If it doesn't change how a product designer works, it doesn't make the cut
3. **Categorization** - Each update is automatically categorized based on keywords
4. **Human-friendly formatting** - Succinct summaries with readable dates

### Data Sources

- **NewsAPI** - General tech and design news
- **RSS Feeds** (configurable):
  - Figma Blog
  - Adobe Blog
  - UX Collective

The service is designed to be easily extensible with additional sources.

---

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **NewsAPI** - News data source

---

## Design Philosophy

### Signal Over Noise

This radar prioritizes:
* **Practical impact** over theoretical potential
* **Workflow changes** over feature announcements
* **Credible sources** over social media hype
* **Actionable insights** over commentary

### Privacy-First

* No analytics tracking
* No email capture
* Data stays in your browser (localStorage)
* API key stays secure (.env, gitignored)

---

## Contributing

Have a signal worth tracking? **Open an issue** or submit a pull request.

### What Makes a Good Contribution

* **High signal** - Does it change how product designers work?
* **Credible source** - Official product launches, technical documentation, or design community consensus
* **Practical implications** - Can a designer try this next week?

---

## Documentation

- **[AI_RADAR_README.md](AI_RADAR_README.md)** - Detailed feature documentation
- **[SETUP_REAL_NEWS.md](SETUP_REAL_NEWS.md)** - Guide to setting up real news sources

---

## License

MIT License. Use this however you want.

---

## Contact

For questions, feedback, or collaboration:
- Open an issue on GitHub
- Fork the project and adapt it
- Share what you build!

**Built for designers, by designers 🎨**
