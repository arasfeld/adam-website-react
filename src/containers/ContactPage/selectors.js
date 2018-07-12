/**
 * ContactPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectContact = state => state.get('contact', initialState);

const makeSelectLoading = () =>
  createSelector(selectContact, contactState => contactState.get('loading'));

const makeSelectError = () =>
  createSelector(selectContact, contactState => contactState.get('error'));

const makeSelectMessage = () =>
  createSelector(selectContact, contactState => contactState.get('message'));

export { selectContact, makeSelectLoading, makeSelectError, makeSelectMessage };
