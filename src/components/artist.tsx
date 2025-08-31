import Image from 'next/image';
import { Artist as SpotifyArtist } from '@/types';

interface Props {
  artist: SpotifyArtist;
  rank?: number;
}

export function Artist({ artist, rank }: Props) {
  const image = artist.images[2];

  return (
    <div className="flex flex-row items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      {rank && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-primary">{rank}</span>
        </div>
      )}

      <div className="flex-shrink-0">
        <Image
          alt={artist.name}
          height={image.height}
          src={image.url}
          width={image.width}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="text-sm font-medium truncate hover:text-primary transition-colors">
          {artist.name}
        </span>
        <span className="text-xs text-muted-foreground truncate">
          {artist.genres.slice(0, 3).join(', ')}
        </span>
      </div>
    </div>
  );
}
