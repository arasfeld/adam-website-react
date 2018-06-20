import { fromJS } from 'immutable';

import musicReducer from '../reducer';
import {
  loadMusic,
  musicLoaded,
  musicLoadingError,
} from '../actions';

describe('musicReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      albums: false,
      artists: false,
      recentTracks: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(musicReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadMusic action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('albums', false)
      .set('artists', false)
      .set('recentTracks', false);

    expect(musicReducer(state, loadMusic())).toEqual(expectedResult);
  });

  it('should handle the musicLoaded action correctly', () => {
    const fixture = [{
      name: 'Test',
    }];
    const expectedResult = state
      .set('albums', fixture)
      .set('artists', fixture)
      .set('tracks', fixture)
      .set('loading', false);

    expect(musicReducer(state, musicLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the musicLoadingError action correctly', () => {
    const fixture = [{
      msg: 'Not found',
    }];
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(musicReducer(state, musicLoadingError(fixture))).toEqual(expectedResult);
  });
});
