import { fromJS } from 'immutable';

import musicReducer from '../reducer';
import {
  loadAlbums,
  albumsLoaded,
  albumLoadingError,
  loadArtists,
  artistsLoaded,
  artistLoadingError,
} from '../actions';

describe('musicReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      albums: false,
      artists: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(musicReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadAlbums action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('albums', false);

    expect(musicReducer(state, loadAlbums())).toEqual(expectedResult);
  });

  it('should handle the albumsLoaded action correctly', () => {
    const fixture = [{
      name: 'My Album',
    }];
    const expectedResult = state
      .set('albums', fixture)
      .set('loading', false);

    expect(musicReducer(state, albumsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the albumLoadingError action correctly', () => {
    const fixture = [{
      msg: 'Not found',
    }];
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(musicReducer(state, albumLoadingError(fixture))).toEqual(expectedResult);
  });

  it('should handle the loadArtists action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('artists', false);

    expect(musicReducer(state, loadArtists())).toEqual(expectedResult);
  });

  it('should handle the artistsLoaded action correctly', () => {
    const fixture = [{
      name: 'My Artist',
    }];
    const expectedResult = state
      .set('artists', fixture)
      .set('loading', false);

    expect(musicReducer(state, artistsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the artistLoadingError action correctly', () => {
    const fixture = [{
      msg: 'Not found',
    }];
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(musicReducer(state, artistLoadingError(fixture))).toEqual(expectedResult);
  });
});
