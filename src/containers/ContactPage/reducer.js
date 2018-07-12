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

import { fromJS } from 'immutable';

import {
  CHANGE_EMAIL,
  CHANGE_MESSAGE,
  CHANGE_NAME,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  message: {
    email: null,
    message: null,
    name: null,
  },
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.set('loading', true).set('error', false);
    case SEND_MESSAGE_SUCCESS:
      return state.set('loading', false).set('error', false);
    case SEND_MESSAGE_ERROR:
      return state.set('loading', false).set('error', action.error);
    case CHANGE_EMAIL:
      return state.setIn(['message', 'email'], action.email);
    case CHANGE_MESSAGE:
      return state.setIn(['message', 'message'], action.message);
    case CHANGE_NAME:
      return state.setIn(['message', 'name'], action.name);
    default:
      return state;
  }
}

export default contactReducer;
