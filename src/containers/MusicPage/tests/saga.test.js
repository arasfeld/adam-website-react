import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_MUSIC } from '../constants';
import { musicLoaded, musicLoadingError } from '../actions';

import lastFmData, { getMusic } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getMusic Saga', () => {
  let getMusicGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getMusicGenerator = getMusic();

    const allDescriptor = getMusicGenerator.next().value;
    allDescriptor.ALL.forEach(saga => {
      const callDescriptor = saga.next().value;
      expect(callDescriptor).toMatchSnapshot();
    });
  });

  it('should dispatch the musicLoaded action if it requests the data successfully', () => {
    const response = [[], [], []];
    const putDescriptor = getMusicGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(musicLoaded(response[0], response[1], response[2])),
    );
  });

  it('should dispatch the musicLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getMusicGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(musicLoadingError(response)));
  });
});

describe('lastFmData Saga', () => {
  const lastFmDataSaga = lastFmData();

  it('should start task to watch for LOAD_MUSIC actions', () => {
    const takeLatestLoadMusicDescriptor = lastFmDataSaga.next().value;
    expect(takeLatestLoadMusicDescriptor).toEqual(
      takeLatest(LOAD_MUSIC, getMusic),
    );
  });
});
