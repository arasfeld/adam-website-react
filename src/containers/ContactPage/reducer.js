/*
 * Contact Reducer
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
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

function loading(state = false, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return true;
    case SEND_MESSAGE_SUCCESS:
      return false;
    case SEND_MESSAGE_ERROR:
      return false;
    default:
      return state;
  }
}

// TODO: fix this to account for albums, artists, and last played track
function error(state = false, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return false;
    case SEND_MESSAGE_SUCCESS:
      return false;
    case SEND_MESSAGE_ERROR:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  loading,
  error,
});
