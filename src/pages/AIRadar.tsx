import { useState } from 'react';
import { RefreshCw, Radar, TrendingUp, Wand2, Layers, Zap } from 'lucide-react';
import { useAIRadarScheduler, formatTimeRemaining } from '../hooks/useAIRadarScheduler';
import { getUpdatesByCategory, getUnreadCount, markAsRead } from '../services/aiRadarService';
import { CATEGORIES, CategoryType, AIUpdate } from '../types/aiRadar';
import { Card } from '../components/ui/card';

// Category icon mapping
const CategoryIcon = {
  'Wand2': Wand2,
  'Layers': Layers,
  'Zap': Zap,
  'TrendingUp': TrendingUp
};

// Format date in human-friendly format
function formatDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) {
    return 'Just now';
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}

// Update Card Component
function UpdateCard({ update }: { update: AIUpdate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryInfo = CATEGORIES.find(c => c.id === update.category);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (!update.isRead) {
      markAsRead(update.id);
    }
  };

  return (
    <div
      className={`bg-white border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
        !update.isRead ? 'border-l-4 border-l-blue-500' : 'border-gray-200'
      }`}
      onClick={handleClick}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-1 rounded-full border ${categoryInfo?.color || ''}`}>
              {categoryInfo?.label}
            </span>
            <span className="text-xs text-gray-500">{formatDate(update.date)}</span>
            {!update.isRead && (
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            )}
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-1 leading-tight">
            {update.title}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-2">
            {update.summary}
          </p>
          
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Source: {update.source}</span>
                <a
                  href={update.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read more →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Category Section Component
function CategorySection({ categoryId, updates }: { categoryId: CategoryType; updates: AIUpdate[] }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const categoryInfo = CATEGORIES.find(c => c.id === categoryId);
  
  if (!categoryInfo || updates.length === 0) return null;

  const Icon = CategoryIcon[categoryInfo.icon as keyof typeof CategoryIcon];

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center gap-3 w-full text-left mb-4 group"
      >
        <div className={`p-2 rounded-lg ${categoryInfo.color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 flex-1">
          {categoryInfo.label}
        </h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {updates.length}
        </span>
        <span className={`transform transition-transform ${isCollapsed ? '' : 'rotate-180'}`}>
          ▼
        </span>
      </button>

      {!isCollapsed && (
        <div className="space-y-3 pl-12">
          {updates.map(update => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AIRadar() {
  const { radarData, isLoading, isFetching, error, manualRefresh, timeUntilNextFetch } = useAIRadarScheduler();
  
  const updatesByCategory = getUpdatesByCategory(radarData.updates);
  const unreadCount = getUnreadCount(radarData.updates);
  const totalUpdates = radarData.updates.length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-3" />
          <p className="text-gray-600">Loading AI Radar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Radar className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Radar</h1>
            <p className="text-gray-600">Curated AI updates for Product Designers</p>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {totalUpdates} {totalUpdates === 1 ? 'Update' : 'Updates'}
            </div>
            {unreadCount > 0 && (
              <div className="text-sm text-blue-600 font-medium">
                {unreadCount} unread
              </div>
            )}
            {radarData.lastFetched && (
              <div className="text-xs text-gray-500 mt-2">
                Last updated: {formatDate(radarData.lastFetched)}
              </div>
            )}
            {timeUntilNextFetch !== null && timeUntilNextFetch > 0 && (
              <div className="text-xs text-gray-500">
                Next update in: {formatTimeRemaining(timeUntilNextFetch)}
              </div>
            )}
          </div>

          <button
            onClick={manualRefresh}
            disabled={isFetching}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
            {isFetching ? 'Fetching...' : 'Refresh Now'}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {error}
          </div>
        )}
      </Card>

      {/* Updates by Category */}
      {totalUpdates === 0 ? (
        <Card className="p-12 text-center">
          <Radar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No updates yet</h3>
          <p className="text-gray-600 mb-4">
            Click "Refresh Now" to fetch the latest AI updates for designers
          </p>
        </Card>
      ) : (
        <div>
          {CATEGORIES.map(category => (
            <CategorySection
              key={category.id}
              categoryId={category.id}
              updates={updatesByCategory[category.id]}
            />
          ))}
        </div>
      )}

      {/* Info Footer */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p>
          <strong>About AI Radar:</strong> We curate AI updates from trusted sources including Figma, 
          Adobe, UX Collective, and industry leaders. Updates are automatically fetched every 2 days 
          to keep you informed on the latest AI tools and trends for product design.
        </p>
      </div>
    </div>
  );
}
