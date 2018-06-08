import {
  LOAD_ALBUMS,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_ERROR,
  LOAD_ARTISTS,
  LOAD_ARTISTS_SUCCESS,
  LOAD_ARTISTS_ERROR,
} from '../constants';

import {
  loadAlbums,
  albumsLoaded,
  albumLoadingError,
  loadArtists,
  artistsLoaded,
  artistLoadingError,
} from '../actions';

describe('Music Actions', () => {
  describe('loadAlbums', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ALBUMS,
      };

      expect(loadAlbums()).toEqual(expectedResult);
    });
  });

  describe('albumsLoaded', () => {
    it('should return the correct type and the passed albums', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_ALBUMS_SUCCESS,
        albums: fixture,
      };

      expect(albumsLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('albumLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_ALBUMS_ERROR,
        error: fixture,
      };

      expect(albumLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('loadArtists', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ARTISTS,
      };

      expect(loadArtists()).toEqual(expectedResult);
    });
  });

  describe('artistsLoaded', () => {
    it('should return the correct type and the passed artists', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_ARTISTS_SUCCESS,
        artists: fixture,
      };

      expect(artistsLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('artistLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_ARTISTS_ERROR,
        error: fixture,
      };

      expect(artistLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
