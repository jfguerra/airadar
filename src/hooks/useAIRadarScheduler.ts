// AI Radar Scheduler Hook - Automatic 2-day scheduling

import { useState, useEffect, useCallback } from 'react';
import type { AIRadarData } from '../services/aiRadarService';
import {
  loadRadarData,
  shouldFetchUpdates,
  refreshUpdates
} from '../services/aiRadarService';
import { SCHEDULE_CONFIG } from '../types/aiRadar';

export interface UseAIRadarSchedulerResult {
  radarData: AIRadarData;
  isLoading: boolean;
  isFetching: boolean;
  error: string | null;
  manualRefresh: () => Promise<void>;
  timeUntilNextFetch: number | null; // milliseconds
}

export function useAIRadarScheduler(): UseAIRadarSchedulerResult {
  const [radarData, setRadarData] = useState<AIRadarData>(() => loadRadarData());
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeUntilNextFetch, setTimeUntilNextFetch] = useState<number | null>(null);

  // Function to perform the fetch
  const performFetch = useCallback(async () => {
    setIsFetching(true);
    setError(null);
    
    try {
      const newData = await refreshUpdates();
      setRadarData(newData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch updates');
      console.error('Error fetching updates:', err);
    } finally {
      setIsFetching(false);
    }
  }, []);

  // Manual refresh function
  const manualRefresh = useCallback(async () => {
    await performFetch();
  }, [performFetch]);

  // Calculate time until next fetch
  const updateTimeUntilNextFetch = useCallback(() => {
    if (!radarData.schedule.nextFetch) {
      setTimeUntilNextFetch(null);
      return;
    }

    const now = new Date().getTime();
    const next = radarData.schedule.nextFetch.getTime();
    const remaining = next - now;
    
    setTimeUntilNextFetch(remaining > 0 ? remaining : 0);
  }, [radarData.schedule.nextFetch]);

  // Initial load and check if we need to fetch
  useEffect(() => {
    const initialize = async () => {
      setIsLoading(true);
      
      const currentData = loadRadarData();
      setRadarData(currentData);

      // Check if we should fetch updates
      if (shouldFetchUpdates(currentData)) {
        await performFetch();
      }

      setIsLoading(false);
    };

    initialize();
  }, [performFetch]);

  // Set up interval to check if it's time to fetch
  useEffect(() => {
    const checkInterval = setInterval(() => {
      const currentData = loadRadarData();
      
      if (shouldFetchUpdates(currentData)) {
        performFetch();
      }
      
      updateTimeUntilNextFetch();
    }, SCHEDULE_CONFIG.checkIntervalMs);

    // Also update time display more frequently
    const timeDisplayInterval = setInterval(() => {
      updateTimeUntilNextFetch();
    }, 60000); // Update every minute

    return () => {
      clearInterval(checkInterval);
      clearInterval(timeDisplayInterval);
    };
  }, [performFetch, updateTimeUntilNextFetch]);

  // Handle page visibility (pause when tab is not active)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible, check if we need to fetch
        const currentData = loadRadarData();
        if (shouldFetchUpdates(currentData)) {
          performFetch();
        }
        updateTimeUntilNextFetch();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [performFetch, updateTimeUntilNextFetch]);

  return {
    radarData,
    isLoading,
    isFetching,
    error,
    manualRefresh,
    timeUntilNextFetch
  };
}

// Helper function to format time remaining
export function formatTimeRemaining(milliseconds: number | null): string {
  if (milliseconds === null || milliseconds <= 0) {
    return 'Fetching soon...';
  }

  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}
