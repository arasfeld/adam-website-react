/**
 * WarcraftPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWarcraft = state => state.get('warcraft', initialState);

const makeSelectLoading = () =>
  createSelector(selectWarcraft, warcraftState => warcraftState.get('loading'));

const makeSelectError = () =>
  createSelector(selectWarcraft, warcraftState => warcraftState.get('error'));

const makeSelectCharacter = () =>
  createSelector(selectWarcraft, warcraftState =>
    warcraftState.get('character'),
  );

export {
  selectWarcraft,
  makeSelectLoading,
  makeSelectError,
  makeSelectCharacter,
};
