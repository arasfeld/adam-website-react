/**
 * Tests for WarcraftPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_CHARACTER } from '../constants';
import { characterLoaded, characterLoadingError } from '../actions';

import blizzardData, { getCharacter } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getCharacter Saga', () => {
  let getCharacterGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getCharacterGenerator = getCharacter();

    const callDescriptor = getCharacterGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the characterLoaded action if it requests the data successfully', () => {
    const response = {
      name: 'My character',
    };
    const putDescriptor = getCharacterGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(characterLoaded(response)));
  });

  it('should call the characterLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getCharacterGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(characterLoadingError(response)));
  });
});

describe('blizzardData Saga', () => {
  const blizzardDataSaga = blizzardData();

  it('should start task to watch for LOAD_CHARACTER action', () => {
    const takeLatestDescriptor = blizzardDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_CHARACTER, getCharacter),
    );
  });
});
