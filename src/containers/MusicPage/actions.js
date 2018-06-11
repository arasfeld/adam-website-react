/*
 * Music Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_ALBUMS,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_ERROR,
  LOAD_ARTISTS,
  LOAD_ARTISTS_SUCCESS,
  LOAD_ARTISTS_ERROR,
  LOAD_RECENT_TRACKS,
  LOAD_RECENT_TRACKS_SUCCESS,
  LOAD_RECENT_TRACKS_ERROR,
} from './constants';

/**
 * Load the albums, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ALBUMS
 */
export function loadAlbums() {
  return {
    type: LOAD_ALBUMS,
  };
}

/**
 * Dispatched when the albums are loaded by the request saga
 *
 * @param  {array} albums The album data
 *
 * @return {object}      An action object with a type of LOAD_ALBUMS_SUCCESS passing the albums
 */
export function albumsLoaded(albums) {
  return {
    type: LOAD_ALBUMS_SUCCESS,
    albums,
  };
}

/**
 * Dispatched when loading the albums fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ALBUMS_ERROR passing the error
 */
export function albumLoadingError(error) {
  return {
    type: LOAD_ALBUMS_ERROR,
    error,
  };
}

/**
 * Load the artists, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ARTISTS
 */
export function loadArtists() {
  return {
    type: LOAD_ARTISTS,
  };
}

/**
 * Dispatched when the artists are loaded by the request saga
 *
 * @param  {array} artists The album data
 *
 * @return {object}      An action object with a type of LOAD_ARTISTS_SUCCESS passing the artists
 */
export function artistsLoaded(artists) {
  return {
    type: LOAD_ARTISTS_SUCCESS,
    artists,
  };
}

/**
 * Dispatched when loading the artists fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ARTISTS_ERROR passing the error
 */
export function artistLoadingError(error) {
  return {
    type: LOAD_ARTISTS_ERROR,
    error,
  };
}

/**
 * Load the last 10 recently played tracks, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_RECENT_TRACKS
 */
export function loadRecentTracks() {
  return {
    type: LOAD_RECENT_TRACKS,
  };
}

/**
 * Dispatched when the tracks are loaded by the request saga
 *
 * @param  {array} tracks The recently played tracks data
 *
 * @return {object}      An action object with a type of LOAD_RECENT_TRACKS_SUCCESS passing the tracks
 */
export function recentTracksLoaded(tracks) {
  return {
    type: LOAD_RECENT_TRACKS_SUCCESS,
    tracks,
  };
}

/**
 * Dispatched when loading the tracks fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_RECENT_TRACKS_ERROR passing the error
 */
export function recentTrackLoadingError(error) {
  return {
    type: LOAD_RECENT_TRACKS_ERROR,
    error,
  };
}
