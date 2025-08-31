'use client';

import { useState } from 'react';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Track } from '@/components/track';
import { Artist } from '@/components/artist';
import { Volume2, Heart } from 'lucide-react';
import { Track as SpotifyTrack, Artist as SpotifyArtist } from '@/types';

interface SpotifyUserProfile {
  display_name: string;
  images?: Array<{ url: string }>;
  followers?: { total: number };
}

interface CurrentlyPlaying {
  item: SpotifyTrack;
}

interface MusicClientProps {
  longTermTracks: SpotifyTrack[];
  shortTermTracks: SpotifyTrack[];
  longTermArtists: SpotifyArtist[];
  shortTermArtists: SpotifyArtist[];
  recentTracks: SpotifyTrack[];
  userProfile: SpotifyUserProfile | null;
  currentlyPlaying: CurrentlyPlaying | null;
}

export function MusicClient({
  longTermTracks,
  shortTermTracks,
  longTermArtists,
  shortTermArtists,
  recentTracks,
  userProfile,
  currentlyPlaying,
}: MusicClientProps) {
  const [tracksTimeRange, setTracksTimeRange] = useState<'short' | 'long'>(
    'short'
  );
  const [artistsTimeRange, setArtistsTimeRange] = useState<'short' | 'long'>(
    'short'
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <TypographyH1 className="text-4xl md:text-5xl font-bold mb-6">
            My Music Taste
          </TypographyH1>
          <TypographyP className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A real-time glimpse into my Spotify listening habits and favorite
            tracks
          </TypographyP>
        </div>

        {/* User Profile Section */}
        {userProfile && (
          <div className="mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-6">
                  {userProfile.images?.[0] && (
                    <img
                      src={userProfile.images[0].url}
                      alt={userProfile.display_name}
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div>
                    <CardTitle className="text-2xl">
                      {userProfile.display_name}
                    </CardTitle>
                    <TypographyP className="text-muted-foreground">
                      Spotify Premium •{' '}
                      {userProfile.followers?.total?.toLocaleString()} followers
                    </TypographyP>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        )}

        {/* Currently Playing Section */}
        {currentlyPlaying?.item && (
          <div className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Currently Playing</CardTitle>
              </CardHeader>
              <CardContent>
                <Track track={currentlyPlaying.item} />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Top Tracks and Artists Section with Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Top Tracks Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Top Tracks</CardTitle>
              {/* Tab Navigation */}
              <div className="flex gap-2 mt-4">
                <button
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    tracksTimeRange === 'short'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setTracksTimeRange('short')}
                >
                  4 Weeks
                </button>
                <button
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    tracksTimeRange === 'long'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setTracksTimeRange('long')}
                >
                  1 Year
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {tracksTimeRange === 'short' ? (
                shortTermTracks?.length > 0 ? (
                  shortTermTracks.map((track, index) => (
                    <Track
                      key={`short-${track.id}`}
                      track={track}
                      rank={index + 1}
                    />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <TypographyP className="text-muted-foreground">
                      No recent tracks available
                    </TypographyP>
                  </div>
                )
              ) : longTermTracks?.length > 0 ? (
                longTermTracks.map((track, index) => (
                  <Track
                    key={`long-${track.id}`}
                    track={track}
                    rank={index + 1}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <TypographyP className="text-muted-foreground">
                    No long-term tracks available
                  </TypographyP>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Top Artists Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Top Artists</CardTitle>
              {/* Tab Navigation */}
              <div className="flex gap-2 mt-4">
                <button
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    artistsTimeRange === 'short'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setArtistsTimeRange('short')}
                >
                  4 Weeks
                </button>
                <button
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    artistsTimeRange === 'long'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setArtistsTimeRange('long')}
                >
                  1 Year
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {artistsTimeRange === 'short' ? (
                shortTermArtists?.length > 0 ? (
                  shortTermArtists.map((artist, index) => (
                    <Artist
                      key={`short-artist-${artist.id}`}
                      artist={artist}
                      rank={index + 1}
                    />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <TypographyP className="text-muted-foreground">
                      No recent artists available
                    </TypographyP>
                  </div>
                )
              ) : longTermArtists?.length > 0 ? (
                longTermArtists.map((artist, index) => (
                  <Artist
                    key={`long-artist-${artist.id}`}
                    artist={artist}
                    rank={index + 1}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <TypographyP className="text-muted-foreground">
                    No long-term artists available
                  </TypographyP>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recently Played Section */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Recently Played</CardTitle>
              <TypographyP className="text-muted-foreground">
                Your latest listening history
              </TypographyP>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {recentTracks?.length > 0 ? (
                  recentTracks
                    .slice(0, 8)
                    .map((track, index) => (
                      <Track
                        key={`recent-${track.id}-${index}`}
                        track={track}
                      />
                    ))
                ) : (
                  <div className="text-center py-8 col-span-2">
                    <TypographyP className="text-muted-foreground">
                      No recently played tracks available
                    </TypographyP>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12">
            <TypographyH2 className="text-3xl font-bold mb-6">
              Connect Through Music
            </TypographyH2>
            <TypographyP className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Music is a universal language. Let&apos;s discuss your favorite
              artists and discover new sounds together.
            </TypographyP>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://open.spotify.com/user/arasfeld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-lg font-medium transition-colors"
              >
                <Heart className="w-5 h-5" />
                Follow on Spotify
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg text-lg font-medium transition-colors"
              >
                <Volume2 className="w-5 h-5" />
                Share Your Music
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
