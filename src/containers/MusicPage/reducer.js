/*
 * MusicReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { combineReducers } from 'redux-immutable';

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

// TODO: fix this to account for albums, artists, and last played track
function loading(state = false, action) {
  switch (action.type) {
    case LOAD_ALBUMS:
    case LOAD_ARTISTS:
    case LOAD_RECENT_TRACKS:
      return true;
    case LOAD_ALBUMS_SUCCESS:
    case LOAD_ARTISTS_SUCCESS:
    case LOAD_RECENT_TRACKS_SUCCESS:
      return false;
    case LOAD_ALBUMS_ERROR:
    case LOAD_ARTISTS_ERROR:
    case LOAD_RECENT_TRACKS_ERROR:
      return false;
    default:
      return state;
  }
}

// TODO: fix this to account for albums, artists, and last played track
function error(state = false, action) {
  switch (action.type) {
    case LOAD_ALBUMS:
    case LOAD_ARTISTS:
    case LOAD_RECENT_TRACKS:
      return false;
    case LOAD_ALBUMS_SUCCESS:
    case LOAD_ARTISTS_SUCCESS:
    case LOAD_RECENT_TRACKS_SUCCESS:
      return false;
    case LOAD_ALBUMS_ERROR:
    case LOAD_ARTISTS_ERROR:
    case LOAD_RECENT_TRACKS_ERROR:
      return action.error;
    default:
      return state;
  }
}

function albums(state = false, action) {
  switch (action.type) {
    case LOAD_ALBUMS:
      return false;
    case LOAD_ALBUMS_SUCCESS:
      return action.albums;
    default:
      return state;
  }
}

function artists(state = false, action) {
  switch (action.type) {
    case LOAD_ARTISTS:
      return false;
    case LOAD_ARTISTS_SUCCESS:
      return action.artists;
    default:
      return state;
  }
}

function recentTracks(state = false, action) {
  switch (action.type) {
    case LOAD_RECENT_TRACKS:
      return false;
    case LOAD_RECENT_TRACKS_SUCCESS:
      return action.tracks;
    default:
      return state;
  }
}

export default combineReducers({
  loading,
  error,
  albums,
  artists,
  recentTracks,
});
