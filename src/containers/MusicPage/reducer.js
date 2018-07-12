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

import { fromJS } from 'immutable';

import { LOAD_MUSIC, LOAD_MUSIC_SUCCESS, LOAD_MUSIC_ERROR } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  albums: false,
  artists: false,
  tracks: false,
});

function musicReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MUSIC:
      return state
        .set('loading', true)
        .set('error', false)
        .set('albums', false)
        .set('artists', false)
        .set('tracks', false);
    case LOAD_MUSIC_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('albums', action.albums)
        .set('artists', action.artists)
        .set('tracks', action.tracks);
    case LOAD_MUSIC_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default musicReducer;
