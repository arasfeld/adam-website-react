/**
 * Tests for GamesPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_GAMES } from '../constants';
import { gamesLoaded, gamesLoadingError } from '../actions';

import steamData, { getGames } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getGames Saga', () => {
  let getGamesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getGamesGenerator = getGames();

    const allDescriptor = getGamesGenerator.next().value;
    allDescriptor.ALL.forEach(saga => {
      const callDescriptor = saga.next().value;
      expect(callDescriptor).toMatchSnapshot();
    });
  });

  it('should dispatch the gamesLoaded action if it requests the data successfully', () => {
    const response = [[], []];
    const putDescriptor = getGamesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(gamesLoaded(response[0], response[1])));
  });

  it('should dispatch the gamesLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getGamesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(gamesLoadingError(response)));
  });
});

describe('steamData Saga', () => {
  const steamDataSaga = steamData();

  it('should start task to watch for LOAD_GAMES action', () => {
    const takeLatestDescriptor = steamDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_GAMES, getGames));
  });
});
