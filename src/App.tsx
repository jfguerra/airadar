import { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Radar, TrendingUp, Wand2, Layers, Zap } from 'lucide-react';

// Types
type CategoryType = 'design-tools' | 'prototyping' | 'workflow-automation' | 'industry-trends';

interface AIUpdate {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  category: CategoryType;
  date: Date;
  isRead: boolean;
}

const CATEGORIES = [
  { id: 'design-tools' as CategoryType, label: 'AI Design Tools', color: 'bg-blue-100 text-blue-800', keywords: ['AI design', 'Figma', 'plugin', 'image generation'], icon: 'Wand2' },
  { id: 'prototyping' as CategoryType, label: 'Prototyping AI', color: 'bg-purple-100 text-purple-800', keywords: ['prototyping', 'interaction', 'wireframe'], icon: 'Layers' },
  { id: 'workflow-automation' as CategoryType, label: 'Workflow Automation', color: 'bg-green-100 text-green-800', keywords: ['workflow', 'automation', 'productivity'], icon: 'Zap' },
  { id: 'industry-trends' as CategoryType, label: 'Industry Trends', color: 'bg-orange-100 text-orange-800', keywords: ['UX', 'accessibility', 'trends'], icon: 'TrendingUp' }
];

// Category Section Component
function CategorySection({ cat, items, icons, formatDate }: any) {
  const [collapsed, setCollapsed] = useState(false);
  const Icon = icons[cat.icon as keyof typeof icons];
  
  return (
    <div className="mb-6">
      <button onClick={() => setCollapsed(!collapsed)} className="flex items-center gap-3 w-full text-left mb-4">
        <div className={`p-2 rounded-lg ${cat.color}`}><Icon className="w-5 h-5" /></div>
        <h2 className="text-lg font-semibold flex-1">{cat.label}</h2>
        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{items.length}</span>
        <span className={collapsed ? '' : 'rotate-180'}>▼</span>
      </button>
      {!collapsed && (
        <div className="space-y-3 pl-12">
          {items.map((u: AIUpdate) => <UpdateCard key={u.id} update={u} category={cat} formatDate={formatDate} />)}
        </div>
      )}
    </div>
  );
}

// Update Card Component
function UpdateCard({ update, category, formatDate }: any) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div onClick={() => setExpanded(!expanded)} className={`bg-white border rounded-lg p-4 cursor-pointer hover:shadow-md ${!update.isRead ? 'border-l-4 border-l-blue-500' : ''}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs px-2 py-1 rounded-full ${category.color}`}>{category.label}</span>
        <span className="text-xs text-gray-500">{formatDate(update.date)}</span>
        {!update.isRead && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{update.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{update.summary}</p>
      {expanded && (
        <div className="mt-3 pt-3 border-t flex items-center justify-between">
          <span className="text-xs text-gray-500">Source: {update.source}</span>
          <a href={update.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800" onClick={e => e.stopPropagation()}>Read more →</a>
        </div>
      )}
    </div>
  );
}

// Categories Component
function Categories({ grouped, categories, icons, formatDate }: any) {
  return (
    <>
      {categories.map((cat: any) => {
        const items = grouped[cat.id];
        if (!items || items.length === 0) return null;
        return <CategorySection key={cat.id} cat={cat} items={items} icons={icons} formatDate={formatDate} />;
      })}
    </>
  );
}

// Mock data generator
const generateMock = (): AIUpdate[] => [
  { id: `${Date.now()}-1`, title: 'Figma AI Layout', summary: 'New AI features help designers create layouts 10x faster.', source: 'Figma', url: '#', category: 'design-tools', date: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000), isRead: false },
  { id: `${Date.now()}-2`, title: 'Adobe Firefly', summary: 'Generate custom backgrounds using text prompts in Photoshop.', source: 'Adobe', url: '#', category: 'design-tools', date: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000), isRead: false },
  { id: `${Date.now()}-3`, title: 'Sketch to Prototype AI', summary: 'Transform hand-drawn wireframes into interactive prototypes.', source: 'Product Hunt', url: '#', category: 'prototyping', date: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000), isRead: false },
  { id: `${Date.now()}-4`, title: 'Design System Generator', summary: 'AI-powered component analysis creates consistent design systems.', source: 'UX Collective', url: '#', category: 'workflow-automation', date: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000), isRead: false },
  { id: `${Date.now()}-5`, title: 'AI in UX Research', summary: '67% of designers use AI for user interview analysis.', source: 'Nielsen Norman', url: '#', category: 'industry-trends', date: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000), isRead: false }
];

