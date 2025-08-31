import Image from 'next/image';
import { Artist as SpotifyArtist } from '@/types';

interface Props {
  artist: SpotifyArtist;
  rank?: number;
}

export function Artist({ artist, rank }: Props) {
  const image = artist.images[1] || artist.images[0]; // Use larger image

  return (
    <div className="flex flex-row items-center gap-6 p-6 hover:bg-muted/50 transition-colors">
      {rank && (
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <span className="text-base font-semibold text-primary">{rank}</span>
        </div>
      )}

      <div className="flex-shrink-0">
        <Image
          alt={artist.name}
          height={image.height}
          src={image.url}
          width={image.width}
          className="rounded-full w-18 h-18 object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <span className="text-base font-semibold truncate hover:text-primary transition-colors">
          {artist.name}
        </span>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="truncate">
            {artist.genres.slice(0, 3).join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
}
