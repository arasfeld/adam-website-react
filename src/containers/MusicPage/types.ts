export interface Artist {
  key: string;
  name: string;
  image: string;
}

export interface Album {
  key: string;
  artist: string;
  name: string;
  image: string;
}

export interface Track {
  key: string;
  album: string;
  artist: string;
  name: string;
  date: Date;
  image: string;
}

export interface MusicState {
  loading: boolean;
  error?: string;
  albums?: Album[];
  artists?: Artist[];
  tracks?: Track[];
}

export interface MusicPageProps {
  loading: boolean;
  error?: string;
  albums?: Album[];
  artists?: Artist[];
  tracks?: Track[];
}

export const LOAD_MUSIC = 'app/Music/LOAD_MUSIC';
export type LOAD_MUSIC = typeof LOAD_MUSIC;
export interface LoadMusic {
  type: LOAD_MUSIC;
}

export const LOAD_MUSIC_SUCCESS = 'app/Music/LOAD_MUSIC_SUCCESS';
export type LOAD_MUSIC_SUCCESS = typeof LOAD_MUSIC_SUCCESS;
export interface LoadMusicSuccess {
  type: LOAD_MUSIC_SUCCESS;
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
}

export const LOAD_MUSIC_ERROR = 'app/Music/LOAD_MUSIC_ERROR';
export type LOAD_MUSIC_ERROR = typeof LOAD_MUSIC_ERROR;
export interface LoadMusicError {
  type: LOAD_MUSIC_ERROR;
  error: string;
}

export type MusicAction = LoadMusic | LoadMusicSuccess | LoadMusicError;
