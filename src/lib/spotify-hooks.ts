import useSWR from 'swr';
import { TimeRange } from '@/types';

// Simple fetcher function that calls our API routes
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

// Custom hooks for Spotify data
export function useTopTracks(
  limit = 20,
  offset = 0,
  timeRange = TimeRange.ShortTerm
) {
  const { data, error, isLoading } = useSWR(
    `/api/spotify/top?type=tracks&limit=${limit}&offset=${offset}&timeRange=${timeRange}`,
    fetcher
  );

  return {
    tracks: data,
    isLoading,
    isError: error,
  };
}

export function useTopArtists(
  limit = 20,
  offset = 0,
  timeRange = TimeRange.ShortTerm
) {
  const { data, error, isLoading } = useSWR(
    `/api/spotify/top?type=artists&limit=${limit}&offset=${offset}&timeRange=${timeRange}`,
    fetcher
  );

  return {
    artists: data,
    isLoading,
    isError: error,
  };
}

export function useRecentlyPlayed(limit = 20) {
  const { data, error, isLoading } = useSWR(
    `/api/spotify/recently-played?limit=${limit}`,
    fetcher
  );

  return {
    tracks: data,
    isLoading,
    isError: error,
  };
}

export function useCurrentlyPlaying() {
  const { data, error, isLoading } = useSWR(
    '/api/spotify/currently-playing',
    fetcher,
    { refreshInterval: 30000 } // Refresh every 30 seconds
  );

  return {
    playing: data,
    isLoading,
    isError: error,
  };
}
