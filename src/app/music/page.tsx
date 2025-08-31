import { MusicClient } from './music-client';
import {
  topTracks,
  topArtists,
  recentlyPlayed,
  getCurrentUser,
  getCurrentlyPlaying,
} from '@/lib/spotify';
import { TimeRange, Track, Artist } from '@/types';

export default async function Music() {
  let longTermTracks: Track[] = [];
  let shortTermTracks: Track[] = [];
  let longTermArtists: Artist[] = [];
  let shortTermArtists: Artist[] = [];
  let recentTracks: Track[] = [];
  let userProfile: any = null;
  let currentlyPlaying: any = null;

  try {
    [
      longTermTracks,
      shortTermTracks,
      longTermArtists,
      shortTermArtists,
      recentTracks,
      userProfile,
      currentlyPlaying,
    ] = await Promise.all([
      topTracks({
        limit: 10,
        offset: 0,
        timeRange: TimeRange.LongTerm,
      }),
      topTracks({
        limit: 10,
        offset: 0,
        timeRange: TimeRange.ShortTerm,
      }),
      topArtists({
        limit: 10,
        offset: 0,
        timeRange: TimeRange.LongTerm,
      }),
      topArtists({
        limit: 10,
        offset: 0,
        timeRange: TimeRange.ShortTerm,
      }),
      recentlyPlayed(10),
      getCurrentUser(),
      getCurrentlyPlaying(),
    ]);
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    // Continue with empty data arrays
  }

  return (
    <MusicClient
      longTermTracks={longTermTracks}
      shortTermTracks={shortTermTracks}
      longTermArtists={longTermArtists}
      shortTermArtists={shortTermArtists}
      recentTracks={recentTracks}
      userProfile={userProfile}
      currentlyPlaying={currentlyPlaying}
    />
  );
}
