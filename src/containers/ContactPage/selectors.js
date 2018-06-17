/**
 * ContactPage selectors
 */

import { createSelector } from 'reselect';

const selectContact = (state) => state.get('contact');

const makeSelectLoading = () => createSelector(
  selectContact,
  (contactState) => contactState.get('loading')
);

const makeSelectError = () => createSelector(
  selectContact,
  (contactState) => contactState.get('error')
);

export {
  selectContact,
  makeSelectLoading,
  makeSelectError,
};