// Service functions
const STORAGE_KEY = 'ai-radar';
const fetchUpdates = async (): Promise<AIUpdate[]> => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  if (!apiKey) return generateMock();
  
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=AI+design&from=${new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
    const data = await res.json();
    if (!data.articles) return generateMock();
    
    return data.articles.slice(0, 10).map((a: any, i: number) => ({
      id: `api-${Date.now()}-${i}`,
      title: a.title,
      summary: (a.description || '').substring(0, 150),
      source: a.source.name,
      url: a.url,
      category: CATEGORIES[0].id,
      date: new Date(a.publishedAt),
      isRead: false
    }));
  } catch {
    return generateMock();
  }
};

const loadData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { updates: [], lastFetched: null, nextFetch: null };
    const data = JSON.parse(stored);
    return {
      updates: data.updates.map((u: any) => ({ ...u, date: new Date(u.date) })),
      lastFetched: data.lastFetched ? new Date(data.lastFetched) : null,
      nextFetch: data.nextFetch ? new Date(data.nextFetch) : null
    };
  } catch {
    return { updates: [], lastFetched: null, nextFetch: null };
  }
};

const saveData = (updates: AIUpdate[], lastFetched: Date, nextFetch: Date) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ updates, lastFetched, nextFetch }));
};

// Main Component
export default function App() {
  const [updates, setUpdates] = useState<AIUpdate[]>([]);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const [nextFetch, setNextFetch] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setFetching(true);
    setError(null);
    try {
      const newUpdates = await fetchUpdates();
      const now = new Date();
      const next = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
      setUpdates(newUpdates);
      setLastFetched(now);
      setNextFetch(next);
      saveData(newUpdates, now, next);
    } catch (err) {
      setError('Failed to fetch updates');
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    const data = loadData();
    setUpdates(data.updates);
    setLastFetched(data.lastFetched);
    setNextFetch(data.nextFetch);
    if (!data.lastFetched || (data.nextFetch && new Date() >= data.nextFetch)) {
      refresh();
    }
    setLoading(false);
  }, [refresh]);

  const formatDate = (date: Date) => {
    const diff = Date.now() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatTime = (ms: number | null) => {
    if (!ms || ms <= 0) return 'Soon';
    const hours = Math.floor(ms / (1000 * 60 * 60));
    if (hours >= 24) return `${Math.floor(hours / 24)}d ${hours % 24}h`;
    return `${hours}h`;
  };

  const grouped = CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = updates.filter(u => u.category === cat.id);
    return acc;
  }, {} as Record<CategoryType, AIUpdate[]>);

  const icons = { Wand2, Layers, Zap, TrendingUp };
  const unread = updates.filter(u => !u.isRead).length;

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Radar className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Radar</h1>
            <p className="text-gray-600">Curated AI updates for Product Designers</p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{updates.length} Updates</div>
              {unread > 0 && <div className="text-sm text-blue-600">{unread} unread</div>}
              {lastFetched && <div className="text-xs text-gray-500 mt-2">Last: {formatDate(lastFetched)}</div>}
              {nextFetch && <div className="text-xs text-gray-500">Next: {formatTime(nextFetch.getTime() - Date.now())}</div>}
            </div>
            <button onClick={refresh} disabled={fetching} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${fetching ? 'animate-spin' : ''}`} />
              {fetching ? 'Fetching...' : 'Refresh'}
            </button>
          </div>
          {error && <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        </div>

        {/* Updates */}
        {updates.length === 0 ? (
          <div className="bg-white border rounded-lg p-12 text-center">
            <Radar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No updates yet</h3>
            <p className="text-gray-600">Click "Refresh" to fetch the latest updates</p>
          </div>
        ) : (
          <Categories grouped={grouped} categories={CATEGORIES} icons={icons} formatDate={formatDate} />
        )}
      </div>
    </div>
  );
}
