import { fromJS } from 'immutable';

import {
  selectGames,
  makeSelectLoading,
  makeSelectError,
  makeSelectOwnedGames,
  makeSelectRecentlyPlayedGames,
} from '../selectors';

describe('selectGames', () => {
  it('should select the games state', () => {
    const gamesState = fromJS({});
    const mockedState = fromJS({
      games: gamesState,
    });
    expect(selectGames(mockedState)).toEqual(gamesState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      games: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      games: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectOwnedGames', () => {
  const ownedGamesSelector = makeSelectOwnedGames();
  it('should select the owned games', () => {
    const ownedGames = fromJS({});
    const mockedState = fromJS({
      games: {
        ownedGames,
      },
    });
    expect(ownedGamesSelector(mockedState)).toEqual(ownedGames);
  });
});

describe('makeSelectRecentlyPlayedGames', () => {
  const recentlyPlayedGamesSelector = makeSelectRecentlyPlayedGames();
  it('should select the recently played games', () => {
    const recentlyPlayedGames = fromJS({});
    const mockedState = fromJS({
      games: {
        recentlyPlayedGames,
      },
    });
    expect(recentlyPlayedGamesSelector(mockedState)).toEqual(
      recentlyPlayedGames,
    );
  });
});
