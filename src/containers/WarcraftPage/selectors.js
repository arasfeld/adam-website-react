/**
 * WarcraftPage selectors
 */

import { createSelector } from 'reselect';

const selectWarcraft = (state) => state.get('warcraft');

const makeSelectLoading = () => createSelector(
  selectWarcraft,
  (warcraftState) => warcraftState.get('loading')
);

const makeSelectError = () => createSelector(
  selectWarcraft,
  (warcraftState) => warcraftState.get('error')
);

const makeSelectCharacter = () => createSelector(
  selectWarcraft,
  (warcraftState) => warcraftState.get('character')
);

export {
  selectWarcraft,
  makeSelectLoading,
  makeSelectError,
  makeSelectCharacter,
};
