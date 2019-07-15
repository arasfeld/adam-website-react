import {
  LOAD_MUSIC,
  LOAD_MUSIC_SUCCESS,
  LOAD_MUSIC_ERROR,
  Album,
  Artist,
  Track,
  LoadMusic,
  LoadMusicSuccess,
  LoadMusicError,
} from './types';

/**
 * Load the music data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MUSIC
 */
export function loadMusic(): LoadMusic {
  return {
    type: LOAD_MUSIC,
  };
}

/**
 * Dispatched when the music data is loaded by the request saga
 *
 * @param  {array} albums The album data
 * @param  {array} artists The artist data
 * @param  {array} tracks The track data
 *
 * @return {object}      An action object with a type of LOAD_MUSIC_SUCCESS passing the music data
 */
export function musicLoaded(albums: Album[], artists: Artist[], tracks: Track[]): LoadMusicSuccess {
  return {
    type: LOAD_MUSIC_SUCCESS,
    albums,
    artists,
    tracks,
  };
}

/**
 * Dispatched when loading the music data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MUSIC_ERROR passing the error
 */
export function musicLoadingError(error: any): LoadMusicError {
  return {
    type: LOAD_MUSIC_ERROR,
    error,
  };
}
