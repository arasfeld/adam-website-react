/*
 * App Actions
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

import {
  CLOSE_SIDENAV,
  OPEN_SIDENAV,
  TOGGLE_SIDENAV,
} from './constants';

/**
 * Closes the sidenav on mobile, dispatched after...
 *
 * @return {object}  An action object with a type of CLOSE_SIDENAV
 */
export function closeSideNav() {
  return {
    type: CLOSE_SIDENAV,
  };
}

/**
 * Opens the sidenav on mobile, dispatched after clicking the hamburger icon in the header
 *
 * @return {object}  An action object with a type of OPEN_SIDENAV
 */
export function openSideNav() {
  return {
    type: OPEN_SIDENAV,
  };
}

/**
 * Toggles the sidenav on mobile, dispatched after clicking the hamburger icon in the header
 *
 * @return {object}  An action object with a type of TOGGLE_SIDENAV
 */
export function toggleSideNav() {
  return {
    type: TOGGLE_SIDENAV,
  };
}
