import { LOAD_GAMES, LOAD_GAMES_SUCCESS, LOAD_GAMES_ERROR } from '../constants';

import { loadGames, gamesLoaded, gamesLoadingError } from '../actions';

describe('Games Actions', () => {
  describe('loadGames', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_GAMES,
      };

      expect(loadGames()).toEqual(expectedResult);
    });
  });

  describe('gamesLoaded', () => {
    it('should return the correct type and the passed games', () => {
      const ownedGamesFixture = ['Test'];
      const recentlyPlayedGamesFixture = ['Test'];
      const expectedResult = {
        type: LOAD_GAMES_SUCCESS,
        ownedGames: ownedGamesFixture,
        recentlyPlayedGames: recentlyPlayedGamesFixture,
      };

      expect(
        gamesLoaded(ownedGamesFixture, recentlyPlayedGamesFixture),
      ).toEqual(expectedResult);
    });
  });

  describe('gamesLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_GAMES_ERROR,
        error: fixture,
      };

      expect(gamesLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
