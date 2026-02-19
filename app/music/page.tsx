'use client';

import { useMemo, useState } from 'react';
import { Heart, Volume2 } from 'lucide-react';

import { Artist } from '@/components/artist';
import { MusicPageSkeleton } from '@/components/spotify-skeletons';
import { Track } from '@/components/track';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import {
  useCurrentlyPlaying,
  useRecentlyPlayed,
  useTopArtists,
  useTopTracks,
} from '@/lib/spotify-hooks';
import {
  Artist as SpotifyArtist,
  TimeRange,
  Track as SpotifyTrack,
} from '@/types';

export default function Music() {
  // SWR hooks for data fetching
  const { tracks: shortTermTracks, isLoading: shortTermTracksLoading } =
    useTopTracks(10, 0, TimeRange.ShortTerm);
  const { tracks: mediumTermTracks, isLoading: mediumTermTracksLoading } =
    useTopTracks(10, 0, TimeRange.MediumTerm);
  const { tracks: longTermTracks, isLoading: longTermTracksLoading } =
    useTopTracks(10, 0, TimeRange.LongTerm);
  const { artists: shortTermArtists, isLoading: shortTermArtistsLoading } =
    useTopArtists(10, 0, TimeRange.ShortTerm);
  const { artists: mediumTermArtists, isLoading: mediumTermArtistsLoading } =
    useTopArtists(10, 0, TimeRange.MediumTerm);
  const { artists: longTermArtists, isLoading: longTermArtistsLoading } =
    useTopArtists(10, 0, TimeRange.LongTerm);
  const { tracks: recentTracks, isLoading: recentTracksLoading } =
    useRecentlyPlayed(10);
  const { playing: currentlyPlaying, isLoading: currentlyPlayingLoading } =
    useCurrentlyPlaying();

  // State for tab management
  const [tracksTimeRange, setTracksTimeRange] = useState<
    'short' | 'medium' | 'long'
  >('long');
  const [artistsTimeRange, setArtistsTimeRange] = useState<
    'short' | 'medium' | 'long'
  >('long');

  // Check if any data is still loading
  const isLoading = useMemo(
    () =>
      shortTermTracksLoading ||
      mediumTermTracksLoading ||
      longTermTracksLoading ||
      shortTermArtistsLoading ||
      mediumTermArtistsLoading ||
      longTermArtistsLoading ||
      recentTracksLoading ||
      currentlyPlayingLoading,
    [
      currentlyPlayingLoading,
      longTermArtistsLoading,
      longTermTracksLoading,
      mediumTermArtistsLoading,
      mediumTermTracksLoading,
      recentTracksLoading,
      shortTermArtistsLoading,
      shortTermTracksLoading,
    ]
  );

  if (isLoading) {
    return <MusicPageSkeleton />;
  }

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
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start w-full min-w-0">
          {/* Top Tracks Section */}
          <Card className="h-full flex flex-col w-full min-w-0">
            <CardHeader className="w-full min-w-0">
              <CardTitle className="text-2xl">Top Tracks</CardTitle>
              <Tabs
                value={tracksTimeRange}
                onValueChange={value =>
                  setTracksTimeRange(value as 'short' | 'medium' | 'long')
                }
                className="mt-4 w-full min-w-0"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="short">Short Term</TabsTrigger>
                  <TabsTrigger value="medium">Medium Term</TabsTrigger>
                  <TabsTrigger value="long">Long Term</TabsTrigger>
                </TabsList>
                <TabsContent value="short" className="mt-4 w-full min-w-0">
                  <div className="space-y-3 w-full min-w-0 overflow-hidden">
                    {shortTermTracks?.length > 0 ? (
                      shortTermTracks.map(
                        (track: SpotifyTrack, index: number) => (
                          <Track
                            key={`short-${track.id}`}
                            track={track}
                            rank={index + 1}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8">
                        <TypographyP className="text-muted-foreground">
                          No short-term tracks available
                        </TypographyP>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="medium" className="mt-4 w-full min-w-0">
                  <div className="space-y-3 w-full min-w-0 overflow-hidden">
                    {mediumTermTracks?.length > 0 ? (
                      mediumTermTracks.map(
                        (track: SpotifyTrack, index: number) => (
                          <Track
                            key={`medium-${track.id}`}
                            track={track}
                            rank={index + 1}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8">
                        <TypographyP className="text-muted-foreground">
                          No medium-term tracks available
                        </TypographyP>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="long" className="mt-4 w-full min-w-0">
                  <div className="space-y-3 w-full min-w-0 overflow-hidden">
                    {longTermTracks?.length > 0 ? (
                      longTermTracks.map(
                        (track: SpotifyTrack, index: number) => (
                          <Track
                            key={`long-${track.id}`}
                            track={track}
                            rank={index + 1}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8">
                        <TypographyP className="text-muted-foreground">
                          No long-term tracks available
                        </TypographyP>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>

          {/* Top Artists Section */}
          <Card className="h-full flex flex-col w-full min-w-0">
            <CardHeader className="w-full min-w-0">
              <CardTitle className="text-2xl">Top Artists</CardTitle>
              <Tabs
                value={artistsTimeRange}
                onValueChange={value =>
                  setArtistsTimeRange(value as 'short' | 'medium' | 'long')
                }
                className="mt-4 w-full min-w-0"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="short">Short Term</TabsTrigger>
                  <TabsTrigger value="medium">Medium Term</TabsTrigger>
                  <TabsTrigger value="long">Long Term</TabsTrigger>
                </TabsList>
                <TabsContent value="short" className="mt-4 w-full min-w-0">
                  <div className="space-y-3 w-full min-w-0 overflow-hidden">
                    {shortTermArtists?.length > 0 ? (
                      shortTermArtists.map(
                        (artist: SpotifyArtist, index: number) => (
                          <Artist
                            key={`short-artist-${artist.id}`}
                            artist={artist}
                            rank={index + 1}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8">
                        <TypographyP className="text-muted-foreground">
                          No short-term artists available
                        </TypographyP>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="medium" className="mt-4 w-full min-w-0">
                  <div className="space-y-3 w-full min-w-0 overflow-hidden">
                    {mediumTermArtists?.length > 0 ? (
                      mediumTermArtists.map(
                        (artist: SpotifyArtist, index: number) => (
                          <Artist
                            key={`medium-artist-${artist.id}`}
                            artist={artist}
                            rank={index + 1}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8">
                        <TypographyP className="text-muted-foreground">
                          No medium-term artists available
                        </TypographyP>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="long" className="mt-4 w-full min-w-0">
                  <div className="space-y-3 w-full min-w-0 overflow-hidden">
                    {longTermArtists?.length > 0 ? (
                      longTermArtists.map(
                        (artist: SpotifyArtist, index: number) => (
                          <Artist
                            key={`long-artist-${artist.id}`}
                            artist={artist}
                            rank={index + 1}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8">
                        <TypographyP className="text-muted-foreground">
                          No long-term artists available
                        </TypographyP>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>

        {/* Recently Played Section */}
        <div className="mb-16">
          <Card className="w-full min-w-0">
            <CardHeader className="w-full min-w-0">
              <CardTitle className="text-2xl">Recently Played</CardTitle>
              <TypographyP className="text-muted-foreground">
                Your latest listening history
              </TypographyP>
            </CardHeader>
            <CardContent className="w-full min-w-0">
              <div className="grid md:grid-cols-2 gap-4 w-full min-w-0">
                {recentTracks?.length > 0 ? (
                  recentTracks
                    .slice(0, 8)
                    .map((track: SpotifyTrack, index: number) => (
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
