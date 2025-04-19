import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Track } from '@/components/track';
import { topTracks } from '@/lib/spotify';
import { TimeRange } from '@/types';

export default async function Music() {
  const [longTermTracks, shortTermTracks] = await Promise.all([
    topTracks({
      limit: 5,
      offset: 0,
      timeRange: TimeRange.LongTerm,
    }),
    topTracks({
      limit: 5,
      offset: 0,
      timeRange: TimeRange.ShortTerm,
    }),
  ]);

  return (
    <div className="flex flex-col p-8 pb-20 gap-8 sm:p-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Music
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Top Tracks</CardTitle>
          <CardDescription>Last 4 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          {shortTermTracks?.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Tracks</CardTitle>
          <CardDescription>Last year</CardDescription>
        </CardHeader>
        <CardContent>
          {longTermTracks?.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
