import { fromJS } from 'immutable';

import {
  selectWarcraft,
  makeSelectLoading,
  makeSelectError,
  makeSelectCharacter,
} from '../selectors';

describe('selectWarcraft', () => {
  it('should select the warcraft state', () => {
    const warcraftState = fromJS({});
    const mockedState = fromJS({
      warcraft: warcraftState,
    });
    expect(selectWarcraft(mockedState)).toEqual(warcraftState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      warcraft: {
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
      warcraft: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectCharacter', () => {
  const characterSelector = makeSelectCharacter();
  it('should select the character', () => {
    const character = fromJS({});
    const mockedState = fromJS({
      warcraft: {
        character,
      },
    });
    expect(characterSelector(mockedState)).toEqual(character);
  });
});
