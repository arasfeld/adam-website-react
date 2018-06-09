/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import {
  LOAD_ALBUMS,
  LOAD_ARTISTS,
  LOAD_LAST_TRACK,
} from './constants';
import {
  albumsLoaded,
  albumLoadingError,
  artistsLoaded,
  artistLoadingError,
  lastTrackLoaded,
  lastTrackLoadingError,
} from './actions';

const lastFmUsername = 'arazzy';
const lastFmApiKey = 'API_KEY';

/**
 * Last.fm top 50 albums request/response handler
 */
export function* getTopAlbums() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastFmUsername}&api_key=${lastFmApiKey}&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(albumsLoaded(response.topalbums.album));
  } catch (err) {
    yield put(albumLoadingError(err));
  }
}

/**
 * Last.fm top 50 artists request/response handler
 */
export function* getTopArtists() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${lastFmUsername}&api_key=${lastFmApiKey}&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(artistsLoaded(response.topartists.artist));
  } catch (err) {
    yield put(artistLoadingError(err));
  }
}

/**
 * Last.fm last played track request/response handler
 */
export function* getLastTrack() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=1&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(lastTrackLoaded(response.recenttracks.track[0]));
  } catch (err) {
    yield put(lastTrackLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* lastFmData() {
  // Watches for LOAD_ALBUMS and LOAD_ARTISTS actions and calls getAlbums when one
  // comes in. By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ALBUMS, getTopAlbums);
  yield takeLatest(LOAD_ARTISTS, getTopArtists);
}
