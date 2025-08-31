import { Image } from './image';

export interface Artist {
  genres: string[];
  id: string;
  images: Image[];
  name: string;
}
