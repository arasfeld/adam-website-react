/**
 * MusicPage selectors
 */

import { createSelector } from 'reselect';

const selectMusic = (state) => state.get('music');

const makeSelectLoading = () => createSelector(
  selectMusic,
  (musicState) => musicState.get('loading')
);

const makeSelectError = () => createSelector(
  selectMusic,
  (musicState) => musicState.get('error')
);

const makeSelectAlbums = () => createSelector(
  selectMusic,
  (musicState) => musicState.get('albums')
);

const makeSelectArtists = () => createSelector(
  selectMusic,
  (musicState) => musicState.get('artists')
);

const makeSelectRecentTracks = () => createSelector(
  selectMusic,
  (musicState) => musicState.get('recentTracks')
);

export {
  selectMusic,
  makeSelectLoading,
  makeSelectError,
  makeSelectAlbums,
  makeSelectArtists,
  makeSelectRecentTracks,
};