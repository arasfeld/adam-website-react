/*
 * GamesPage Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */

import { fromJS } from 'immutable';

import { LOAD_GAMES, LOAD_GAMES_SUCCESS, LOAD_GAMES_ERROR } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  ownedGames: false,
  recentlyPlayedGames: false,
});

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAMES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('ownedGames', false)
        .set('recentlyPlayedGames', false);
    case LOAD_GAMES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('ownedGames', action.ownedGames)
        .set('recentlyPlayedGames', action.recentlyPlayedGames);
    case LOAD_GAMES_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default gamesReducer;
