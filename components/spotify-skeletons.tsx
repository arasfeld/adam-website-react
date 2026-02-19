import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Skeleton for a single track item
export function TrackSkeleton({ showRank = false }: { showRank?: boolean }) {
  return (
    <div className="flex items-center gap-6 p-6">
      {showRank && (
        <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
      )}
      <Skeleton className="w-16 h-16 rounded-lg flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-2 mb-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-8" />
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-8" />
        </div>
      </div>
    </div>
  );
}

// Skeleton for a single artist item
export function ArtistSkeleton({ showRank = false }: { showRank?: boolean }) {
  return (
    <div className="flex items-center gap-6 p-6">
      {showRank && (
        <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
      )}
      <Skeleton className="w-16 h-16 rounded-full flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-2 mb-2">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}

// Skeleton for currently playing section
export function CurrentlyPlayingSkeleton() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Skeleton className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl flex-shrink-0" />
          <div className="flex flex-col gap-4 min-w-0 flex-1 text-center sm:text-left">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-8 sm:h-10 w-3/4 mx-auto sm:mx-0" />
              <Skeleton className="h-6 w-1/2 mx-auto sm:mx-0" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-6 w-16 rounded" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-1.5 w-full rounded-full" />
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-8" />
                  <Skeleton className="h-3 w-8" />
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-12" />
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="w-0.5 h-3 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Skeleton for top tracks section
export function TopTracksSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-32 mb-4" />
        <div className="flex gap-2">
          <Skeleton className="w-20 h-10 rounded-lg" />
          <Skeleton className="w-20 h-10 rounded-lg" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <TrackSkeleton key={i} showRank />
        ))}
      </CardContent>
    </Card>
  );
}

// Skeleton for top artists section
export function TopArtistsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-32 mb-4" />
        <div className="flex gap-2">
          <Skeleton className="w-20 h-10 rounded-lg" />
          <Skeleton className="w-20 h-10 rounded-lg" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <ArtistSkeleton key={i} showRank />
        ))}
      </CardContent>
    </Card>
  );
}

// Skeleton for recently played section
export function RecentlyPlayedSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-40 mb-2" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <TrackSkeleton key={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Main skeleton for the entire music page
export function MusicPageSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Currently Playing Section */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <Skeleton className="h-8 w-48 mx-auto" />
          </div>
          <CurrentlyPlayingSkeleton />
        </div>

        {/* Top Tracks and Artists Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <TopTracksSkeleton />
          <TopArtistsSkeleton />
        </div>

        {/* Recently Played Section */}
        <div className="mb-16">
          <RecentlyPlayedSkeleton />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12">
            <Skeleton className="h-10 w-80 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Skeleton className="w-48 h-12 rounded-lg" />
              <Skeleton className="w-48 h-12 rounded-lg" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
