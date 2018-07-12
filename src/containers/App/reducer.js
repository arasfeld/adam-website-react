/*
 * AppReducer
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

import { CLOSE_SIDENAV, OPEN_SIDENAV, TOGGLE_SIDENAV } from './constants';

export const initialState = fromJS({
  mobileSideNav: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_SIDENAV:
      return state.set('mobileSideNav', false);
    case OPEN_SIDENAV:
      return state.set('mobileSideNav', true);
    case TOGGLE_SIDENAV:
      return state.set('mobileSideNav', !state.mobileSideNav);
    default:
      return state;
  }
}

export default appReducer;
