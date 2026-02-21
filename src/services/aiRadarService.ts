// AI Radar Service - News Fetching and Processing

import type {
  AIUpdate,
  AIRadarData,
  CategoryType
} from '../types/aiRadar';

import {
  categorizeUpdate,
  STORAGE_KEY,
  SCHEDULE_CONFIG,
  NEWS_SOURCES
} from '../types/aiRadar';

export type { AIRadarData };

// Mock news data generator (simulates API responses)
// In production, replace with actual API calls
function generateMockUpdates(): AIUpdate[] {
  const mockNews = [
    {
      title: 'Figma announces AI-powered Auto Layout enhancements',
      summary: 'New AI features help designers create responsive layouts 10x faster with intelligent spacing suggestions.',
      source: 'Figma Blog',
      url: 'https://figma.com/blog/ai-auto-layout',
      category: 'design-tools' as CategoryType,
    },
    {
      title: 'Adobe Firefly integrates with Photoshop for instant background generation',
      summary: 'Designers can now generate custom backgrounds using text prompts directly in Photoshop.',
      source: 'Adobe Blog',
      url: 'https://blog.adobe.com/firefly-photoshop',
      category: 'design-tools' as CategoryType,
    },
    {
      title: 'New AI tool converts sketches to high-fidelity prototypes',
      summary: 'PrototypeAI transforms hand-drawn wireframes into interactive prototypes with working components.',
      source: 'Product Hunt',
      url: 'https://producthunt.com/prototype-ai',
      category: 'prototyping' as CategoryType,
    },
    {
      title: 'Galileo AI launches design system generator',
      summary: 'Automatically create consistent design systems from your existing designs with AI-powered component analysis.',
      source: 'UX Collective',
      url: 'https://uxdesign.cc/galileo-ai',
      category: 'workflow-automation' as CategoryType,
    },
    {
      title: 'Study: How AI is changing UX research workflows',
      summary: 'Research shows 67% of designers now use AI for user interview analysis and insight generation.',
      source: 'Nielsen Norman Group',
      url: 'https://nngroup.com/ai-ux-research',
      category: 'industry-trends' as CategoryType,
    },
    {
      title: 'Accessibility AI: Automated WCAG compliance checking',
      summary: 'New tools scan designs for accessibility issues and suggest fixes before development begins.',
      source: 'UX Collective',
      url: 'https://uxdesign.cc/accessibility-ai',
      category: 'industry-trends' as CategoryType,
    },
    {
      title: 'Midjourney v6 adds precise design mockup generation',
      summary: 'Updated model can generate UI mockups with better typography and layout control for designers.',
      source: 'Midjourney',
      url: 'https://midjourney.com/updates',
      category: 'design-tools' as CategoryType,
    },
    {
      title: 'Framer introduces AI website builder with smart components',
      summary: 'Describe your website in plain text and Framer AI generates responsive designs with interactive components.',
      source: 'Framer',
      url: 'https://framer.com/ai',
      category: 'prototyping' as CategoryType,
    },
    {
      title: 'ChatGPT plugin automates design handoff documentation',
      summary: 'Generate comprehensive design specs and developer notes automatically from Figma files.',
      source: 'Product Hunt',
      url: 'https://producthunt.com/chatgpt-figma',
      category: 'workflow-automation' as CategoryType,
    },
    {
      title: 'Design trend report: AI-first design processes gaining traction',
      summary: 'Survey reveals 78% of product teams now incorporate AI tools in their design workflow.',
      source: 'UX Collective',
      url: 'https://uxdesign.cc/ai-first-design',
      category: 'industry-trends' as CategoryType,
    }
  ];

  // Add random selection of 5-8 items with timestamps
  const count = Math.floor(Math.random() * 4) + 5;
  const selected = mockNews.sort(() => Math.random() - 0.5).slice(0, count);
  
  return selected.map((item, index) => ({
    ...item,
    id: `update-${Date.now()}-${index}`,
    date: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000), // Within last 2 days
    isRead: false
  }));
}

// Fetch news from NewsAPI (requires API key)
async function fetchFromNewsAPI(): Promise<AIUpdate[]> {
  // Get API key from environment variable (Vite uses import.meta.env)
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  
  if (!API_KEY || API_KEY === 'demo') {
    console.log('📰 No NewsAPI key found. Using mock data. Add VITE_NEWS_API_KEY to .env for real news.');
    // Return mock data if no API key
    return generateMockUpdates().filter(u => u.source !== 'Figma Blog');
  }

  try {
    const keywords = NEWS_SOURCES.newsAPI.keywords.join(' OR ');
    const fromDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    const url = `${NEWS_SOURCES.newsAPI.baseUrl}?q=${encodeURIComponent(keywords)}&from=${fromDate}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
    
    console.log('📰 Fetching from NewsAPI...');
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`NewsAPI error: ${errorData.message || response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(`NewsAPI error: ${data.message}`);
    }
    
    console.log(`✅ Fetched ${data.articles?.length || 0} articles from NewsAPI`);
    
    if (!data.articles || data.articles.length === 0) {
      console.log('⚠️ No articles found, using mock data');
      return generateMockUpdates().filter(u => u.source !== 'Figma Blog');
    }
    
    // Filter and process articles
    const relevantArticles = data.articles
      .filter((article: any) => 
        article.title && 
        article.description && 
        !article.title.includes('[Removed]')
      )
      .slice(0, 10);
    
    return relevantArticles.map((article: any, index: number) => {
      const category = categorizeUpdate(article.title, article.description || '');
      return {
        id: `newsapi-${Date.now()}-${index}`,
        title: article.title,
        summary: article.description.length > 150 
          ? article.description.substring(0, 147) + '...' 
          : article.description,
        source: article.source.name,
        url: article.url,
        category,
        date: new Date(article.publishedAt),
        isRead: false
      };
    });
  } catch (error) {
    console.error('❌ NewsAPI fetch error:', error);
    console.log('Falling back to mock data');
    return generateMockUpdates().filter(u => u.source !== 'Figma Blog');
  }
}

