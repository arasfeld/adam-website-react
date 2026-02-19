import { Album } from './album';
import { Artist } from './artist';

export interface Track {
  album: Album;
  artists: Artist[];
  id: string;
  name: string;
  duration_ms?: number;
  popularity?: number;
  explicit?: boolean;
  release_date?: string;
  genres?: string[];
}
