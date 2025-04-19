import Image from 'next/image';

import { Track as SpotifyTrack } from '@/types';

interface Props {
  track: SpotifyTrack;
}

export function Track({ track }: Props) {
  const artistNames = track.artists.map(({ name }) => name).join(', ');
  const image = track.album.images[2];

  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        alt={track.album.name}
        height={image.height}
        src={image.url}
        width={image.width}
      />

      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-none">{track.name}</span>
        <span className="text-sm text-muted-foreground">{artistNames}</span>
      </div>
    </div>
  );
}