// Fetch from RSS feeds (simplified - would need RSS parser in production)
async function fetchFromRSS(): Promise<AIUpdate[]> {
  // In production, use RSS parser library or backend proxy
  // For now, return mock data filtered by RSS sources
  return generateMockUpdates().filter(u => 
    ['Figma Blog', 'Adobe Blog', 'UX Collective'].includes(u.source)
  );
}

// Main fetch function that aggregates from all sources
export async function fetchAIUpdates(): Promise<AIUpdate[]> {
  try {
    console.log('🔄 Starting AI Radar update fetch...');
    
    // Fetch from all sources in parallel
    const [newsAPIUpdates, rssUpdates] = await Promise.all([
      fetchFromNewsAPI(),
      fetchFromRSS()
    ]);

    console.log(`📊 Fetched ${newsAPIUpdates.length} from NewsAPI, ${rssUpdates.length} from RSS`);

    // Combine and deduplicate
    const allUpdates = [...newsAPIUpdates, ...rssUpdates];
    const uniqueUpdates = allUpdates.filter((update, index, self) =>
      index === self.findIndex(u => u.title === update.title)
    );

    console.log(`✨ Total unique updates: ${uniqueUpdates.length}`);

    // Sort by date (newest first)
    return uniqueUpdates.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error('❌ Error fetching AI updates:', error);
    console.log('📦 Returning mock data as fallback');
    // Return mock data as fallback
    return generateMockUpdates();
  }
}

// LocalStorage management
export function loadRadarData(): AIRadarData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return createDefaultRadarData();
    }

    const data = JSON.parse(stored);
    // Convert date strings back to Date objects
    return {
      lastFetched: data.lastFetched ? new Date(data.lastFetched) : null,
      updates: data.updates.map((u: any) => ({
        ...u,
        date: new Date(u.date)
      })),
      schedule: {
        intervalDays: data.schedule.intervalDays,
        nextFetch: data.schedule.nextFetch ? new Date(data.schedule.nextFetch) : null
      }
    };
  } catch (error) {
    console.error('Error loading radar data:', error);
    return createDefaultRadarData();
  }
}

export function saveRadarData(data: AIRadarData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving radar data:', error);
  }
}

function createDefaultRadarData(): AIRadarData {
  return {
    lastFetched: null,
    updates: [],
    schedule: {
      intervalDays: SCHEDULE_CONFIG.intervalDays,
      nextFetch: null
    }
  };
}

// Check if it's time to fetch new updates
export function shouldFetchUpdates(radarData: AIRadarData): boolean {
  if (!radarData.lastFetched || !radarData.schedule.nextFetch) {
    return true; // First time, always fetch
  }

  const now = new Date();
  return now >= radarData.schedule.nextFetch;
}

// Calculate next fetch time
function calculateNextFetch(intervalDays: number): Date {
  const now = new Date();
  return new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);
}

// Main function to refresh updates
export async function refreshUpdates(): Promise<AIRadarData> {
  const newUpdates = await fetchAIUpdates();
  const now = new Date();
  
  const radarData: AIRadarData = {
    lastFetched: now,
    updates: newUpdates,
    schedule: {
      intervalDays: SCHEDULE_CONFIG.intervalDays,
      nextFetch: calculateNextFetch(SCHEDULE_CONFIG.intervalDays)
    }
  };

  saveRadarData(radarData);
  return radarData;
}

// Mark an update as read
export function markAsRead(updateId: string): void {
  const data = loadRadarData();
  const update = data.updates.find(u => u.id === updateId);
  if (update) {
    update.isRead = true;
    saveRadarData(data);
  }
}

// Get updates by category
export function getUpdatesByCategory(updates: AIUpdate[]): Record<CategoryType, AIUpdate[]> {
  const grouped: Record<CategoryType, AIUpdate[]> = {
    'design-tools': [],
    'prototyping': [],
    'workflow-automation': [],
    'industry-trends': []
  };

  updates.forEach(update => {
    grouped[update.category].push(update);
  });

  return grouped;
}

// Get unread count
export function getUnreadCount(updates: AIUpdate[]): number {
  return updates.filter(u => !u.isRead).length;
}
