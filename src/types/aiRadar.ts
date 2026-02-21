// AI Radar Types and Constants

export type CategoryType = 'design-tools' | 'prototyping' | 'workflow-automation' | 'industry-trends';

export interface AIUpdate {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  category: CategoryType;
  date: Date;
  isRead: boolean;
}

export interface AIRadarData {
  lastFetched: Date | null;
  updates: AIUpdate[];
  schedule: {
    intervalDays: number;
    nextFetch: Date | null;
  };
}

export interface NewsSource {
  name: string;
  enabled: boolean;
  fetchFn: () => Promise<AIUpdate[]>;
}

export interface CategoryInfo {
  id: CategoryType;
  label: string;
  color: string;
  keywords: string[];
  icon: string;
}

// Category definitions with keywords for filtering
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'design-tools',
    label: 'AI Design Tools',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    keywords: ['AI design tool', 'Figma AI', 'design plugin', 'image generation', 'AI graphics', 'design automation'],
    icon: 'Wand2'
  },
  {
    id: 'prototyping',
    label: 'Prototyping AI',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    keywords: ['prototyping', 'interaction design', 'AI prototype', 'wireframe AI', 'mockup generation'],
    icon: 'Layers'
  },
  {
    id: 'workflow-automation',
    label: 'Workflow Automation',
    color: 'bg-green-100 text-green-800 border-green-200',
    keywords: ['design workflow', 'automation', 'productivity', 'AI assistant', 'design system', 'component generation'],
    icon: 'Zap'
  },
  {
    id: 'industry-trends',
    label: 'Industry Trends',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    keywords: ['AI UX', 'user research', 'accessibility', 'inclusive design', 'design trends', 'best practices'],
    icon: 'TrendingUp'
  }
];

// News source configurations
export const NEWS_SOURCES = {
  newsAPI: {
    keywords: ['AI design', 'design tool', 'Figma', 'Adobe AI', 'prototyping', 'UX AI'],
    enabled: true,
    baseUrl: 'https://newsapi.org/v2/everything'
  },
  rssFeeds: [
    {
      name: 'Figma Blog',
      url: 'https://www.figma.com/blog/rss/',
      enabled: true
    },
    {
      name: 'Adobe Blog',
      url: 'https://blog.adobe.com/feed',
      enabled: true
    },
    {
      name: 'UX Collective',
      url: 'https://uxdesign.cc/feed',
      enabled: true
    }
  ]
};

// LocalStorage key
export const STORAGE_KEY = 'ai-radar-data';

// Schedule configuration
export const SCHEDULE_CONFIG = {
  intervalDays: 2,
  checkIntervalMs: 60 * 60 * 1000, // Check every hour
};

// Helper function to determine category based on keywords
export function categorizeUpdate(title: string, summary: string): CategoryType {
  const text = `${title} ${summary}`.toLowerCase();
  
  for (const category of CATEGORIES) {
    const hasKeyword = category.keywords.some(keyword => 
      text.includes(keyword.toLowerCase())
    );
    if (hasKeyword) {
      return category.id;
    }
  }
  
  // Default to industry trends if no specific match
  return 'industry-trends';
}

// Helper to get category info
export function getCategoryInfo(categoryId: CategoryType): CategoryInfo {
  return CATEGORIES.find(cat => cat.id === categoryId) || CATEGORIES[3];
}
