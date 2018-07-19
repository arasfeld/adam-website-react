/*
 * Contact Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */

import { fromJS } from 'immutable';

import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_TEXT,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  email: {
    value: '',
    error: null,
  },
  name: {
    value: '',
    error: null,
  },
  text: {
    value: '',
    error: null,
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
      return state.set('email', action.email);
    case CHANGE_NAME:
      return state.set('name', action.name);
    case CHANGE_TEXT:
      return state.set('text', action.text);
    default:
      return state;
  }
}

export default contactReducer;
