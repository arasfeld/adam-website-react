import {
  LOAD_MUSIC,
  LOAD_MUSIC_SUCCESS,
  LOAD_MUSIC_ERROR,
} from '../constants';

import {
  loadMusic,
  musicLoaded,
  musicLoadingError,
} from '../actions';

describe('Music Actions', () => {
  describe('loadMusic', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_MUSIC,
      };

      expect(loadMusic()).toEqual(expectedResult);
    });
  });

  describe('musicLoaded', () => {
    it('should return the correct type and the passed albums, artists, and tracks', () => {
      const albumsFixture = ['Test'];
      const artistsFixture = ['Test'];
      const tracksFixture = ['Test'];

      const expectedResult = {
        type: LOAD_MUSIC_SUCCESS,
        albums: albumsFixture,
        artists: artistsFixture,
        tracks: tracksFixture,
      };

      expect(musicLoaded(albumsFixture, artistsFixture, tracksFixture)).toEqual(expectedResult);
    });
  });

  describe('musicLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_MUSIC_ERROR,
        error: fixture,
      };

      expect(musicLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
