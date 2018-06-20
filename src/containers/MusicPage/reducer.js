/*
 * Music Reducer
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
  LOAD_MUSIC,
  LOAD_MUSIC_SUCCESS,
  LOAD_MUSIC_ERROR,
} from './constants';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_MUSIC:
      return true;
    case LOAD_MUSIC_SUCCESS:
      return false;
    case LOAD_MUSIC_ERROR:
      return false;
    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case LOAD_MUSIC:
      return false;
    case LOAD_MUSIC_SUCCESS:
      return false;
    case LOAD_MUSIC_ERROR:
      return action.error;
    default:
      return state;
  }
}

function albums(state = false, action) {
  switch (action.type) {
    case LOAD_MUSIC:
      return false;
    case LOAD_MUSIC_SUCCESS:
      return action.albums;
    default:
      return state;
  }
}

function artists(state = false, action) {
  switch (action.type) {
    case LOAD_MUSIC:
      return false;
    case LOAD_MUSIC_SUCCESS:
      return action.artists;
    default:
      return state;
  }
}

function tracks(state = false, action) {
  switch (action.type) {
    case LOAD_MUSIC:
      return false;
    case LOAD_MUSIC_SUCCESS:
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
  tracks,
});
