/**
 * GamesPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGames = state => state.get('games', initialState);

const makeSelectLoading = () =>
  createSelector(selectGames, gamesState => gamesState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGames, gamesState => gamesState.get('error'));

const makeSelectOwnedGames = () =>
  createSelector(selectGames, gamesState => gamesState.get('ownedGames'));

const makeSelectRecentlyPlayedGames = () =>
  createSelector(selectGames, gamesState =>
    gamesState.get('recentlyPlayedGames'),
  );

export {
  selectGames,
  makeSelectLoading,
  makeSelectError,
  makeSelectOwnedGames,
  makeSelectRecentlyPlayedGames,
};
