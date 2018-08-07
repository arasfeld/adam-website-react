/*
 * Warcraft Reducer
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

import {
  LOAD_CHARACTER,
  LOAD_CHARACTER_SUCCESS,
  LOAD_CHARACTER_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  character: false,
});

function warcraftReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('character', false);
    case LOAD_CHARACTER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('character', action.character);
    case LOAD_CHARACTER_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default warcraftReducer;
