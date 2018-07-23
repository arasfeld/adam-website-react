/*
 * GamesPage Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 */

import { LOAD_GAMES, LOAD_GAMES_SUCCESS, LOAD_GAMES_ERROR } from './constants';

/**
 * Load the game data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GAMES
 */
export function loadGames() {
  return {
    type: LOAD_GAMES,
  };
}

/**
 * Dispatched when the game data is loaded by the request saga
 *
 * @param  {array} ownedGames The owned game data
 * @param  {array} recentlyPlayedGames The recently played game data
 *
 * @return {object} An action object with a type of LOAD_GAMES_SUCCESS passing the game data
 */
export function gamesLoaded(ownedGames, recentlyPlayedGames) {
  return {
    type: LOAD_GAMES_SUCCESS,
    ownedGames,
    recentlyPlayedGames,
  };
}

/**
 * Dispatched when loading the games fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_GAMES_ERROR passing the error
 */
export function gamesLoadingError(error) {
  return {
    type: LOAD_GAMES_ERROR,
    error,
  };
}
