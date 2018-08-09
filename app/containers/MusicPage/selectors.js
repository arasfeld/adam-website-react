/**
 * MusicPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMusic = state => state.get('music', initialState);

const makeSelectLoading = () =>
  createSelector(selectMusic, musicState => musicState.get('loading'));

const makeSelectError = () =>
  createSelector(selectMusic, musicState => musicState.get('error'));

const makeSelectAlbums = () =>
  createSelector(selectMusic, musicState => musicState.get('albums'));

const makeSelectArtists = () =>
  createSelector(selectMusic, musicState => musicState.get('artists'));

const makeSelectTracks = () =>
  createSelector(selectMusic, musicState => musicState.get('tracks'));

export {
  selectMusic,
  makeSelectLoading,
  makeSelectError,
  makeSelectAlbums,
  makeSelectArtists,
  makeSelectTracks,
};