// Vercel Serverless Function - RSS Feed Aggregator
// Fetches and parses RSS feeds from curated design blogs

import Parser from 'rss-parser';

// Curated RSS feeds for UX/Product Design
const RSS_FEEDS = [
  // Tier 1: Core UX/Design
  { url: 'https://www.nngroup.com/feed/rss/', category: 'industry-trends', name: 'Nielsen Norman Group' },
  { url: 'https://www.smashingmagazine.com/feed/', category: 'design-tools', name: 'Smashing Magazine' },
  { url: 'https://medium.com/feed/ux-collective', category: 'industry-trends', name: 'UX Collective' },
  { url: 'https://alistapart.com/main/feed/', category: 'workflow-automation', name: 'A List Apart' },
  
  // Tier 2: Design Tools & Systems
  { url: 'https://www.figma.com/blog/rss/', category: 'design-tools', name: 'Figma Blog' },
  { url: 'https://css-tricks.com/feed/', category: 'design-tools', name: 'CSS-Tricks' },
  { url: 'https://sidebar.io/feed', category: 'industry-trends', name: 'Sidebar' },
  
  // Tier 3: Prototyping & Interaction
  { url: 'https://www.framer.com/blog/rss.xml', category: 'prototyping', name: 'Framer' },
];

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const parser = new Parser({
      timeout: 5000,
      headers: {
        'User-Agent': 'AI-Radar-Bot/1.0'
      }
    });

    console.log('🔄 Fetching RSS feeds...');
    
    // Fetch all RSS feeds in parallel
    const feedPromises = RSS_FEEDS.map(async (feed) => {
      try {
        const parsed = await parser.parseURL(feed.url);
        console.log(`✅ Fetched ${parsed.items?.length || 0} articles from ${feed.name}`);
        
        return parsed.items?.slice(0, 10).map(item => ({
          title: item.title || 'Untitled',
          description: item.contentSnippet || item.content || item.summary || '',
          url: item.link || '',
          publishedAt: item.isoDate || item.pubDate || new Date().toISOString(),
          source: {
            name: feed.name
          },
          category: feed.category
        })) || [];
      } catch (error) {
        console.error(`❌ Error fetching ${feed.name}:`, error.message);
        return [];
      }
    });

    const results = await Promise.all(feedPromises);
    const allArticles = results.flat();

    console.log(`📊 Total articles fetched: ${allArticles.length}`);

    // Remove duplicates by URL
    const uniqueArticles = Array.from(
      new Map(allArticles.map(article => [article.url, article])).values()
    );

    console.log(`🔍 Unique articles after deduplication: ${uniqueArticles.length}`);

    // Sort by date (newest first)
    uniqueArticles.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    // Return in same format as previous API for easy frontend compatibility
    return res.status(200).json({
      totalArticles: uniqueArticles.length,
      articles: uniqueArticles.slice(0, 30) // Limit to 30 most recent
    });

  } catch (error) {
    console.error('❌ Error in RSS aggregation:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch RSS feeds',
      message: error.message 
    });
  }
}
