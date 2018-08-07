/*
 * WarcraftPage Actions
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
  LOAD_CHARACTER,
  LOAD_CHARACTER_SUCCESS,
  LOAD_CHARACTER_ERROR,
} from './constants';

/**
 * Load the character data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CHARACTER
 */
export function loadCharacter() {
  return {
    type: LOAD_CHARACTER,
  };
}

/**
 * Dispatched when the character data is loaded by the request saga
 *
 * @param  {object} character The character data
 *
 * @return {object}      An action object with a type of LOAD_CHARACTER_SUCCESS passing the character data
 */
export function characterLoaded(character) {
  return {
    type: LOAD_CHARACTER_SUCCESS,
    character,
  };
}

/**
 * Dispatched when loading the character fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CHARACTER_ERROR passing the error
 */
export function characterLoadingError(error) {
  return {
    type: LOAD_CHARACTER_ERROR,
    error,
  };
}
