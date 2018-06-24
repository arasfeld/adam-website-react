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

import { combineReducers } from 'redux-immutable';

import {
  LOAD_CHARACTER,
  LOAD_CHARACTER_SUCCESS,
  LOAD_CHARACTER_ERROR,
} from './constants';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_CHARACTER:
      return true;
    case LOAD_CHARACTER_SUCCESS:
      return false;
    case LOAD_CHARACTER_ERROR:
      return false;
    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case LOAD_CHARACTER:
      return false;
    case LOAD_CHARACTER_SUCCESS:
      return false;
    case LOAD_CHARACTER_ERROR:
      return action.error;
    default:
      return state;
  }
}

function character(state = false, action) {
  switch (action.type) {
    case LOAD_CHARACTER:
      return false;
    case LOAD_CHARACTER_SUCCESS:
      return action.character;
    default:
      return state;
  }
}

export default combineReducers({
  loading,
  error,
  character,
});
