import { fromJS } from 'immutable';

import warcraftReducer from '../reducer';
import {
  loadCharacter,
  characterLoaded,
  characterLoadingError,
} from '../actions';

describe('warcraftReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      character: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(warcraftReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadCharacter action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('character', false);

    expect(warcraftReducer(state, loadCharacter())).toEqual(expectedResult);
  });

  it('should handle the characterLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Character',
      },
    ];
    const expectedResult = state
      .set('character', fixture)
      .set('loading', false);

    expect(warcraftReducer(state, characterLoaded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the characterLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(warcraftReducer(state, characterLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
