/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { LOAD_CHARACTER } from './constants';
import { characterLoaded, characterLoadingError } from './actions';

const wowRealmName = 'illidan';
const wowCharacterName = 'syrix';
const wowCharacterFields = ['feed', 'items', 'professions', 'stats'];
const blizzardApiKey = 'API_KEY';

export function* getCharacter() {
  try {
    const requestURL = `https://us.api.battle.net/wow/character/${wowRealmName}/${wowCharacterName}?fields=${wowCharacterFields.join(
      ',',
    )}&locale=en_US&apikey=${blizzardApiKey}`;

    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);

    yield put(characterLoaded(response));
  } catch (err) {
    yield put(characterLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* blizzardData() {
  // Watches for LOAD_CHARACTER actions and calls getCharacter when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CHARACTER, getCharacter);
}
