import Image from 'next/image';
import { Track as SpotifyTrack } from '@/types';

interface Props {
  track: SpotifyTrack;
  rank?: number;
}

export function Track({ track, rank }: Props) {
  const artistNames = track.artists.map(({ name }) => name).join(', ');
  const image = track.album.images[1] || track.album.images[0]; // Use larger image

  return (
    <div className="flex flex-row items-center gap-6 p-6 hover:bg-muted/50 transition-colors">
      {rank && (
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <span className="text-base font-semibold text-primary">{rank}</span>
        </div>
      )}

      <div className="flex-shrink-0">
        <Image
          alt={track.album.name}
          height={image.height}
          src={image.url}
          width={image.width}
          className="rounded-lg w-16 h-16 object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold truncate hover:text-primary transition-colors">
            {track.name}
          </span>
          <span className="text-sm text-muted-foreground truncate">
            {artistNames}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="truncate">{track.album.name}</span>
        </div>
      </div>
    </div>
  );
}
