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

import { LOAD_MUSIC, LOAD_MUSIC_SUCCESS, LOAD_MUSIC_ERROR } from './constants';

/**
 * Load the music data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MUSIC
 */
export function loadMusic() {
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
export function musicLoaded(albums, artists, tracks) {
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
export function musicLoadingError(error) {
  return {
    type: LOAD_MUSIC_ERROR,
    error,
  };
}
