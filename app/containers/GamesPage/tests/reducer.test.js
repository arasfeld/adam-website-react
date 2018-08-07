import { fromJS } from 'immutable';

import gamesReducer from '../reducer';
import { loadGames, gamesLoaded, gamesLoadingError } from '../actions';

describe('gamesReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      ownedGames: false,
      recentlyPlayedGames: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(gamesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadGames action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('ownedGames', false)
      .set('recentlyPlayedGames', false);

    expect(gamesReducer(state, loadGames())).toEqual(expectedResult);
  });

  it('should handle the gamesLoaded action correctly', () => {
    const ownedGamesFixture = [{ name: 'Test' }];
    const recentlyPlayedGamesFixture = [{ name: 'Test' }];
    const expectedResult = state
      .set('ownedGames', ownedGamesFixture)
      .set('recentlyPlayedGames', recentlyPlayedGamesFixture)
      .set('loading', false);

    expect(
      gamesReducer(
        state,
        gamesLoaded(ownedGamesFixture, recentlyPlayedGamesFixture),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the gamesLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(gamesReducer(state, gamesLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
