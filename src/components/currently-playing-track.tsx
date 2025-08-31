import Image from 'next/image';
import { Track as SpotifyTrack } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AudioWaveform } from './audio-waveform';

interface CurrentlyPlayingResponse {
  item: SpotifyTrack;
  progress_ms?: number;
  is_playing?: boolean;
  device?: {
    name: string;
    type: string;
  };
}

interface Props {
  currentlyPlaying: CurrentlyPlayingResponse;
}

// Format duration from milliseconds to MM:SS
function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function CurrentlyPlayingTrack({ currentlyPlaying }: Props) {
  const { item: track, progress_ms, is_playing, device } = currentlyPlaying;
  const artistNames = track.artists.map(({ name }) => name).join(', ');
  const image = track.album.images[0]; // Use the largest image

  // Calculate progress percentage
  const progressPercentage =
    progress_ms && track.duration_ms
      ? (progress_ms / track.duration_ms) * 100
      : 0;

  return (
    <Card className="max-w-2xl mx-auto transition-all duration-300">
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Album Art with Animation */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              alt={track.album.name}
              height={image.height}
              src={image.url}
              width={image.width}
              className="rounded-2xl w-40 h-40 sm:w-48 sm:h-48 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105 relative z-10"
            />
            {/* Playing indicator overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                <AudioWaveform color="bg-white" isPlaying={is_playing} />
              </div>
            </div>
          </div>

          {/* Track Info */}
          <div className="flex flex-col gap-4 min-w-0 flex-1 text-center sm:text-left">
            {/* Title and Artists */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold truncate hover:text-primary transition-colors">
                {track.name}
              </h3>
              <p className="text-lg text-muted-foreground truncate">
                {artistNames}
              </p>
            </div>

            {/* Album and Additional Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground flex-wrap">
                <span className="truncate font-medium">{track.album.name}</span>
                {track.explicit && (
                  <span className="bg-muted px-2 py-1 rounded text-xs font-medium">
                    E
                  </span>
                )}
                {track.genres && track.genres.length > 0 && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {track.genres[0]}
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              {progress_ms !== undefined && track.duration_ms && (
                <div className="space-y-2">
                  <Progress value={progressPercentage} className="h-1.5" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{formatDuration(progress_ms)}</span>
                    <span>{formatDuration(track.duration_ms)}</span>
                  </div>
                </div>
              )}

              {/* Metadata Row */}
              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-muted-foreground flex-wrap">
                {track.duration_ms && !progress_ms && (
                  <span>Duration: {formatDuration(track.duration_ms)}</span>
                )}
                {track.release_date && (
                  <span>
                    Released: {new Date(track.release_date).getFullYear()}
                  </span>
                )}
                {device && <span>Playing on {device.name}</span>}
              </div>

              {/* Currently Playing Indicator */}
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-primary font-medium">
                <AudioWaveform isPlaying={is_playing} />
                <span>{is_playing ? 'Now Playing' : 'Paused'}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
