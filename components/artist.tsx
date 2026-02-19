import Image from 'next/image';
import { Artist as SpotifyArtist } from '@/types';

interface Props {
  artist: SpotifyArtist;
  rank?: number;
}

export function Artist({ artist, rank }: Props) {
  const image = artist.images[1] || artist.images[0]; // Use larger image

  return (
    <div className="flex flex-row items-center gap-4 p-4 hover:bg-muted/50 transition-colors w-full max-w-full overflow-hidden">
      {rank && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold text-primary tabular-nums">
            {rank}
          </span>
        </div>
      )}

      <div className="flex-shrink-0">
        <Image
          alt={`Photo of ${artist.name}`}
          height={image.height}
          src={image.url}
          width={image.width}
          className="rounded-full w-12 h-12 object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 min-w-0 flex-1 overflow-hidden">
        <span className="text-sm font-semibold truncate hover:text-primary transition-colors">
          {artist.name}
        </span>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className="truncate">
            {artist.genres.slice(0, 3).join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
}
