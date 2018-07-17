import {
  LOAD_CHARACTER,
  LOAD_CHARACTER_SUCCESS,
  LOAD_CHARACTER_ERROR,
} from '../constants';

import {
  loadCharacter,
  characterLoaded,
  characterLoadingError,
} from '../actions';

describe('Warcraft Actions', () => {
  describe('loadCharacter', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_CHARACTER,
      };

      expect(loadCharacter()).toEqual(expectedResult);
    });
  });

  describe('characterLoaded', () => {
    it('should return the correct type and the passed character', () => {
      const fixture = {};
      const expectedResult = {
        type: LOAD_CHARACTER_SUCCESS,
        character: fixture,
      };

      expect(characterLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('characterLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_CHARACTER_ERROR,
        error: fixture,
      };

      expect(characterLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
